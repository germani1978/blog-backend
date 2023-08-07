import pool from "../db/db.js";

export const getBlogs = async (req, res) => {

   const cat = req.query.cat;


   try {

      const [resp] = cat ? await pool.query("SELECT * FROM blogs WHERE tag=?", [cat]) : await pool.query("SELECT * FROM blogs");

      res.status(200).json(resp);

   } catch (error) {

      res.status(500).json(error.message);
   }

}
export const getBlog = async (req, res) => {

   try {

      const [resp] = await pool.query("SELECT * FROM blogs WHERE id_blog = ?", req.params.id);

	if (resp.length=== 0) return res.sendStatus(404);

      res.status(200).json(resp[0]);

   } catch (error) {

      res.status(500).json(error.message);
   }
}

export const deleteBlog = async (req, res) => {

   try {

      const [resp] = await pool.query("DELETE FROM blogs WHERE id_blog = ?", req.params.id);

      resp['affectedRows'] === 0
         ? res.status(404).json({ msg: "Not deleted" })
         : res.sendStatus(204);

   } catch (error) {
      res.status(500).json(error.message);
   }

}
export const addBlog = async (req, res) => {

   try {
      const { titulo, contenido, created_by, tag, img } = req.body;

      const [resp] = await pool.query(
         "INSERT INTO blogs (titulo, contenido, created_by, tag, img) VALUES (?,?,?,?,?)",
         [titulo, contenido, created_by, tag, img]);

      resp['affectedRows'] === 0
         ? res.status(404).json({ msg: "Not add" })
         : res.sendStatus(204);

   } catch (error) {
      res.status(500).json(error.message);
   }

}
export const updateBlog = async (req, res) => {

   try {

      const [resp] = await pool.query(
         "UPDATE blogs SET ? WHERE id_blog = ?",
         [ req.body, req.params.id]);

      resp['affectedRows'] === 0
         ? res.status(404).json({ msg: "Not update" })
         : res.sendStatus(204);

   } catch (error) {
      res.status(500).json(error.message);
   }

}
