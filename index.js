var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');
/*
fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});


fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log(data);
});

fs.writeFile('./tekst.txt', 'Gdzie jest kot?', function(err) {
    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!');
});
*/
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nKot Ali jest w kuchni!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
