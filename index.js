const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'html', 'index.html'));

})

app.get('/about.html', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'html', 'about.html'));
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

