function generateShortUrl(longUrl) {
    const alphanumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const stringLength = 7;
    const arrLength = alphanumeric.length;
    let shortUrl = '';
    for (let index = 0; index < stringLength; index++) {
        
        const randomIndex = Math.floor(Math.random() * arrLength);
        shortUrl += alphanumeric[randomIndex];
    }
    return shortUrl;
}

const urlUtil = {
    generateShortUrl
}
module.exports = urlUtil;