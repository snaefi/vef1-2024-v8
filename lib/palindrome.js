import {reverse} from './reverse.js';
/**
 * Fallið athugar hvort strengur sé palindrome þ.e. hvort hann sé eins þegar
 * hann er lesinn afturábak og áfram.
 * @param {string} str strengurinn sem á að athuga hvort sé palindrome
 * @returns true ef str er palindrome strengur, annars false
 */
export function palindrome(str) {
    if (str == reverse(str)) {
      return true;
    }
    return false;
  }
  
  console.assert(palindrome("abba") === true, 'palindrome: athugar hvort strengur sé palindrome, ef svo er skilar true, annars false');
  console.assert(palindrome("búið") === false, 'palindrome: athugar hvort strengur sé palindrome, ef svo er skilar true, annars false');
  