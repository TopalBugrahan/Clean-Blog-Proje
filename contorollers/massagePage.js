const Massage = require("../models/Clean");

exports.aboutPage = (req, res) => {
  res.render("about");
};

exports.updatePage = async (req, res) => {
  const veri2 = await Massage.findById(req.params.id);
  res.render("update", {
    veri2,
  });
};

exports.addPostPage = (req, res) => {
  res.render("add_post");
};
