const express = require("express");
const router = express.Router();
const passport = require("passport");
const { passportCreate } = require("../mods/passport");
const { query } = require("../mods/dbconnection");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("respond with a resource");
  }
);

router.get("/create", (req, res) => {
  var token = passportCreate({ mid: "test" });
  res.json({ token });
});

module.exports = router;
