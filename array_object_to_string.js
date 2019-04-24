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

    return this.length > 1 ? //handel if length more than 1
        ( str = this.map(ele => { return ele.name }).join(", ") ) //make a string of the names separated with commas
        .slice(0, str.lastIndexOf(',')) + ' &' + str.slice(str.lastIndexOf(',') + 1) //replace the last comma with a '&'
        : this.length ? //handel if length is one or less
            this[0].name : //return just the name as a string
            '' //return and empty string
}

function list(names) {

    return names.formatThisSting()
}