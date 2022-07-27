const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use(express.static('public'));

app.get('/', function(req, res){
    console.log(req)
    console.log(res)
})


app.listen(PORT, console.log(`Listening on PORT http://localhost:${PORT}`))