const {compose} = require('redux')


const {Print, makeLowerCase, removeAngleBrackets, trimWhiteSpace} = require("./functionTemplates");


const raw_string = ' <https://jELDikk.github.io/self> '

// Print(makeLowerCase(removeAngleBrackets(trimWhiteSpace(raw_string))))

let composedValue = compose(
    Print,
    makeLowerCase,
    removeAngleBrackets,
    trimWhiteSpace
)(raw_string)

// console.log(composedValue)