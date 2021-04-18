const uploadDisk = require('../storage/disk');

const routes = (app) => {
  app.post('/images', uploadDisk.single('image'), async (req, resp) => {
    const { file } = req;

    const result = {
      "name": file.originalname,
      "url": { 
          "url": file.path,
          "_id": file.filename,
        }
    }

    resp.send(result);
  });
};

module.exports = routes;
