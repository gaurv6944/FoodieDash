import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"



//app config 
const app = express()
const port = 4000

//middleware
app.use(express.json())  //req from frontend to backend will be oarsed using this json
app.use(cors())  

//db connection 
connectDB();

//api endpoints
app.use("/api/food" , foodRouter)  // It tells the Express application to use the foodRouter for any requests that start with the path /api/food
app.get("/" , (req , res)=>{
   res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
