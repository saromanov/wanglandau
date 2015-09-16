import mathjs from 'mathjs';


class WangLandau {
    constructor(dimensions=2) {
        this.dimensions = dimensions;
        this.critical = 0;
        this.modules = 0;
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
}
