require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/routes/index');
const { client } = require('./config');
const port = 8080;

/* Note: I can't use app.use(express.json())
because it only parsers JSON payloads
and my 'content-type' is a 'multipart/form-data'
*/

/* App.use: is a middleware function.
Here it's executed every time that the app receives a request.
*/

/* Express.static: it's a middleware that serve  to serve static
files like CSS files, images, Js files*/
app.use(cors({ origin: client }));
app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log('App listening on port ' + `http://localhost:${port}`);
  routes(app)
});
