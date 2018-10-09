const express = require('express');
const bodyParser = require('body-parser');
const postController = require('./controller/post_controller');

const app = express();
app.use(bodyParser.json());

app.post('/articles', postController.addAllPosts)
app.get('/articles/topFour', postController.getTopFour)

const PORT = 4006;
app.listen(PORT, () => console.log('Server is listening on port 4006'));