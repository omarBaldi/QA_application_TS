import express, { Request, Response, Application } from 'express';
import cors from 'cors';

const app = express() as Application;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_: Request, res: Response): void => {
	res.send('Hello there. Hi!');
});

const port = process.env.PORT || 5000;
app.listen(port, (): void => console.log(`Server running on port ${5000}`));
