import pool from "../db/db.js";
import jwt from "jsonwebtoken";

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

      const [resp] = await pool.query("SELECT blogs.*, user.* FROM blogs JOIN user ON blogs.created_by = user.id_user WHERE id_blog = ?", req.params.id);

	if (resp.length=== 0) return res.sendStatus(404);

      res.status(200).json(resp[0]);

   } catch (error) {

      res.status(500).json(error.message);
   }
}

export const deleteBlog = async (req, res) => {


   
   try {
      
      const token = req.cookies.access_token;
      
      if (!token) res.status(401).json("Not authenticated!");
      
      
      jwt.verify(token, "jwtkey", async (err, userInfo) => {

         if (err) return res.status(403).json("Token is not valid");

         const postId = req.params.id;

         const [resp] = await pool.query("DELETE FROM blogs WHERE id_blog = ? AND created_by = ?", [ postId, userInfo.id ]);

         resp['affectedRows'] === 0
            ? res.status(403).json("you can't delete this post")
            : res.sendStatus(204);


      })

   } catch (error) {
      res.status(500).json(error.message);
   }

}

export const addBlog = async (req, res) => {

   try {
      const { titulo, contenido, created_by, tag, img } = req.body;

      const [resp] = await pool.query(
         "INSERT INTO blogs (titulo, contenido, created_by, tag, img ) VALUES (?,?,?,?,?)",
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
