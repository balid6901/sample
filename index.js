const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')

const userRoutes=require("./routes/userRoutes")

const app=express();


mongoose.connect("mongodb+srv://sample:12345@cluster0.vlmxppw.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Mongo DB connected succesfully")
})
.catch((err)=>{
    console.log(err);
})

app.use(bodyParser.json());
app.use(cors());

app.use("/api",userRoutes);


// app.get("/check",(req,res)=>{
//     console.log("jjjjjjjjjjjjj");
//     res.json({"working":"server"})
// })




app.listen(5000,(req,res)=>{
    console.log("server is running at port 5000")
})