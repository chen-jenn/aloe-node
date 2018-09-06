const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  res.send("Welcome to de homepage");
});

router.get("/", (req, res) => {
  res.render("welcome"); 
})


module.exports = router;
