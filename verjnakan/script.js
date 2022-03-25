
// function setup() {
//     function matrixGenerator(matrixSize, grassCount, grassEaterCount,eaterGrassEaterCount, vorsordCount,amenakerCount){
//         for (let i = 0; i < matrixSize; i++) {
//             matrix[i] = []
//             for (let o = 0; o < matrixSize; o++) { 
//                 matrix[i][o] = 0;
//             }
//         }
//         for (let i = 0; i < grassCount; i++) {
//             let x = Math.floor(random(matrixSize));
//             let y = Math.floor(random(matrixSize));
//             matrix[y][x] = 1;
//         }
//         for (let i = 0; i < grassEaterCount; i++) {
//             let x = Math.floor(random(matrixSize));
//             let y = Math.floor(random(matrixSize));
//             matrix[y][x] = 2;
//         }
//         for (let i = 0; i < eaterGrassEaterCount; i++) {
//             let x = Math.floor(random(matrixSize));
//             let y = Math.floor(random(matrixSize));
//             matrix[y][x] = 3;
//         }
//         for (let i = 0; i < vorsordCount; i++) {
//             let x = Math.floor(random(matrixSize));
//             let y = Math.floor(random(matrixSize));
//             matrix[y][x] = 4;
//         }
//         for (let i = 0; i < amenakerCount; i++) {
//             let x = Math.floor(random(matrixSize));
//             let y = Math.floor(random(matrixSize));
//             matrix[y][x] = 5;
//         }
//     }
//     matrixGenerator(40, 40, 35, 25, 12, 3)
    
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {
            
//             if (matrix[y][x] == 1){
//                 let gr = new Grass(x, y);
//                 grassArr.push(gr);
//             }
//             else if (matrix[y][x] == 2){
//                 let eater = new GrassEater(x, y);
//                 grassEaterArr.push(eater);
//             }
//             else if (matrix[y][x] == 3){
//                 let eater1 = new eaterGrassEater(x, y);
//                 grassEaterArr.push(eater1);
//             }
//             else if (matrix[y][x] == 4){
//                 let eater2 = new Vorsord(x, y);
//                 vorsordArr.push(eater2);
//             }
//             else if (matrix[y][x] == 5){
//                 let eater3 = new Amenaker(x, y);
//                 amenakerArr.push(eater3);
//             }
//         }
//     }
// }

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
            rect(x * side, y * side, side, side);

        }
    }

    for (let i = 0; i < grassArr.length; i++) {
        const grass = grassArr[i];
        grass.mul();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        const eater = grassEaterArr[i];
        eater.eat();
    }
    for (let i = 0; i <eaterGrassEaterArr.length; i++) {
        const eater1 = eaterGrassEaterArr[i];
        eater1.eat();
    }
    for (let i = 0; i <vorsordArr.length; i++) {
        const eater2 = vorsordArr[i];
        eater2.eat();
    }
    for (let i = 0; i <amenakerArr.length; i++) {
        const eater3 =amenakerArr[i];
        eater3.eat();
    }


}