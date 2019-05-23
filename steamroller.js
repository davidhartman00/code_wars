/* DIRECTIONS
Flatten a nested array. You must account for varying levels of nesting.

Example: steamrollArray([1, [2], [3, [[4]]]]) yeilds a one dimensional
array [1,2,3,4]
 */

const steamrollArray = arr => {
    return arr.flatMap(el => {
        const flatten = val => {
            return !Array.isArray(val) ? val :
                val.flatMap(v => flatten(v))
        }
        return flatten(el)
    })
}

steamrollArray([1, [2], [3, [[4]]]]);