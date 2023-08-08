import express from 'express';
import multer from "multer";
import cookieParser from 'cookie-parser';

import { PORT } from './config.js';
import cors from "cors";




import blogsRouter from './routes/blogsRoutes.js'
import usersRouter from './routes/userRoutes.js'

const app = express();

// Middleware
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/blog", blogsRouter);
app.use("/user", usersRouter);


//Fotos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './blog/public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

try {
    app.post('/upload', upload.single('file'), function (req, res) {
        res.status(200).json("Imagen has been uploaded")
    })
} catch (error) {
    console.log(error);
}


//SERVER
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});




