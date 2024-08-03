const express= require("express")
const app =express()

const z= require("zod")
function validatenput(obj){
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    })
    const response= schema.safeParse(obj)
    console.log(response)
}

app.post("/authentication", (req, res)=>{
    const response= validatenput(req.body)
    if(!response.success){
        res.json({
            msg: "invalid input "
        })
    }
    else{
        return
    }
})
app.listen(3000) 