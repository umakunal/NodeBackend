const UserModel = require("../Model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

exports.signup = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, saltRounds);
  const data = { ...req.body, password };
  const user = await UserModel.create(data);
  res.json({ user });
};

exports.login = async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  const token = await jwt.sign({ user }, "fake-jwt-secret");
  res.json({ user, token });
};
