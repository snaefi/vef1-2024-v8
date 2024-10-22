import { split } from './helpers.js'
/**
 * Fallið finnur og skilar lengsta orði í streng
 * @param {string} str strengur af orðum sem skipt er niður með bilum.
 * @returns {string} strengur sem er lengsta orðið í str. Ef fleiri en eitt orð
 *  hafa lengstu lengd skilar fallið fyrsta orðinu sem kemur fyrir
 */
export function longest(str) {
    let splitted = split(str);
    let longest = "";
    let max_length = 0;
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i].length > max_length) {
          max_length = splitted[i].length;
          longest = splitted[i];
        }
    }
    console.log(longest);
    return longest;
    
  }

console.assert(longest("þetta er strengurinn minn") === "strengurinn", 'longest: skilar lengsta orðinu í streng');
console.assert(longest("halló hafnarfjörður") === "hafnarfjörður", 'longest: skilar lengsta orðinu í streng');
