const jwt = require("jsonwebtoken");
const key = "wl02302677"

function signToken(payload, cb){
    jwt.sign(payload, key, cb);
}


//匯出-讓其他檔案引入
module.exports={
    signToken:signToken
}