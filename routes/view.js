import express from 'express'
const app = express();

app.set('view engine','hbs');

app.get('/home',(req,res)=>{
    res.render('product');
});

app.listen(3000,()=>{
console.log("server is running")
});