"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ahorcado = (function () {
    function Ahorcado(word) {
        this.word = word;
        this.guesses = new Set();
    }
    Ahorcado.prototype.setGuess = function (guess) {
        this.guesses.add(guess.toUpperCase());
    };
    Ahorcado.prototype.getWord = function () {
        var _this = this;
        return Array
            .from(this.word)
            .map(function (x) { return _this.guesses.has(x) ? x : '*'; })
            .join('');
    };
    Ahorcado.prototype.getWrongs = function () {
        var _this = this;
        return Array
            .from(this.guesses)
            .filter(function (x) { return !_this.word.includes(x); })
            .length;
    };
    return Ahorcado;
}());
exports.Ahorcado = Ahorcado;
//# sourceMappingURL=ahorcado.js.map