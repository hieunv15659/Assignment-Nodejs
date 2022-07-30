import express from 'express';
import cors from 'cors';
import path from 'path'
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();
const PORT = 8080;

///teamlate engine

app.engine('hbs',engine({
    extname: '.hbs'
  }))
  app.set('view engine','hbs')
  app.set('views',path.join(__dirname,'resources/views'))

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/signup', (req, res) => {
    res.render('signup');
});
// middleware
app.use(cors());
app.use(express.json())
app.get


// connnect database
// mongoose.connect('mongodb://localhost:27017/products')
//     .then(() => console.log("Kết nối db thành công"))
//     .catch((error) => console.log(error));

// connection
 
app.listen(PORT, () => {
    console.log("Máy chủ đang chạy cổng", PORT);
})