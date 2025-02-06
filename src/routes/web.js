const express = require("express");
const {
  getHomePage,
  getImage,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  getDeleteUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/dev", getImage);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", getDeleteUser);
router.post("/delete-user", postDeleteUser);

module.exports = router;
