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

app.post("/api/signup", (req, res) => {
  console.log("Request received");

  // Check if request is post
  if (req.method === "POST") {
    res.send("Request received");

    console.log("Request is post");

    console.log(req);
    // Get the data from the request
    const { id, name, username, email, created_at } = req;

    // Insert into SQL gaktooo database
    con.query(
      `INSERT INTO gaktoo.Users (id, F_Name, username, email, created_at) VALUES ('${id}', '${name}', '${username}', '${email}', '${created_at}')`,
      function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      }
    );
  } else console.log("Not a post request");
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
