const express= require("express")
const app= express();
app.use(express.json())
app.post("/health-checkup", (req, res)=>{
    const kidneys= req.body.kidneys;
    const kidneyLength= kidneys.length

    res.send("the length of kidneys in your body is "+kidneyLength);
})
app.use(function(err, req, res, next){
    res.send("sorry an error occurred and server crashed")
})
app.listen(3000)