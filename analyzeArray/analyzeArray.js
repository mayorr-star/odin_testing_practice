function analyzeArray(arr) {
    if (!Array.isArray(arr)) return false;
    return {
        average: getAverage(arr),
        max: getMaxValue(arr),
        min: getMinValue(arr),
        length: getLength(arr)
    }
}

function getAverage(arr) {
    return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
}

function getMaxValue(arr) {
    return arr.reduce((prev, curr) => {
        return Math.max(prev,curr)
    }, arr[0])
}

function getMinValue(arr) {
    return arr.reduce((prev, curr) => {
        return Math.min(prev,curr)
    }, arr[0])
}

function getLength(arr) {
    return arr.length;
}
module.exports = analyzeArray