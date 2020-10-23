// fs = require('fs');

// let xml = fs.readFile('test.xml','utf-8', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }

//     console.log(data);
// });

const fs = require('fs');
const domParser = require('')
const xml = fs.readFileSync('./test.xml','utf8');
