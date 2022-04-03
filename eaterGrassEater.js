let LivingCreature = require('./LivingCreature')

module.exports = class eaterGrassEater  extends LivingCreature{
    constructor(x, y){
        super(x, y);
        this.energy = 15;
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

            matrix[y][x] = 3
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy-=2

            if(this.energy < 0){
                this.die()
            }
        }else {
            this.energy-=2
            if(this.energy < 0){
                this.die()
            }
        }
    }





    
    eat(){
        let found = this.chooseCell(2);
        let exact =  found[Math.floor(Math.random()* found.length)];        
        if (exact){
            
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i <grassEaterArr.length; i++) {
                if( grassEaterArr[i].x == x && grassEaterArr[i].y == y ){
                    grassEaterArr.splice(i, 1)
                }
            }

            matrix[y][x] = 3
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y
            this.energy +=5;
            if(this.energy > 15){
                this.mul()
            }
        }else {
            this.move()
        }
    }





    

    mul() {
        let found = this.chooseCell(0);
        let exact =  found[Math.floor(Math.random()* found.length)];
        if (exact && this.energy > 15) {
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 3;
            let eater1 = new eaterGrassEater(x, y);
            eaterGrassEaterArr.push(eater1);

            this.energy = 15;
        } 
    }

 



    die(){ 
         matrix[this.y][this.x] = 0
        for (let i = 0; i <eaterGrassEaterArr.length; i++) {
            if( eaterGrassEaterArr[i].x == this.x && eaterGrassEaterArr[i].y == this.y ){
                eaterGrassEaterArr.splice(i, 1)
            }
        }
      
    }
}

