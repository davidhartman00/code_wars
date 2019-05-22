/* DIRECTIONS
Find the smallest common multiple of the provided parameters that can be 
evenly divided by both, as well as by all sequential numbers in the range 
between these parameters.

The range will be an array of two numbers that will not necessarily be in 
numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1
and 3 that is also evenly divisible by all numbers between 1 and 3. The 
answer here would be 6.
 */

const smallestCommons = arr => {
    let flag = true
    let sm = Math.min(...arr)
    let lg = Math.max(...arr)
    let num, x = 1
    while (flag) {
        num = sm * x
        if (num % lg === 0) {
            for (let i = sm + 1; i < lg; i++) {
                if (num % i !== 0) break
                if (i === lg - 1) flag = false
            }
        }
        x++
    }
    return num
}


smallestCommons([1, 5]);