
var socket =io();
side = 20;

function setup(){
//   frameRate(3);
  createCanvas(40 * side, 40* side);
  background('#acacac');
}

 


function nkarel(matrix) {

  for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {

          if (matrix[y][x] == 1) {
              fill("green");
          }
          else if (matrix[y][x] == 0) {
              fill("#acacac");
          }
          else if (matrix[y][x] == 2) {
              fill("yellow");
          }
          else if (matrix[y][x] == 3) {
              fill("blue");
          }
          else if (matrix[y][x] == 4) {
              fill("orange");
          }
          else if (matrix[y][x] == 5) {
              fill("red");
          }
          else if (matrix[y][x] == 6) {
            fill("black");
        }
          rect(x * side, y * side, side, side);

      }
  }
}
socket.on('send matrix', nkarel);



function kill() {
    socket.emit("kill")
}
function addGrass() {
    socket.emit("add grass")
}
function addGrassEater() {
    socket.emit("add grassEater")
}