import mathjs from 'mathjs';


class WangLandau {
    constructor(dimensions=2) {
        this.dimensions = dimensions;
        this.critical = 0;
        this.modules = 1;
        this.neighbours = [];
        this.lattice = [];
    }

    fit() {

    }

    randomConfig(n) {
        return mathjs.random(0, n);
    }

    sumNeighbours() {
        let result = 0;
        for(let i = 0;i < 2 * this.dimensions;++i) {
            result += this.lattice[this.neighbours[i]];
        }
        return result;
    }
    
    find_neighbours(n) {
        for(let i = 0;i < this.dimensions;++i) {
            this.neighbours[2*i] = (n + this.reach[i] + this.modules) % this.modules;
            this.neighbours[2*i+1] = (n - this.reach[i] +this.modulus) % this.modulus;
        }
    }
}
