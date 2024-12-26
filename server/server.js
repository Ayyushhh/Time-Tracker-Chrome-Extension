import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

let timeData = [];

app.post('/track', (req, res) => {
    const { url, timeSpent } = req.body;
    timeData.push({ url, timeSpent });
    res.send({ message: 'Data saved successfully!' });
});

app.get('/report', (req, res) => {
    res.send(timeData);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});