
let LivingCreature = require('./LivingCreature')

module.exports = class GrassEater extends LivingCreature{
    constructor(x, y){
    super(x, y);
    this.energy = 8;
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

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy--

            if(this.energy < 0){
                this.die()
            }
         else {
            this.energy--
            if(this.energy <= 0){
                this.die()
            }
         }
        }
    }



    eat(){
        let found = super.chooseCell(1);
        let exact =  found[Math.floor(Math.random()* found.length)];

        if (exact){
          
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if( grassArr[i].x == x && grassArr[i].y == y ){
                    grassArr.splice(i, 1)
                }
            }

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y;
            this.energy++;

            if(this.energy >=10){
                this.mul()
            }
        }else {
            this.move()
        }
    }


    mul() {

            let found = super.chooseCell(0);
            let exact = found[Math.floor(Math.random()* found.length)];

            if (exact){
                let x = exact[0];
                let y = exact[1];
                matrix[y][x] = 2;
                let grassEater = new GrassEater (x, y);
                grassEaterArr.push(grassEater);
                this.energy = 6;
            }
                  
        }
    
    

   
    die() {
        matrix[this.y][this.x] = 0
        for (let i = 0; i < grassEaterArr.length; i++) {
            if( grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y ){
                grassEaterArr.splice(i, 1)
            }
        }
     
      }
 }
