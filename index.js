const express = require ('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) =>{
    res.send('Hello, my name is Tony Nguyen and my student id is PD09942');
});

app.listen(PORT, () =>{
    console.log(`Express sever is running on http://localhost:${PORT}`);
});