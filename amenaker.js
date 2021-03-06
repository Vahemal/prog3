
let LivingCreature = require('./LivingCreature')

module.exports = class Amenaker extends LivingCreature{
    constructor(x, y){
        super(x, y);
        this.energy = 22;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y]
        ];
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
                [this.x + 1, this.y + 1],
                [this.x - 2, this.y - 1],
                [this.x - 2, this.y - 2],
                [this.x - 1, this.y - 2],
                [this.x, this.y - 2],
                [this.x + 1, this.y - 2],
                [this.x + 2, this.y - 2],
                [this.x + 2, this.y - 1],
                [this.x + 2, this.y],
                [this.x + 2, this.y + 1],
                [this.x + 2, this.y + 2],
                [this.x + 1, this.y + 2],
                [this.x, this.y + 2],
                [this.x - 1, this.y + 2],
                [this.x - 2, this.y + 2],
                [this.x - 2, this.y + 1],
                [this.x - 2, this.y]
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

            matrix[y][x] = 5
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
        let found = this.chooseCell(6);
        let exact =  found[Math.floor(Math.random()* found.length)];
        if (exact){
            
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < gishatichArr.length; i++) {
                if( gishatichArr[i].x == x && gishatichArr[i].y == y ){
                    gishatichArr.splice(i, 1)
                }
            }


            matrix[y][x] = 5
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y
            this.energy +=2;
            
            if(this.energy > 22){
                this.mul()
            }
        }else {
            this.move()
        }
    }





    mul() {
        let found = this.chooseCell(0);
        let exact =  found[Math.floor(Math.random()* found.length)];
        if (exact && this.energy > 22) {
            let x = exact[0];
            let y = exact[1];

            let eater3 = new Amenaker(x, y);
            matrix[y][x] = 5;
            amenakerArr.push(eater3);

            this.energy = 8;
        }
    }




    die(){
        for (let i = 0; i <amenakerArr.length; i++) {
            if( amenakerArr[i].x == this.x && amenakerArr[i].y == this.y ){
                amenakerArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}

