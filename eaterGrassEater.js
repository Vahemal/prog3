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
  



      

    mul() {
        let found = this.chooseCell(0);
        let exact =  Math.floor(Math.random()* found.length);
        if (exact && this.energy > 15) {
            let x = exact[0];
            let y = exact[1];

            let eater1 = new eaterGrassEater(x, y);
            matrix[y][x] = 3;
            eaterGrassEaterArr.push(eater1);

            this.energy = 8;
        } else {
            console.error('there is no way to multiply');
        }
    }





    
    eat(){
        let found = this.chooseCell(2);
        let exact =  Math.floor(Math.random()* found.length);
        
        if (exact){
            this.energy +=6;
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

            if(this.energy > 15){
                this.mul()
            }
        }else {
            this.move()
        }
    }





    

    move(){
        let found = this.chooseCell(0);
        let exact =  Math.floor(Math.random()* found.length);

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



    die(){
        for (let i = 0; i <eaterGrassEaterArr.length; i++) {
            if( eaterGrassEaterArr[i].x == this.x && eaterGrassEaterArr[i].y == this.y ){
                eaterGrassEaterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}

