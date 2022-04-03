
let LivingCreature = require('./LivingCreature')

module.exports = class gishatich  extends LivingCreature{
    constructor(x, y){
        super(x, y);
        this.energy = 20;
    }
       
    getNewCordinates(){
              this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewCordinates();
        return super.chooseCell(character);
    }
  
move(){
    let found = this.chooseCell(0);
    let exact =  found[Math.floor(Math.random()* found.length)];
        if (exact){
        let x = exact[0];
        let y = exact[1];

        matrix[y][x] = 6
        matrix[this.y][this.x] = 0

        this.x = x;
        this.y = y;

        this.energy--

        if(this.energy < 0){
            this.die()
        }
    }else {
        this.energy--
        if(this.energy < 0){
            this.die()
        }
    }
}








eat(){
    let found = this.chooseCell(2,3,6);
    let exact =  found[Math.floor(Math.random()* found.length)];
    if (exact){
        this.energy +=2;
        let x = exact[0];
        let y = exact[1];

        for (let i = 0; i < gishatichArr.length; i++) {
            if( gishatich[i].x == x && gishatichArr[i].y == y ){
                gishatichArr.splice(i, 1)
            }
        }


        matrix[y][x] = 6
        matrix[this.y][this.x] = 0
        
        this.x = x;
        this.y = y

        if(this.energy > 20){
            this.mul()
        }
    }else {
        this.move()
    }
}



mul() {
    let found = this.chooseCell(0);
    let exact =  found[Math.floor(Math.random()* found.length)];
    if (exact && this.energy > 20) {
        let x = exact[0];
        let y = exact[1];

        let eater4 = new gishatich(x, y);
        matrix[y][x] = 6;
        amenakerArr.push(eater4);

        this.energy = 20;
    } 
}







die(){
    for (let i = 0; i <gishatichArr.length; i++) {
        if( gshatichArr[i].x == this.x && gishatichArr[i].y == this.y ){
            gishatichArr.splice(i, 1)
        }
    }
    matrix[this.y][this.x] = 0
    }

}


     