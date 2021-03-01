const User = require("../models/user.model");

exports.login = async (req, res) => {
  req.session.user = { name: "tomas" };
  res.send("ok");
};

exports.signup = async (req, res) => {};
