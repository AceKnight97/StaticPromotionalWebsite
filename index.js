// khai bao thu vien express
var express = require("express");
var app = express();
// tao port 3000
app.listen(3000);
// su dung thu vien tinh ma nguoi dung co the truy cap cac file html
app.use(express.static('public'));
// Goi ham khi nhap dia chi web(localhost)
app.get("/", function(req, res){
	res.sendFile( __dirname + '/index.html');
});
