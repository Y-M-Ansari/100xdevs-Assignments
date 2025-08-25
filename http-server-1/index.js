// const express = require ("express");
// const port= 3000;
// const app = express();
// app.get('/', function(res,req){
//   res.send('Hello World')
// });
// app.listen(port);

const express = require('express');
const app = express();

app.use(express.json()); // to parse JSON body
app.use(express.urlencoded({ extended: true })); // to parse form data

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
