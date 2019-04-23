// https://www.codewars.com/kata/persistent-bugger/javascript
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
*/

function persistence(num, count = 0) {
    //turn number into array of intergers
    var numArr = num.toString().split("").map(Number)

    if (numArr.length == 1) { //reached the single digit
        return count
    } else { //working towards the multiplicative persistence
        var mpp = 1;
        numArr.map((x) => {
            mpp = mpp * x
        })
    }
    count++
    return persistence(mpp, count)

}