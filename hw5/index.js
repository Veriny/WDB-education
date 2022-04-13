const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

var router = express.Router();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/', router);

app.listen(port, () => {console.log('Launching...')});


// The method of the root url. Be friendly and welcome our user :)
router.get("/", function (req, res) {
  res.json({ message: "Welcome to the APOD app." });
});

router.get("/favorite", function (req, res) {
  // TODO:
  const item = req.body.item;
  res.json({ message: "TODO: here's the GET route" });
});

router.post("/add", function (req, res) {
  // TODO:
  res.json({ message: "TODO: Here's the add route" });
});

router.delete("/delete", function (req, res) {
  // TODO:
  res.json({ message: "TODO: Here's the delete route" });
});

app.use("/api", router); // API Root url at: http://localhost:8080/api

app.listen(port);
console.log("Server listening on port " + port);