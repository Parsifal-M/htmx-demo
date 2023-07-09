import cors from 'cors';
import express from 'express';
import path from 'path';
import jokeRoutes from './routes/jokes.routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use('/', jokeRoutes); 

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
