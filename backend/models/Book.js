import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    bookName:{
        type:String,
        require:true
    },
    alternateTitle:{
        type:String,
        default:""
    },
    author:{
        type:String,
        require:true
    },
    language:{
        type:String,
        default:""
    },
    publisher:{
        type:String,
        default:""
    },
    bookCountAvailable:{
        type:Number,
        require:true
    },
    bookStatus:{
        type:String,
        default:"Available"
    },
    categories:[{ 
        type: mongoose.Types.ObjectId, 
        ref: "BookCategory" 
    }],
    transactions:[{
        type:mongoose.Types.ObjectId,
        ref:"BookTransaction"
    }]
},
{
    timestamps:true
})

export default mongoose.model("Book",BookSchema)