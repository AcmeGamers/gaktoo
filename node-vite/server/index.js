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

app.get("/api/signup", (req, res) => {
  console.log("Request received");

  // Check if request is post
  if (req.method === "POST") {
    // Get the data from the request
    const { name, username, email } = req.body;

    // Insert into SQL
    con.query(
      `INSERT INTO Users (name, username, email) VALUES ('${name}', '${username}', '${email}')`,
      function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      }
    );
  }
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
