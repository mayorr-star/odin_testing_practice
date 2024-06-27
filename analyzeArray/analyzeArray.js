function analyzeArray(arr) {
    return {
        average: getAverage(),
        min: getMinValue(),
        max: getMaxValue(),
        length: getLength()
    }
}

function getAverage(arr) {
    return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
}

