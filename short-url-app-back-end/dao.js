const longToShortMap = new Map();
const shortToLongMap = new Map();

function getShortUrl(longUrl) {
    return longToShortMap.get(longUrl);
}

function getLongUrl(shortUrl) {
    return shortToLongMap.get(shortUrl);
}

function saveUrl(shortUrl, longUrl) {
    longToShortMap.set(longUrl, shortUrl);
    shortToLongMap.set(shortUrl, longUrl);
}

const dao = {
    getShortUrl,
    getLongUrl,
    saveUrl
}
module.exports = dao;