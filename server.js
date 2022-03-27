var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3005);

matrix = [];
 grassArr = [];
 grassEaterArr = [];
 eaterGrassEaterArr = [];
 vorsordArr =[];
 amenakerArr = []; 
 gishatichArr =[];
side = 20;


  function matrixGenerator(matrixSize, grassCount, grassEaterCount,eaterGrassEaterCount, vorsordCount,amenakerCount, amenakeGishatich){
      for (let i = 0; i < matrixSize; i++) {
          matrix[i] = []
          for (let o = 0; o < matrixSize; o++) { 
              matrix[i][o] = 0;
          }
      }
      for (let i = 0; i < grassCount; i++) {
          let x = Math.floor(Math.random()*matrixSize);
          let y = Math.floor(Math.random()*matrixSize);
          matrix[y][x] = 1;
      }
      for (let i = 0; i < grassEaterCount; i++) {
          let x = Math.floor(Math.random()*matrixSize);
          let y = Math.floor(Math.random()*matrixSize);
          matrix[y][x] = 2;
      }
      for (let i = 0; i < eaterGrassEaterCount; i++) {
          let x = Math.floor(Math.random()*matrixSize);
          let y = Math.floor(Math.random()*matrixSize);
          matrix[y][x] = 3;
      }
      for (let i = 0; i < vorsordCount; i++) {
          let x = Math.floor(Math.random()*matrixSize);
          let y = Math.floor(Math.random()*matrixSize);
          matrix[y][x] = 4;
      }
      for (let i = 0; i < amenakerCount; i++) {
          let x = Math.floor(Math.random()*matrixSize);
          let y = Math.floor(Math.random()*matrixSize);
          matrix[y][x] = 5;
      }
      for (let i = 0; i < amenakeGishatich; i++) {
        let x = Math.floor(Math.random()*matrixSize);
        let y = Math.floor(Math.random()*matrixSize);
        matrix[y][x] = 6;
    }
  }
  matrixGenerator(40, 40, 35, 25, 12, 3, 2)
  

  io.sockets.emit('send matrix', matrix)



 
 Grass = require('./grass')
 GrassEater = require('./grassEater')
 eaterGrassEater = require('./eaterGrassEater')
 Vorsord = require('./Vorsord')
 Amenaker = require('./amenaker')
gishatich = require('./gishatich')


  function createObject(){
    for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
        
        if (matrix[y][x] == 1){
            let gr = new Grass(x, y);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2){
            let eater = new GrassEater(x, y);
            grassEaterArr.push(eater);
        }
        else if (matrix[y][x] == 3){
            let eater1 = new eaterGrassEater(x, y);
            grassEaterArr.push(eater1);
        }
        else if (matrix[y][x] == 4){
            let eater2 = new Vorsord(x, y);
            vorsordArr.push(eater2);
        }
        else if (matrix[y][x] == 5){
            let eater3 = new Amenaker(x, y);
            amenakerArr.push(eater3);
        }
        else if (matrix[y][x] == 6){
            let eater4= new gishatich(x, y);
            amenakerArr.push(eater4);
        }
    }
    io.sockets.emit('send matrix', matrix)
 }

}

function game(){
    for (let i = 0; i < grassArr.length; i++) {
      grassArr[i].mul();//
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
      grassEaterArr[i].eat();
    }
    for (let i = 0; i <eaterGrassEaterArr.length; i++) {
      eaterGrassEaterArr[i].eat();
    }
    for (let i = 0; i <vorsordArr.length; i++) {
       vorsordArr[i].eat();
    }
    for (let i = 0; i <amenakerArr.length; i++) {
      amenakerArr[i].eat();//
    }
    for (let i = 0; i <gishatichArr.length; i++) {
        gishatichArr[i].eat();
      }
    io.sockets.emit("send matrix", matrix);
 }
setInterval(game, 1000)


io.on('connection', function (socket) {
  createObject()
})