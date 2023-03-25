const express= require("express");
const cors= require("cors");
const connectDb= require("./config/database")
const UserRouter= require("./routes/user")
const SprintTask= require("./routes/sprint")
require("dotenv").config();

const app= express();
app.use(cors());
app.use(express.json())
app.use('/user',UserRouter);
app.use('/sprint',SprintTask);

const port=8000;

connectDb()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is listening on port ${port}`)
    })
})

