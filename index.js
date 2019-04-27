let express = require("express");

let PORT = process.env.PORT || 3000;

let app = express();

let characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

app.get("/api/charaters", (request, response) => {
  response.send(characters);
});
