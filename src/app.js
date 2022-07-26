import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();
const PORT = 8080;
// middleware
app.use(cors());
app.use(express.json())



// connnect database
mongoose.connect('mongodb://localhost:27017/products')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));

// connection
 
app.listen(PORT, () => {
    console.log("Máy chủ đang chạy cổng", PORT);
})