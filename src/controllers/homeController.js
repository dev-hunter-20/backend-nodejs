const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUser: results });
};

const getImage = (req, res) => {
  return res.render("sample.ejs");
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  if (!email || !name || !city) {
    return res.status(400).json({ error: "All fields are required" });
  }

  await createUser(email, name, city);

  return res.redirect("/");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  const results = await getUserById(userId);
  let user = results && results.length > 0 ? results[0] : {};
  return res.render("update.ejs", { user: user });
};

const postUpdateUser = async (req, res) => {
  let { id, email, name, city } = req.body;

  if (!email || !name || !city) {
    return res.status(400).json({ error: "All fields are required" });
  }

  await updateUser(id, email, name, city);

  return res.redirect("/");
};

const getDeleteUser = async (req, res) => {
  const userId = req.params.id;
  const results = await getUserById(userId);
  let user = results && results.length > 0 ? results[0] : {};
  res.render("delete.ejs", { user: user });
};

const postDeleteUser = async (req, res) => {
  const userId = req.body.id;

  console.log(userId);
  await deleteUser(userId);
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  getImage,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
  getDeleteUser,
  postDeleteUser,
};
