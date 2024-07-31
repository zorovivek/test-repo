const express = require("express")
const app= express()
const authentication=(req, res, next)=>{
    const username= req.headers.username;
    const password= req.headers.password;
    if(username!= "vivek" || password!= "monsterking"){
        res.status(403).json({
            msg:"you have invalid credentials so cannot login"
        })
        return
    }
    next()
}
const inputfunc=(req, res, next)=>{
    const kidneyId= req.query.kidneyId;
    if(kidneyId!=1 && kidneyId!= 2){
        res.status(403).json({
            msg:"you have abnormal kidneys so cannot do the checkup"
        })
        return
    }
    next()
}
app.get("/health-checkup", authentication,inputfunc, function(req, res){
    res.status(200).send("you have perfect health")
})

app.listen(3000)