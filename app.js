const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const restakersRoutes = require('./routes/restakers');
const validatorsRoutes = require('./routes/validators');
const rewardsRoutes = require('./routes/rewards');

console.log('Restakers route:', restakersRoutes);
console.log('Validators route:', validatorsRoutes);
console.log('Rewards route:', rewardsRoutes);

app.use(cors());
app.use(express.json());

app.use('/api/restakers', restakersRoutes);
app.use('/api/validators', validatorsRoutes);
app.use('/api/rewards', rewardsRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

