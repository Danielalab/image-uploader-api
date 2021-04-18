const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    /* Note: You are responsible for creating
    the directory when providing destination as
    a function. When passing a string, multer
    will make sure that the directory is created
    for you. */
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    /* Note: Multer will not append any file
    extension for you, your function should
    return a filename complete with an file
    extension. */
    cb(null, + new Date() + file.originalname)
  }
})

const upload = multer({ storage });

module.exports = upload;
