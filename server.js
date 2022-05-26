const express = require('express')
const port = 8080
const app = express()

// a middleware function with no mount path. This code is executed for every request to the router
const middleware1  = (req, res, next) => {
  console.log('Time:', Date.now())
  next()
}

const middleware2 = (req, res, next)=>{
    console.log("second middleware");
    next()
}
app.use(middleware1);

//route creation
app.get("/",(req,res)=>{
    res.send("<h1>This is middleware</h1>")
})

app.get("/home",middleware2,(req,res)=>{   
    res.send("<h2>This is main page</h2>")
})

app.get("/",(req,res)=>{
    res.send("<h2>This is contact page</h2>")
})

app.get("/home",middleware2,(req,res)=>{   
    res.send("<h2>This is about page</h2>")
})


app.listen(port,()=>{
    console.log(`server run at the port ${port}`);
}) 



