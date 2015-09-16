"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var mathjs = _interopRequire(require("mathjs"));

var WangLandau = (function () {
    function WangLandau() {
        var dimensions = arguments[0] === undefined ? 2 : arguments[0];

        _classCallCheck(this, WangLandau);

        this.dimensions = dimensions;
        this.critical = 0;
        this.modules = 1;
        this.neighbours = [];
        this.lattice = [];
    }

    _createClass(WangLandau, {
        fit: {
            value: function fit() {}
        },
        randomConfig: {
            value: function randomConfig(n) {
                return mathjs.random(0, n);
            }
        },
        sumNeighbours: {
            value: function sumNeighbours() {
                var result = 0;
                for (var i = 0; i < 2 * this.dimensions; ++i) {
                    result += this.lattice[this.neighbours[i]];
                }
                return result;
            }
        },
        find_neighbours: {
            value: function find_neighbours(n) {
                for (var i = 0; i < this.dimensions; ++i) {
                    this.neighbours[2 * i] = (n + this.reach[i] + this.modules) % this.modules;
                    this.neighbours[2 * i + 1] = (n - this.reach[i] + this.modulus) % this.modulus;
                }
            }
        }
    });

    return WangLandau;
})();