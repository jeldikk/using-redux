const Print = (value) => {
    console.log(value);
}

const makeLowerCase = (value) => {
    return value.toLowerCase();
}

const removeAngleBrackets = (value) => {
    let leftRemoved = value.replace("<","");
    let rightRemoved = leftRemoved.replace(">",'');
    return rightRemoved
}

const trimWhiteSpace = (value) => {
    return value.trim()
}

module.exports = {
    Print,
    makeLowerCase,
    removeAngleBrackets,
    trimWhiteSpace
}