var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

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
  }
  io.sockets.emit('send matrix', matrix)

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
setInterval(game, 500)


io.on('connection', function (socket) {
  matrixGenerator(40, 35, 20, 10, 5, 1, 2)
  createObject()
  socket.on("kill", kill);
  socket.on("add grass", addGrass);
  socket.on("add grassEater", addGrassEater);
  socket.on("add eaterGrassEater", addeaterGrassEater);
})





function kill() {
  grassArr = [];
  grassEaterArr = [];
  eaterGrassEaterArr= [];
  for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
          matrix[y][x] = 0;
      }
  }
  io.sockets.emit("send matrix", matrix);
}


function addGrass() {
  for (var i = 0; i < 5; i++) {
  var x = Math.floor(Math.random() * matrix[0].length)
  var y = Math.floor(Math.random() * matrix.length)
      if (matrix[y][x] == 0) {
          matrix[y][x] = 1
          var gr = new Grass(x, y)
          grassArr.push(gr)
      }
  }
  io.sockets.emit("send matrix", matrix);
}
function addGrassEater() {
  for (var i = 0; i < 8; i++) {   
  var x = Math.floor(Math.random() * matrix[0].length)
  var y = Math.floor(Math.random() * matrix.length)
      if (matrix[y][x] == 0) {
          matrix[y][x] = 2
          grassEaterArr.push(new GrassEater(x, y))
      }
  }
  io.sockets.emit("send matrix", matrix);
}
function addeaterGrassEater() {
  for (var i = 0; i < 10; i++) {   
  var x = Math.floor(Math.random() * matrix[0].length)
  var y = Math.floor(Math.random() * matrix.length)
      if (matrix[y][x] == 0) {
          matrix[y][x] = 3
          grassEaterArr.push(new eaterGrassEater(x, y))
      }
  }
  io.sockets.emit("send matrix", matrix);
}

io.on('connection', function (socket) {
  createObject();
  socket.on("kill", kill);
  socket.on("add grass", addGrass);
  socket.on("add grassEater", addGrassEater);
  socket.on("add eaterGrassEater", addeaterGrassEater);
});


var statistics = {};

setInterval(function() {
  statistics.grass = grassArr.length;
  statistics.grassEater = grassEaterArr.length;
  statistics.eaterGrassEater = eaterGrassEaterArr.length;
  fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
      console.log("send")
  })
},1000)