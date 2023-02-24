// Creating the port

// const express=require("express");
// const app=express();
// const port=9000;

// app.listen(port,()=>{
//     console.log("Port Number :"+port+"Running");
// })
// app.get("/first",(req,resp)=>{
//     resp.send("Welcome To Webpage...~~~~");
// })

const express = require('express');

const app = express();

const port = 3000; // The port on which the server will listen

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
