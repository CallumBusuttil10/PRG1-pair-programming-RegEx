const validWholeNumberRegEg = /^[0-9]+$/;
// console.log(validWholeNumberRegEg.test(456));
// console.log(validWholeNumberRegEg.test(`4`));
// console.log(validWholeNumberRegEg.test(4.4));
// console.log(validWholeNumberRegEg.test(`Error!`));

const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,4}$/;
const validWholeNumberRegEx = /^[0-9]+$/;
const validPositiveWholeDecimalNumber = /^(?:\d+|\d*\.\d+)$/;


function emailValidity(email){
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,4}$/;
    return emailRegEx.test(email);
}

// console.log(emailValidity(`callum@gmail.com`));
// console.log(emailValidity(`callum gmail.com`));

function nameChecker(userName){
    const nameRegEx = validAlphabeticString = /^[A-Za-z]+$/;
    return nameRegEx.test(userName);
}

// console.log(nameChecker(`Cal`));//Should return true
// console.log(nameChecker(`Cal2`));//Should return false

function ageChecker(userAge){
    const validWholeNumberRegEx = /^[0-9]+$/;
    return validWholeNumberRegEx.test(userAge);
}

// console.log(ageChecker(26)); //Should return true
// console.log(ageChecker(26.1)); //Should return false

function heightChecker(userHeight){
    const validPositiveWholeDecimalNumber = /^(?:\d+|\d*\.\d+)$/;
    return validPositiveWholeDecimalNumber.test(userHeight);
}

// console.log(heightChecker(`12.3`)); //Should return true
// console.log(heightChecker(12.3)); //Should return true
// console.log(heightChecker(-12.3)); //Should return false