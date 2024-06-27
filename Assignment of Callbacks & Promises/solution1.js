function doubleArray(arr, callback){
    const doubledArr = arr.map((num) => {
        return callback(num)
    })
    return doubledArr
}

const originalArray = [1, 2, 3, 4, 5]

function doublingEachElement(num){
    return num * 2
}
const doubledArray = doubleArray(originalArray, doublingEachElement)
console.log(doubledArray);