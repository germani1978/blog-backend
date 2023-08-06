
import pool from "../db/db.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {

   try {

      const [resp] = await pool.query("SELECT * FROM user");

      res.status(200).json(resp);

   } catch (error) {

      res.status(500).json(error.message);
   }

}
export const getUser = async (req, res) => {

   try {
 
      const [resp] = await pool.query("SELECT * FROM user WHERE id_user = ?", req.params.id);

      res.status(200).json(resp);

   } catch (error) {

      res.status(500).json(error.message);
   }
}

export const deleteUser = async (req, res) => {

   try {

      const [resp] = await pool.query("DELETE FROM user WHERE id_user = ?", req.params.id);

      resp['affectedRows'] === 0
         ? res.status(404).json({ msg: "Not deleted" })
         : res.sendStatus(204);

   } catch (error) {
      res.status(500).json(error.message);
   }

}
export const registerUser = async (req, res) => {

   try {
      const { username, email, password } = req.body;

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const [resp] = await pool.query(
         "INSERT INTO user (username, email, password) VALUES (?,?,?)",
         [ username, email, hash ]);

      resp['affectedRows'] === 0
         ? res.status(404).json({ msg: "Not add" })
         : res.sendStatus(204);

   } catch (error) {
      res.status(500).json(error.message);
   }

}

export const loginUser = async (req, res) => {

   try {
      const { username, password } = req.body;

      const data = await pool.query("SELECT * FROM user WHERE username = ?", username)

      if (data[0].length === 0) 
         return res.status(404).json("Not user found");

      const user = data[0][0];

      const isPasswordOK = bcrypt.compareSync(password, user.password);
            
      (isPasswordOK) 
         ? res.sendStatus(202)
         : res.status(404).json("Not password ok");

   } catch (error) {
      res.status(500).json(error.message);
   }

}

export const updateUser = async (req, res) => {

   try {

      const [resp] = await pool.query(
         "UPDATE user SET ? WHERE id_user = ?",
         [ req.body, req.params.id]);

      resp['affectedRows'] === 0
         ? res.status(404).json({ msg: "Not update" })
         : res.sendStatus(204);

   } catch (error) {
      res.status(500).json(error.message);
   }

}
