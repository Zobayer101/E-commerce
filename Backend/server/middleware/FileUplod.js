const multer = require("multer");
const path = require("path");

const location = "./uploads/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, location);
  },
  filename: (req, file, cb) => {
    const fileEx = path.extname(file.originalname);
    const fileName = file.originalname
      .replace(fileEx, " ")
      .split(" ")
      .join("-");
    cb(null, fileName + fileEx);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 100000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/webp"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only jpg png and jpeg format allowed !"));
    }
  },
});
module.exports = upload;
