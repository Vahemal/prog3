
var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var eaterGrassEaterArr = [];
var vorsordArr =[];
var amenakerArr = [];
var side = 20;
// Objectner
class Grass  extends LivingCreature{
    constructor(x, y){
        super(x, y);
        this.energy = 8;
    }


    mul() {
        this.energy++;
        let found = this.chooseCell(0);
        
        let exact = random(found)
        
        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];
            
            let grass = new Grass(x, y);
            matrix[y][x] = 1;
            grassArr.push(grass);
            
            this.energy =0;
        } //else {
        //     console.error('there is no way to multiply');
        // }
    }
}



///////////////////////////////////////////// XOTAKERNER


class GrassEater extends LivingCreature{
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
 



    mul() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let eater = new GrassEater(x, y);
            matrix[y][x] = 2;
            grassEaterArr.push(eater);

            this.energy = 20;
        } else {
            console.error('there is no way to multiply');
        }
    }








    eat(){
        let found = this.chooseCell(1);
        let exact = random(found)

        if (exact){
            this.energy +=5;
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
            this.y = y

            if(this.energy > 30){
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

            matrix[y][x] = 2
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





   
    die(){
        for (let i = 0; i < grassEaterArr.length; i++) {
            if( grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y ){
                grassEaterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}





///////////////////////////////////////////////// XOTAKERNERIN UTOXNER






class eaterGrassEater  extends LivingCreature{
    constructor(x, y){
        super(x, y);
        this.energy = 25;
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
        let exact = random(found)

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let eater1 = new eaterGrassEater(x, y);
            matrix[y][x] = 3;
            eaterGrassEaterArr.push(eater1);

            this.energy = 25;
        } else {
            console.error('there is no way to multiply');
        }
    }





    
    eat(){
        let found = this.chooseCell(2);
        let exact = random(found)

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

            if(this.energy > 35){
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






///////////////////////////////////////////////// XOTAKERNERer utoxin spanox




class Vorsord extends LivingCreature{
    constructor(x, y){
        super(x, y);
        this.energy = 40;
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

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let eater2 = new Vorsord(x, y);
            matrix[y][x] = 4;
            vorsordArr.push(eater2);

            this.energy = 40;
        } else {
            console.error('there is no way to multiply');
        }
    }





    
    eat(){
        let found = this.chooseCell(3);
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






/////////////////////////////////////////////////// amenaker



class Amenaker extends LivingCreature{
    constructor(x, y){
        super(x, y);
        this.energy = 10;
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

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let eater3 = new Amenaker(x, y);
            matrix[y][x] = 5;
            amenakerArr.push(eater3);

            this.energy = 25;
        } else {
            console.error('there is no way to multiply');
        }
    }





    
    eat(){
        let found = this.chooseCell(1,2,3,4);
        let exact = random(found)

        if (exact){
            this.energy +=5;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i <amenakerArr.length; i++) {
                if( amenakerArr[i].x == x && amenakerArr[i].y == y ){
                    amenakerArr.splice(i, 1)
                }
            }


            matrix[y][x] = 5
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

            if(this.energy > 36){
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



    die(){
        for (let i = 0; i <amenakerArr.length; i++) {
            if( amenakerArr[i].x == this.x && amenakerArr[i].y == this.y ){
                amenakerArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}

