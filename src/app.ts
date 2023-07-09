import cors from 'cors';
import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I would tell you a joke about UDP… but you might not get it.",
    "Why don’t some people like database jokes? Because they can’t handle the relations.",
    "Why was the math book sad? Because it had too many problems.",
    "Why couldn’t the bicycle find its way home? It lost its bearings.",
    "Why don’t programmers like nature? It has too many bugs.",
    "Why do programmers prefer iOS development? Because on iOS, there are no Windows or Gates.",
    "Why did the JavaScript file go to the therapist? Because it had JSON problems.",
    "How many software testers does it take to change a light bulb? None. That’s a hardware issue.",
    "Why did the computer keep freezing? It left its Windows open.",
    "Why don't programmers like to go outside? The sunlight causes too many glares on their screens.",
    "Why do programmers always get Christmas and Halloween mixed up? Because Oct 31 == Dec 25.",
    "Why did the developer go broke? Because he used up all his cache.",
    "Why did the developer get kicked out of the bar? Because he kept dropping tables.",
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "Why did the web developer walk out of the restaurant? Because of the table layout.",
    "Why was the JavaScript function sad? Because it didn't get a callback.",
    "What is the most used language in programming? Profanity."
];

app.use(cors());

// New route to directly serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/joke', (req: Request, res: Response) => {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    res.send(`<p>${joke}</p>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
