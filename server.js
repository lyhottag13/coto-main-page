import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
const app = express();
const PORT = 3100;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dependencies for the app to read user input and to return JSONs.
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
})
// Sends the app's HTML when they enter the main domain.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'app.html'));
});