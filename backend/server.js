import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
// app config
const app = express()
const port = 4000

// middleware => request is parsed
app.use(express.json())
// using this we can access backend from frontend
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/image",express.static('uploads'))
app.use("/api/user",userRouter)

app.get("/",(req, res)=>{

    res.send("API working")
})

// running the express server
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})
