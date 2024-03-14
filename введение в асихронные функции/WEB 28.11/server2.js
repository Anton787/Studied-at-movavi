const express = require("express");
const app = express();

let school = {
    "8A": {
        "Andrey": "Oleg",
        "Maksim": "Ilya"
    },
    "8B": {
        "A": "B",
        "C": "D"
    },
    "8C": {
        "E": "F",
        "G": "H"
    }
}

app.use(express.static(__dirname + "/"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index2.html");
});

app.get("/test", function(req,res){
    // let data = req.query;
    // console.log(data)
    // if (data.name in names){
    //     res.send("Hello" + names[data.name])
    // } else {
    // res.send("Hello, Nigga")
    // }
});

app.listen(5000);