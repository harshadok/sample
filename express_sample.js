const express =  require('express')
const path = require('path')
const app = express()
app.listen(3000, function () {
    console.log("server started")
    console.log(__dirname)

}) 

app.get('/signup', function (req, res) {
   res.sendFile(path.join(__dirname,'signup.html'))
   console.log("server started")
})

app.post("/signup" , function(req , res) {
    res.send("account created ")
  
})

app.get("/about" , (req, res) => res.send ("about"))

