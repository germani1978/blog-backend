import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getBlogs } from "../api/api.jsx";


const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const cat = useLocation().search;


  useEffect(() => {
    getBlogs(cat)
      .then((resp) => {
        setBlogs(resp.data);
        setLoading(false);
      })
      .catch((err) => console.error(err.message));
  }, [cat]);

  return { loading, blogs };
};

const Home = () => {
  const { loading, blogs } = useFetchData();
  const navigate = useNavigate();


  if (loading)
    return (
      <div className="m-6 text-2xl font-bold text-center">Cargando...</div>
    );

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html,"text/html");
    const cad =  doc.body.textContent.substring(0,200);
    return cad;
  }

  return (
    <div className="m-16">
      {blogs.map((post) => (
        <div className="flex mb-36" key={post.id_blog}>
          <div className="">
            <div
              className="foto hover:saturate-150 hover:border-2 hover:shadow-cyan-300"
              onClick={() => navigate(`/post/${post.id_blog}`)}
            >
              <img src={`../upload/${post.img}`} alt="foto" />
            </div>
          </div>

          <div className="texto w-96 m-20">
            <h1 className="text-5xl font-bold mb-12 text-cyan-950">
              {post.titulo}
            </h1>
            <p className="text-xl line leading-8 -tracking-wide">
              {getText(post.contenido)} ...
            </p>

            <p className="bg-blue-400 py-1 px-5 font-sans inline-block rounded mt-2">
              {post.tag}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;


