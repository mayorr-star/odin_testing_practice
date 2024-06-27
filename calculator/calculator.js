const calculator = {
    add: function(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number") return "Input a number";
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number") return "Input a number";
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number") return "Input a number";
        return num1 * num2;
    },
    divide: function(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number") return "Input a number";
        return num1 / num2;
    }
}
module.exports = calculator;