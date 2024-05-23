import mongoose from "mongoose";
  
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shivgupta0807:123@cluster0.fzqpxri.mongodb.net/FoodieDash').then(()=>console.log("DB Connected"))
}

