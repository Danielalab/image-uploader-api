const uploadDisk = require('../storage/disk');

const routes = (app) => {
  app.post('/images', uploadDisk.single('image'), async (req, resp) => {
    const { file } = req;

    const result = {
      "name": file.originalname,
      "url": file.path,
      "_id": 1,
    };

    resp.send(result);
  });
};

module.exports = routes;
