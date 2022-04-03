
let LivingCreature = require('./LivingCreature')

module.exports = class Grass  extends LivingCreature{

    mul() {

        this.multiply++;
        if (this.multiply >= 5) {
            let found = super.chooseCell(0);
            let exact = found[Math.floor(Math.random()* found.length)];
            if (this.multiply >= 5 && exact){
                let x = exact[0];
                let y = exact[1];
                matrix[y][x] = 1;
                let grass = new Grass(x, y);
                grassArr.push(grass);
                this.multiply =0;
            }
                  
        }
    }
}