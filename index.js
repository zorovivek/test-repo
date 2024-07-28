const express= require('express')
const bodyParser= require('body-parser')
const port = 3000


const app = express()
app.use(bodyParser.json())
app.post('/', function(req,res){
        // console.log(req.body)
        console.log(req.query.message)
})
app.listen(port);
