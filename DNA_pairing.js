/* DIRECTIONS
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

const pairElement = str => {
    return str.split("").map(a => {
        switch (a) {
            case 'A': return str = ["A", 'T'];
            case 'T': return str = ["T", 'A'];
            case 'C': return str = ["C", 'G'];
            case 'G': return str = ["G", 'C'];
        }
    }
    )
}

pairElement("GCG");