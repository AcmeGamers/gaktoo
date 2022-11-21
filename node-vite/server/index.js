const express = require("express"),
  PORT = 5000,
  app = express(),
  mysql = require("mysql");

app.use(express.json());

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

app.post("/api/user", (req, res) => {
  const { id } = req.body;
  console.log(id);
  con.query(
    `SELECT * FROM gaktoo.Users WHERE id = "${id}"`,
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.post("/api/fetch-comment", (req, res) => {
  const { id } = req.body;
  con.query(
    `SELECT * FROM gaktoo.reviews WHERE course = "${id}"`,
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.post("/api/comment", (req, res) => {
  // Check if request is post
  if (req.method === "POST") {
    res.send("Request received");

    console.log("Request is post");

    // Get the data from the request
    const { id, F_Name, username, course, created_at, comment, review } =
      req.body;

    console.log(id, F_Name, username, course, created_at, comment, review);

    let id2 = Math.random() * 8129048291041232;

    try {
      con.query(
        `INSERT INTO gaktoo.Reviews (id, id2, F_Name, username, course, created_at, comment, review) VALUES ('${id}', ${id2}, '${F_Name}', '${username}', '${course}', '${created_at}', '${comment}', '${review}')`,
        function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        }
      );
    } catch (err) {
      throw err;
    }
  } else console.log("Not a post request");
});

app.post("/api/signup", (req, res) => {
  console.log("Request received");

  // Check if request is post
  if (req.method === "POST") {
    res.send("Request received");

    console.log("Request is post");

    // Get the data from the request
    const { id, name, username, email, created_at } = req.body;

    console.log(id, name, username, email, created_at);

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

app.post("/api/get-all-users", (req, res) => {
  console.log("Request received");

  // Check if request is post
  if (req.method === "POST") {
    res.send("Request received");

    console.log("Request is post");

    // Get the data from the request
    const { id, name, username, email, created_at } = req.body;

    console.log(id, name, username, email, created_at);

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
