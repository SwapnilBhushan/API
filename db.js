const mongoose=require("mongoose")

const TestSchema=new mongoose.Schema({
    name: {type: String},
    email: {type: String}
})


const Test=mongoose.model("Test", TestSchema)

module.exports=Test;