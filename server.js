const app = require("express")()

app.get("/",(req,res)=>{
    res.send("response got")
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Server started...........");
})


