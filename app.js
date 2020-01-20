const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get('/', (req, res) => {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  const day = today.toLocaleDateString("en-US", options)
  res.render("list", {kindOfDay: day, newListItems: items})

});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/")
})



app.listen(3000, () => console.log("Server is running on port 3000."));
