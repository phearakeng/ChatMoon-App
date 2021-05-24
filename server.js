let users = [
  { username: "PHEARAK", password: "00000" },
  { username: "THIN", password: "11111" },
  { username: "SARETH", password: "22222" },
  { username: "VONTHORN", password: "33333" },
  { username: "NHORK", password: "44444" },
  { username: "THEAV", password: "55555" },
];

const express = require("express");
const app = express();
const port = 3000;

app.listen(process.env.PORT|| port, () => {
  console.log("server running...");
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/login", (request, response) => {
  const userName = request.query.username;
  const password = request.query.password;

  let result = false;
  for (let getUser of users) {
    if (getUser.username === userName && getUser.password === password) {
      result = true;
    }
  }
  response.send(result);
});


