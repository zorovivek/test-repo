const { response } = require("express");
const zod = require("zod")
const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
})
let usingZod=(obj)=>{
    let response= schema.safeParse(obj);
    console.log(response)
}
usingZod({
    email: "vivek.chaudhary2208@gmail.com",
    password: "12445677"
})