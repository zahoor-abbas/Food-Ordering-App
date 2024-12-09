import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import dotenv from "dotenv";
dotenv.config();



//app config
const app =express()
const PORT = process.env.PORT || 7000



//middleware
app.use(express.json()) //this middleware is used for get the request from front to the backend
app.use(cors())   //this middleware is used for connecting frontend with backend


//DB connection 
connectDB();


//Api end point

app.use('/api/food', foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)


//this is for server running
app.listen(PORT, ()=>{
  console.log(`server is running at http://localhost:${PORT}`)
})



