const express = require("express"),
  PORT = 5000,
  app = express(),
  mysql = require("mysql");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  port: 3306,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/api/v1", (req, res) => {
  res.send("API Update");
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
