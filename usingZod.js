const express = require("express")
const zod = require("zod")
const app= express();
let myschema =zod.array(zod.number())

app.use(express.json())
app.post("/health-checkup", function(req, res){
    const kidneys= req.body.kidneys;
    const response= myschema.safeParse(kidneys);
   if(response){
        res.json({
        msg: response
    })
}
})
 app.use(function(err, req, res, next){
    res.send("sorry there was an error in the input of the data")
})
app.listen(3000)