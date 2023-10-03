const express=require("express")
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())



const userEmail="swapnil@gmail.com"
const userName="swapnil"

app.post("/register", (req,res)=>{
    const {name, email}=req.body

    if(name=== userEmail && email===userEmail){
        res.status(200)
    }else{
        res.status(400)
    }
})
app.listen(2020, ()=>{
    console.log("server started at port 2020")
})