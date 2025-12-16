const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/categories', require('./routes/categoryRoutes'));
app.use('/products', require('./routes/productRoutes'));

app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});
