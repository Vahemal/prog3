

class Vorsord extends LivingCreature{
    constructor(x, y){
        super(x, y);
        this.energy = 25;
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
  



      

    mul() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 25) {
            let x = exact[0];
            let y = exact[1];

            let eater2 = new Vorsord(x, y);
            matrix[y][x] = 4;
            vorsordArr.push(eater2);

            this.energy = 25;
        } else {
            console.error('there is no way to multiply');
        }
    }





    
    eat(){
        let found = this.chooseCell(3,4);
        let exact = random(found)

        if (exact){
            this.energy +=10;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i <vorsordArr.length; i++) {
                if( vorsordArr[i].x == x && vorsordArr[i].y == y ){
                    vorsordArr.splice(i, 1)
                }
            }

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

            if(this.energy > 52){
                this.mul()
            }
        }else {
            this.move()
        }
    }





    

    move(){
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy-=3

            if(this.energy < 0){
                this.die()
            }
        }else {
            this.energy-=3
            if(this.energy < 0){
                this.die()
            }
        }
    }



    die(){
        for (let i = 0; i <vorsordArr.length; i++) {
            if( vorsordArr[i].x == this.x && vorsordArr[i].y == this.y ){
                vorsordArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}


