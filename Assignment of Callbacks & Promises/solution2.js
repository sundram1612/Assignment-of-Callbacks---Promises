function manipulatingString(inputString, callback){
    const manipulatedString = inputString.toUpperCase()

    callback(manipulatedString)
}

function logString(manipulatedString){
    console.log('The manipulated string is: ',manipulatedString);
}

manipulatingString("hello, world!", logString)
