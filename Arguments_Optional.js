/** DIRECTIONS
 Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
 
 */

function addTogether() {
    let args = [...arguments]
    const curried = x => {
        return y => {
            return Number.isInteger(y) ? x + y : undefined
        }
    }
    return args.every(el => Number.isInteger(el)) ?
        args[1] ?
            args[0] + args[1]
            : curried(args[0])
        : undefined
}

addTogether(2, 3);