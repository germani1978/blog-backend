
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
export const addUser = async (req, res) => {

   try {
      const { username, email, password } = req.body;

      // const bcrypt = require('bcrypt');

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

// export const loginUser = async (req, res) => {

//    res.send("hola")

   // try {
   //    const { username, password } = req.body;

   //    console.log(username, password);

      // pool.query("SELECT * FROM user WHERE username = ?", username)
      //    .then(data => {
      //       // if (data.length === 0) return res.status(404).json('User not found');
      //       console.log(data);
      //    })
      //    .catch(err => {
      //       return res.status(500).json(err);
      //    })


      // const isPasswordOK = bcrypt.compareSync(password, hash);

      // const salt = bcrypt.genSaltSync(10);
      // const hash = bcrypt.hashSync(password, salt);


      // const [resp] = await pool.query(
      //    "INSERT INTO user (username, email, password) VALUES (?,?,?)",
      //    [ username, email, hash ]);

      // resp['affectedRows'] === 0
      //    ? res.status(404).json({ msg: "Not add" })
      //    : res.sendStatus(204);

   // } catch (error) {
   //    res.status(500).json(error.message);
   // }

// }


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
