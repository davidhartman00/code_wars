/* DIRECTIONS
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Examples:
fearNotLetter("abce") should return "d".
  
fearNotLetter("abcdefghjklmno") should return "i".
  
fearNotLetter("stvwx") should return "u".
  
fearNotLetter("bcdf") should return "e".
  
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

function fearNotLetter(str) {
    let alpha = "abcdefghijklmnopqrstuvwkyz"
    let arr = (alpha).split('')
    return alpha.includes(str) ?
        undefined :
        arr.filter(
            (a, b, c) => (c.indexOf(a) >= arr.indexOf(str[0])) ?
            // var b is a needed placeholder
                (str.split("").indexOf(a) === -1) :
                false
        ).join("")[0]
}
fearNotLetter("abce");