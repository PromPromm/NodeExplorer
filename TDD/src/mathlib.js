function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function mul(num1, num2) {
    return num1 * num2
}

function div(num1, num2) {
    return num1 / num2
}

function pow(num1, num2) {
    return num1 ** num2
}

function mean(arrayOfNums) {
    let sum = 0
    arrayOfNums.forEach(num => {
        sum += num
    });
    return sum / arrayOfNums.length
}

module.exports = {
    add,
    sub,
    div,
    mul,
    pow,
    mean
}
