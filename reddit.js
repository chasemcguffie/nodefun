var path = require('path');
var fs = require('fs');
let request = require('request');

var dataPath = path.join(__dirname, '/popular-articles.json');
const articles = [];

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.error(err);

    JSON.parse(res.body).data.children.forEach(item => {
        articles.push ({ title: item.data.title, url: item.data.url, author: item.data.author })
    });
    fs.writeFile(dataPath, JSON.stringify(articles), err => {
        if(err) console.error(err);
        return;
    });
});