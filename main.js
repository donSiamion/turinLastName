
let string = 'Turing'.toUpperCase()
let factarialArray = makeFactarialArray(string).sort()
let index = factarialArray.findIndex(el => el == string)
console.log(factarialArray[0],factarialArray[factarialArray.length-1] , index + 1)

function makeAllCombination(string) {
    let arrayCombinations = []
    for(let i = 0; i < string.length; i++) {
        for(let j = 0; j < string.length; j++) {
            let newString = string.split('')
            let st = newString[i]
            newString[i] = newString[j]
            newString[j] = st
            arrayCombinations.push(newString.join(''))
        }
    }    
    return arrayCombinations
}

function clearArraySameValues(arrayDirty){
    let clearArray = [arrayDirty[0]]
    for (let i = 0; i < arrayDirty.length; i++) {
        if (clearArray.findIndex(el => el == arrayDirty[i]) == -1) {
            clearArray.push(arrayDirty[i])
        }
    }
    return clearArray
}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

function makeFactarialArray(string) {
    let previousClearArray = makeAllCombination(string)
    while (previousClearArray.length < factorial(string.length)) {
        let newArr = []
        for (let i = 0; i < previousClearArray.length; i++) {
            newArr = newArr.concat(makeAllCombination(previousClearArray[i]))
        }
        newArr = clearArraySameValues(newArr)
        if (previousClearArray.length < newArr.length) {
            previousClearArray = newArr
        }
    }
    return previousClearArray
}