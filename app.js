var express = require('express');

var app = express();
app.use(express.static(__dirname));

app.listen(3000, ()=>{
    require('child_process').exec('start http://localhost:3000/');
});
console.log('open => at http://localhost:3000');

