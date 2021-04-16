const upload = require('../storage/disk');

const routes = (app) => {
  app.post('/images', upload.single('image'), (req, resp) => {
    console.log(req.file, req.body);
    resp.send('hello world');
  });
};

module.exports = routes;
