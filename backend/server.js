const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/product", async (req, res) =>{
    const{url} = req.body;
    
    try{

        const responce = await axios.get(url);

        return res.send(responce.data);
    }catch(err){
        return res.send({msg:" to make request like this = http://localhost:8000/check?stocks=india"})
    }
    
})


app.listen(3000,  () => {
  console.log("Server running on port 3000");
});
