/* eslint-disable react/prop-types */
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const Edit = ({blog, setBlog}) => {
  return (
        <ReactQuill
            theme="snow"
            onChange={(value) =>
              setBlog((prev) => ({ ...prev, contenido: value }))
            }
            className="input-editor h-60 w-6/12"
            value={blog.contenido}
          />
  )
}

export default Edit

