require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// set file tĩnh để lấy dữ liệu ảnh
app.use(express.static('uploads'))


// database connection 
mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error(err));

// routes prefix
app.use("/api/posts", require("./routes/post.routes"));
app.use("/user", require("./routes/user.routes")); 

 

// start server
app.listen(port, () => console.log(`Server is running at ${port}`));