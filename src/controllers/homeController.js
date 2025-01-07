const getHomePage = (req, res) => {
  res.send("Hello World!");
};

const getImage = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getImage,
};
