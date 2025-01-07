const express = require ('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) =>{
    res.send('Hello, my name is Tony Nguyen and my student id is PD09942');
});

app.listen(PORT, () =>{
    console.log(`Express sever is running on http://localhost:${PORT}`);
});