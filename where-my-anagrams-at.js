// https://www.codewars.com/kata/where-my-anagrams-at/javascript
/*
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
*/
function anagrams(word, words) {
   return words.filter((el)=> (isAnagram(word,el)))
}

function isAnagram(word, anag) {
    let wordCount = {}
    let anagCount = {}
    let start = 1
    word.split("").forEach(el => {
        wordCount[el] = wordCount[el] + start || 1
    })
    anag.split("").forEach(ele => {
        anagCount[ele] = anagCount[ele] + start || 1
    })
    
    if (word.length === anag.length) {
        for (prop in wordCount) {
            if (wordCount[prop] != anagCount[prop]) 
            return false 
        }
        return true
    }
    return false;
}