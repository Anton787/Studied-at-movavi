const express = require("express");

const app = express();

let users = {

}

let a = {
    
}

app.use(express.static('static'));

app.get("/registration", function (req, res) {
    res.sendFile(__dirname + "/templates/regist.html");
});


app.get("/createroom", function (req, res) {
    let alphabet = '1234567890qwertyuiopasdfghjklzxcvbnm'
    var link = '';
    for (let i = 0; i < 10; i++) {
        link += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    
    res.sendFile(__dirname + "/templates/room.html")
});

app.get("/", function (req, res) {
    let email = req.query.email
    let password = req.query.psw
    users[email] = password
    console.log(users);
    res.sendFile(__dirname + "/templates/main.html");
});

app.listen(port = 3000)