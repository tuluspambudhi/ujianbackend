const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 1990
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h1>Ujian Backend</h1>')
});

const { 
    moviesRouter,
    categoriesRouter,
    movcatRouter
} = require('./routers');

app.use('/movies', moviesRouter);
app.use('/categories',categoriesRouter);
app.use('/movcat', movcatRouter)

app.listen(port, () => console.log(`API jalan di port ${port}`));



