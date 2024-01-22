const fs = require('fs');

const readStream = new fs.createReadStream('text.txt', { encoding: 'utf-8' });
readStream.on('data', (chunk) => console.log(chunk));
