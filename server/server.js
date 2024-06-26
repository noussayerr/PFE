const express=require("express");
const app=express();
const cors=require("cors")
app.use(cors())
app.use(express.json(),express.urlencoded({extended:true}))

require('dotenv').config()
const port=process.env.port 

require("./config/parking.config")

require("./routes/user.routes")(app)
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/c', require('./routes/contactus.routes'));




app.listen(port,()=>console.log(`listen on port ${port}`))