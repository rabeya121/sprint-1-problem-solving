// 01. Solve Me First
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var solveMeFirst = function(a, b) {
    return a + b;
};

// 02. Multiply
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var multiply = function(a, b) {
    return a * b;
};

// 03. Even or Odd
/**
 * @param {number} number
 * @return {string}
 */
var evenOrOdd = function(number) {
    return number % 2 === 0 ? "Even" : "Odd";
};

// 04. Return Negative
/**
 * @param {number} number
 * @return {number}
 */
var makeNegative = function(number) {
    return number > 0 ? -number : number;
};

// 05. Opposite Number
/**
 * @param {number} number
 * @return {number}
 */
var opposite = function(number) {
    return 0 - number;
};

// 06. Simple Array Sum
/**
 * @param {number[]} ar
 * @return {number}
 */
var simpleArraySum = function(ar) {
    return ar.reduce(function(sum, n) {
        return sum + n;
    }, 0);
};

// 07. sleepIn
/**
 * @param {boolean} weekday
 * @param {boolean} vacation
 * @return {boolean}
 */
var sleepIn = function(weekday, vacation) {
    return !weekday || vacation;
};

// 08. monkeyTrouble
/**
 * @param {boolean} aSmile
 * @param {boolean} bSmile
 * @return {boolean}
 */
var monkeyTrouble = function(aSmile, bSmile) {
    return aSmile === bSmile;
};

// 09. sumDouble
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var sumDouble = function(a, b) {
    return a === b ? (a + b) * 2 : a + b;
};

// 10. diff21
/**
 * @param {number} n
 * @return {number}
 */
var diff21 = function(n) {
    return n > 21 ? (n - 21) * 2 : 21 - n;
};

// Export for test runners (safe in browser / plain Node usage)
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        solveMeFirst,
        multiply,
        evenOrOdd,
        makeNegative,
        opposite,
        simpleArraySum,
        sleepIn,
        monkeyTrouble,
        sumDouble,
        diff21
    };
}


const ps = require("./RM_PS_1.js");

console.log(ps.solveMeFirst(2, 3));       // 5
console.log(ps.multiply(4, 5));            // 20
console.log(ps.evenOrOdd(7));              // Odd
console.log(ps.makeNegative(8));           // -8
console.log(ps.opposite(-7));              // 7
console.log(ps.simpleArraySum([1, 2, 3, 4])); // 10
console.log(ps.sleepIn(true, false));      // false
console.log(ps.monkeyTrouble(true, true)); // true
console.log(ps.sumDouble(3, 3));           // 12
console.log(ps.diff21(25));                // 8