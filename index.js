const express = require('express')
const app =express()
const port = 8000

app.get('/api/login', function(req, res){
    res.send('{Status: "OK"}')
})

app.listen(port , ()=>
console.log(`App listening in port ${port}`))