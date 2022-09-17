const express = require('express');
const connectDB = require('./db/connect');
const dotenv = require('dotenv');
dotenv.config();

const Contact = require('./models/Contact')

const app = express();

const port = process.env.PORT || 5000;


app.use(express.static('src'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', async (req, res) => {
    const contact = await Contact.create(req.body)
    console.log(req.body)
    res.status(201).json({ contact })
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,() => {
            console.log(`Server running at http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
