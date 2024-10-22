import { split } from './helpers.js'

/**
 * Fallið finnur og skilar stysta orði í streng
 * @param {string} str strengur af orðum skipt niður með bilum.
 * @returns {string} strengur sem er stysta orðið í str. Ef fleiri en einn sem eru af
 * minnstu lengd skilar fallið fyrsta orðinu af stystu lengd
 */
export function shortest(str) {
    let splitted = split(str);
    let shortest = "";
    let min_length = Infinity;
    for (let i = 0; i < splitted.length; i++) {
      if (splitted[i].length < min_length) {
        min_length = splitted[i].length;
        shortest = splitted[i];
      }
    }
    return shortest;
  }
  
  console.assert(shortest("þetta er strengurinn minn") === "er", 'longest: skilar stysta orðinu í streng');
  console.assert(shortest("halló hafnarfjörður") === "halló", 'longest: skilar stysta orðinu í streng');
  