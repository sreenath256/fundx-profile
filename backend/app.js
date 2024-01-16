const express = require("express")
const app = express()
const cors = require('cors');
const connectDb = require('./config/db');
require('dotenv').config()
const errorHandling = require('./middlewares/error-handling')

app.use(express.json())
connectDb()

app.use(cors());


app.get("/", (req,res) => {
    res.json({ msg: "Hello World"});
});

app.use("/api/user", require('./routes/userRoutes'))
app.use("/api/investor",require('./routes/investorRouter'))
app.use("/api/startup",require('./routes/startupRouter'))

app.use(errorHandling)

app.listen(process.env.PORT || 5000, () => console.log("Server is running on port 5000"))