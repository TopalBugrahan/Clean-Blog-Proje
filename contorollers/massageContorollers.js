const Massage = require("../models/Clean");
const fs = require("fs");

exports.getAllMassage = async (req, res) => {
  const page = req.query.page || 1;

  const photosPerPage = 2;
  const totelPdf=await Massage.find().countDocuments()
  const veri = await Massage.find({})
  .sort("-dateCreated")
  .skip((page-1) * photosPerPage)
  .limit(photosPerPage)
  res.render("index", {
    veri,
    current:page,
    pages:(totelPdf/photosPerPage),
  });
};

exports.getOneMassage = async (req, res) => {
  try {
    const veri1 = await Massage.findById(req.params.id);
    res.render("post", {
      veri1,
    });
  } catch (error) {
    res.render("notfound");
  }
};

exports.updateMassage = async (req, res) => {
  const massage = await Massage.findById(req.params.id);

  massage.name = req.body.name;
  massage.massage = req.body.massage;

  massage.save();

  res.redirect(`/home/${req.params.id}`);
};

exports.deleteMassage = async (req, res) => {
  const massage = await Massage.findOne({ _id: req.params.id });

  let deletepdf = __dirname + "/../public" + massage.pdf;

  fs.unlinkSync(deletepdf);
  await Massage.findByIdAndRemove(req.params.id);
  res.redirect("/");
};

exports.creatMassage = async (req, res) => {
  const uploaddir = "public/pdf";

  if (!fs.existsSync(uploaddir)) {
    fs.mkdirSync(uploaddir);
  }

  let uploutedpdf = req.files.pdf;
  let uploadPath = __dirname + "/../public/pdf/" + uploutedpdf.name;
  let temp;
  uploutedpdf.mv(uploadPath, async () => {
    temp = await Massage.create({
      ...req.body,
      pdf: "/pdf/" + uploutedpdf.name,
    });
    
    res.redirect("/");
  });
};
