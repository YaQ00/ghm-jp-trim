const request = require('request');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', (req, res) => {
    const state = req.body.text.replace(/\s+/g, '')
    request.post("https://misskey.io/api/notes/create", { form: { text: text, i: req.body.i } })
    console.log(state)
    res
        .status(200)
        .send(state)
        .end();
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});