const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

// Middleware 
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.json('test page again blawowow');
})
// router.post('/', async( req, res) => {
//   try {
//     const { category } = req.body;
//   } catch (err) {
//     res.send(err.message);
//   }
// })

app.listen(port, () => {
  console.log(`server has started on ${port}`);
})
