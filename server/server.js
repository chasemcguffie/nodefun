
var path = require('path');
var fs = require('fs');
let request = require('request');

var dataPath = path.join(__dirname, '../chirps.json');

// request('https://reddit.com/r/popular.json', (err, res, body) => {
//     if (err) console.error(err);

//     res.body.data.children.forEach(item => {
//         console.log(item.data.title)
//     })

//     fs.writeFile(dataPath, res.body, err => {
//         if(err) console.error(err);
//     });
// });


const chirpArray = [ 
    {
        "username": "sean",
        "chirp": "my code is bad and chase\'s is good",
    },
    {
        "username": "oscar",
        "chirp": "whatsup",
    },
    {
        "username": "tyler",
        "chirp": "what\'s going on here",
    },
    {
        "username": "carlton",
        "chirp": "alright it\'s 11:30 let\'s go to lunch",
    },
    {
        "username": "generation",
        "chirp": "how do we use the computer",
    }
];

fs.writeFile(dataPath, JSON.stringify(chirpArray), err => {
    if(err) console.error(err);
    return;
});

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, data) => {
    const arr = JSON.parse(data);
    for(i = 0; i < arr.length; i++ ){
        console.log(arr[i].username)
        console.log(arr[i].chirp)
    }
});