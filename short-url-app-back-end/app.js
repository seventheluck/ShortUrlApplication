const express = require('express');
const dao = require('./dao');
const urlUtil = require('./urlUtil');
const app = express();
const PORT = 3001;
app.use(express.static('./public'));

app.get('/short', (req, res) => {
    const baseUrl = 'http://shorturl-env.kwncuxdbyk.us-west-2.elasticbeanstalk.com:3001/';
    let longUrl = req.query.longUrl;
    if (longUrl !== null || longUrl !== undefined || longUrl.length !== 0) {
        const lowerCaseUrl = longUrl.toLowerCase();
        if (!lowerCaseUrl.startsWith('http://') && !lowerCaseUrl.startsWith('https://')) {
            longUrl = 'http://' + longUrl;
        }
    }
    let shortUrl = dao.getShortUrl(longUrl);
    if (shortUrl === null || shortUrl === undefined) {
        shortUrl = urlUtil.generateShortUrl(longUrl);
        dao.saveUrl(shortUrl, longUrl);
    }
    res.json(baseUrl + shortUrl);
});

app.get('/:shortUrl', (req, res) => {
    const shortUrl = req.params.shortUrl;
    let longUrl = dao.getLongUrl(shortUrl);
    if (longUrl === null || longUrl === undefined) {
        longUrl = '';
    }
    res.redirect(longUrl);
});


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));