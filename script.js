
  frameRate(3);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');

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
            let eater4 = new gishatich(x, y);
            gishatichArr.push(eater4);
        }
      }
  }


function draw() {

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