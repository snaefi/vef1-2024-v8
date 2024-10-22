import { CONSONANTS } from './constants.js'

/**
 * Fallið athugar hve margir samhljóðar úr íslenska stafrófinu eru í streng
 * @param {string} str strengurinn sem á að finna fjölda samhljóða í
 * @returns  fjöldi samhljóða í str
 */
export function consonants(str) {
    let nmbr = 0;
    for (let i = 0; i < str.length; i++) {
      if (CONSONANTS.includes(str[i])){
        nmbr += 1;
      }
    }
    return nmbr
  }
  
  
  console.assert(consonants("hallo") === 3, 'consonants: athugar hve margir sérljóðar úr íslenska stafrófinu eru í streng');
  console.assert(consonants("hallooo halloo") === 6, 'consonants: athugar hve margir sérljóðar úr íslenska stafrófinu eru í streng');
   