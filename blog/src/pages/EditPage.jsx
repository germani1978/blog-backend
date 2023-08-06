/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { createBlog, getBlog, updateBlog } from "../api/api.jsx";
import axios from "axios";
import BtnUpload from "../components/BtnUpload.jsx";
import ChechPanel from "../components/ChechPanel.jsx";
import Edit from "../components/Edit.jsx";


// TITLE y CONTENIDO
const EditPage = () => {

  const id = useParams().id;
  const [fileImg, setFileImg] = useState(null);
  const [blog, setBlog] = useState({ titulo: "", contenido: "", created_by: 2, tag: "", img: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getBlog(id) //ACTUALIZANDO
        .then( resp =>  setBlog(resp.data))
        .catch( err => console.error(err.message));
    }
  }, [id])
  
  const uploadImg = async () => {
    const formdata = new FormData();
    formdata.append('file', fileImg)
    try {
      const resp = await axios.post("http://localhost:8800/upload", formdata);
      console.log(resp.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleTag = (event) => {
    setBlog((prev) => ({ ...prev, tag: event.target.value }));
  }

  const handleSend = async (e) => {
    e.preventDefault();
    uploadImg();
    

    if (!id) {

      try {
        await createBlog(blog);
        navigate("/");
      } catch (error) {
        console.error(error.message);
      }

    } else {
      try {
        await updateBlog(id, blog);
        navigate("/");
      } catch (error) {
        console.error(error.message);
      }
    }
  };


  return id && !blog 
    ? <div className="m-6 text-2xl font-bold text-center">Cargando...</div>
    : <form className="w-8/12 mx-auto m-16">
        
        <input
          type="text"
          placeholder="Titulo"
          className="px-3 py-2 bg-transparent outline-none border-b border-gray-300 mb-4"
          onChange={ e =>
            setBlog((prev) => ({ ...prev, titulo: e.target.value }))
          }
          value={blog.titulo}
        />{/*titulo*/}

        <div className="flex justify-between py-4 h-80">
          
          <Edit blog={blog} setBlog={setBlog}/>

          <div className="input-radio-button ml-6">

            <h1 className="text-2xl mb-1 font-bold">Foto</h1>

            <div>
              <BtnUpload setFileImg={setFileImg}  setBlog={setBlog}/>
              <div className="my-1  inline-block">{blog.img}</div>
            </div>

            <ChechPanel tag={blog.tag} handleTag={handleTag} />

          </div>
        </div>

        {/* BOTON ENVIAR */}
        <button className="px-3 py-2 bg-blue-500 text-white" onClick={handleSend}>
          Guardar
        </button>
  </form>
   
  
    
};

export default EditPage;
