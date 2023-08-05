/* eslint-disable react/prop-types */
const BtnUpload = ({ setFileImg, setBlog }) => {
  return (
    <div>
      <label
        name="imagen"
        htmlFor="file"
        className="px-3 py-1 rounded-sm bg-blue-500 text-white hover:bg-blue-400 "
      >
        Foto
      </label>

      <input
        type="file"
        id="file"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files[0];
          setFileImg(file);
          setBlog(prev => ({ ...prev, img: file.name }))
        }}
      />
    </div>
  );
};

export default BtnUpload;
