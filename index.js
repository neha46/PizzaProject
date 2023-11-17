const app=require('./app.js');
const Port=process.env.Port||8000;
app.listen(Port,()=>{
    console.log('serve is running')
})