const express =  require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'src')));

app.listen(8080, () => {
  console.log('local server is listening on port 8080')
})