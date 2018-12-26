const request = require('request');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', (req, res) => {
    const text = req.body.status.replace(/\s+/g, '')
    request.post("https://imastodon.net/api/v1/statuses", { form: { status: encodeURIComponent(text), visibility: 'public', access_token: req.body.access_token } })
    console.log(text)
    res
        .status(200)
        .send(text)
        .end();
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});