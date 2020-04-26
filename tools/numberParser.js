
const numberParser = number => {
    var numberStr = ''
    for (i=0; i < number.length; i++)
    {
        if (i>0 && !((i-number.length%3)%3)) { numberStr+=','; }
        numberStr+=number[i]
    }
    return numberStr
}

export const currenyParser = number => {
    var numberStr = numberParser(number)
    if (number.toString().length > 3 &&	number.toString().length <= 6) { return `\$${numberStr} thousand`}
    if (number.toString().length > 6 &&	number.toString().length <= 9) { return `\$${numberStr} million`}
    if (number.toString().length > 9 &&	number.toString().length <= 12) { return `\$${numberStr} billion`}
}

const percentParser = number => {
    return `${number}%`
}


console.log(percentParser('1230446'))