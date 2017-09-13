const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require("body-Parser")
const signToken = require("./utils/jwt.js").signToken;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//post使用者傳資料

app.use(function (req, res, next) {
    console.log(new Date());
    next();
})



app.get("/", function (req, res) {
    res.send("hello world!");
});

app.get("/404", function (req, res) {
    res.send("8888");
});



app.get("/login", function (req, res) {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.post('/login', function (req, res) {
    console.log(req.body);
    if (req.body.username === "abc" && req.body.password == "123") {
        signToken({username :"abc"}, function(err,token){
                res.json({
                    login: true,
                    token: token
                });
            }
    )
       

    } else {
        res.json({
            login: false
        });
    }
})

app.listen(3000, function () {
    console.log("server start!");
})
