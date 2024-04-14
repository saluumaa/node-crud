import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import userRoutes from './routes/users.js';


const PORT = 3000;
app.use(bodyParser.json());

app.use('/users', userRoutes);


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

