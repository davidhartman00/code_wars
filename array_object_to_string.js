// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript
/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/

Array.prototype.formatThisSting = function () {
    formatArr = []
    if (this.length > 1){ //handel all arrays great then one
        this.forEach(ele => {
            formatArr.push(ele.name)
        })
        str = formatArr.join(", ")
        return str.slice(0, str.lastIndexOf(',')) + ' &' + str.slice(str.lastIndexOf(',') + 1)
    }
    return this.length ? this[0].name : ''
}


function list(names) {
    //your code here
    return names.formatThisSting()
}