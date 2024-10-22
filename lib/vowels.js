import {VOWELS} from './constants.js'

/**
 * Fallið athugar hve margir sérljóðar úr íslenska stafrófinu eru í streng
 * @param {string} str strengurinn sem á að finna fjölda sérhljóða í 
 * @returns fjöldi sérhljóða í str
 */
export function vowels(str) {
    let nmbr = 0;
    for (let i = 0; i < str.length; i++) {
      if (VOWELS.includes(str[i])) {
        nmbr += 1;
      }
    }
    return nmbr;
  }
  
  console.assert(vowels("hallo") === 2, 'vowels: athugar hve margir sérljóðar úr íslenska stafrófinu eru í streng');
  console.assert(vowels("hallooo") === 4, 'vowels: athugar hve margir sérljóðar úr íslenska stafrófinu eru í streng');
  