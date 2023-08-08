import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pen from "../components/Pen.jsx";
import Trash from "../components/Trash.jsx";
import { deleteBlog, getBlog } from "../api/api.jsx";
import { AuthContext } from '../context/authContext.jsx'


const useFetchData = (id) => {

  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getBlog(id)
      .then((resp) => {
        setBlog(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [id]);

  return { loading, blog };
};

const Post = () => {

  const id = useParams().id;
  const { loading, blog } = useFetchData(id);
  const navigate = useNavigate();
  const {currentUser} = useContext( AuthContext );

  const handleEdit = () => navigate(`/edit/${id}`);

  const handleDel = async(e) => {
    e.preventDefault();
    try {
      await deleteBlog(id);
      navigate(`/`);
    } catch (error) {
      console.error(error.message);
    }
  }


  if (loading)
    return (
      <div className="m-6 text-2xl font-bold text-center">Cargando...</div>
    );

  return (
    <div className="text-center p-2 w-8/12 mt-5">
      <h1 className="text-7xl font-bold mb-12">{blog.titulo}</h1>
      <div className="w-7/12 mx-auto">
        <img
          className="mb-2 w-full rounded-md"
          src={`../upload/${blog.img}`}
          alt="foto"
        />
      </div>
      <div>
        { blog.username }
      </div>
      <p className="bg-blue-400 py-1 px-5 font-sans inline-block rounded mb-1 mt-1">
        {blog.tag}
      </p>
      { 
        currentUser.username === blog.username && 
          <div className="flex text-base gap-5 p-2 mb-5 items-center justify-center">
            <div onClick={handleEdit}>
              <Pen />
            </div>
            <div onClick={handleDel}>
              <Trash />
            </div>
          </div>
      }
      <p className="text-lg text-start  mx-auto my-2 leading-6 -tracking-wide">
        {blog.contenido}
      </p>
    </div>
  );
};

export default Post;
