import express from 'express';
import { PrismaClient } from "@prisma/client";
import path from 'path';
import validator from 'validator';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', (req, res) => {
    console.log('GET /');
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/joke', async (req, res) => {
    console.log('GET /joke');
    try {
        const allJokes = await prisma.joke.findMany();
        if(allJokes.length === 0) {
            console.log('No jokes in the database');
            res.send('<p>No jokes in the database!</p>');
        } else {
            const randomJoke = allJokes[Math.floor(Math.random() * allJokes.length)];
            console.log('Selected joke:', randomJoke.text);
            res.send(`<p>${randomJoke.text}</p>`);
        }
    } catch (err) {
        console.error('Error while fetching jokes:', err);
        res.status(500).send('<p>Server error</p>');
    }
});

router.post('/joke', async (req, res) => {
    console.log('POST /joke');
    const { text } = req.body;

    // Input validation: check if text exists and if it's not too long
    if (!text || text.length > 500) {
        return res.status(400).send('<p>Invalid input</p>');
    }

    // Input sanitization: remove dangerous HTML tags
    const sanitizedText = validator.escape(text);

    try {
        const newJoke = await prisma.joke.create({
            data: {
                text: sanitizedText
            }
        });
        console.log('New joke created:', newJoke.text);
        res.send(`<marquee behavior="alternate">Your Joke Has Been Added!</marquee>`);
    } catch (err) {
        console.error('Error while creating new joke:', err);
        res.status(500).send('<p>Server error</p>');
    }
});


export default router;
