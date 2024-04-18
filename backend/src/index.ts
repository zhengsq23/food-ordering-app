import express, {Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>{
    console.log("Connected to database!")
})


// 新建express服务器
const app = express();
// 添加中间件，将api请求转为json
app.use(express.json())
app.use(cors())

// app收到/test请求返回json对象
app.get("/test",async (req:Request, res:Response)=>{
    res.json({message:"Hello!"});
})

app.use("/api/my/user", myUserRoute);

// 服务器开启成功执行回调函数
app.listen(7001,()=>{
    console.log("server started on localhost:7001")
})