import express from 'express'
import path from 'path';
import home from './routes/home.js';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


const app = express();
app.use(express.json());

app.use('/api',home);


app.get('/media',(req,res)=>{
    res.sendFile(path.join(__dirname, './images/gold.jpeg'));
})


app.post('/contact', (req, res) => {
  const {name}= req.body;
  res.send(`hello ${name}`);
})
app.get('/home',(req,res)=>{
    res.send("hello home server");
})

app.listen(3000,(error)=>{
    if(!error){
        console.log("server is listening 3000");
}else{
    console.log("error")
    }
})