// here we are workingon an assignment in which we give two requests POST and GET in which we send username and password through body via POST and create a token 
// we then use the GET in which we get all the users of the database only if the toke matches in the database of the server
const express =require("express")
const jwt=  require("jsonwebtoken");
const jwtPassword= "123456"

const app= express();
app.use(express.json())
const ALL_USERS= [
   {username:"vivek.chaudhary2208@gmail.com",
    password: "monsterking",
    firstName: "vivek"
   }, 
   {username: "raman@gmail.com",
    password: "raman123",
    firstName: "raman"
   },
   {username: "bhanubhai@gmail.com",
    password: "bhanuox",
    firstName: "bhanu"
} 

]
function UserExists(username, password){
    let userExists= false;
    for(let i=0 ; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            userExists= true
            break
        } 
    }
    return userExists
    // check if the username and password match to that in the database
   // in ALL_USERS array

}

app.post("/signin", function(req, res){
    const username= req.body.username;
    const password= req.body.password;
    if(!UserExists(username, password)){
        return res.status(403).send("user not found in the local database")
    }
    if (!UserExists(username, password)) {
        return res.status(403).send("User not found in the local database");
      }
    
      try {
        const token = jwt.sign({ username: username }, jwtPassword);
        return res.json({ token });
      } catch (err) {
        return res.status(500).send("Error generating token");
      }
})
app.get("/users", function(req, res){
    const token= req.headers.authorization;
    try{
        const decoded= jwt.verify(token, jwtPassword)
        const username= decoded.username
        // return a list of users other than this username
        res.json({
            users: ALL_USERS.filter(function(value){
                if(value.username==username){
                    return false
                }
                else{
                    return true
                }
            })
        })
    }
    catch (err){
        return res.status(403).json({
            msg: "invalid token"
        })
    }
})
app.listen(3000)