import mongoose from "mongoose"

const contactDetails = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
    
})
 export default mongoose.models.contactDetails || mongoose.model("contactDetails", contactDetails,"contactdetails");