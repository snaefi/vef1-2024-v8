/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace, split } from './lib/helpers.js';
import { longest } from './lib/longest.js';
import { shortest } from './lib/shortest.js';
import { reverse } from './lib/reverse.js';
import { vowels } from './lib/vowels.js';
import { consonants } from './lib/consonants.js';
import { palindrome } from './lib/palindrome.js';


/**
 * Removes the 'hidden' class from an element, making it visible.
 * @param {HTMLElement} el - The HTML element to modify.
 */
function removeHidden(el) {
    el.classList.remove('hidden');
 }
 
 /**
  * Adds the 'hidden' class to an element, making it invisible.
  * @param {HTMLElement} el - The HTML element to modify.
  */
 function addHidden(el) {
    el.classList.add('hidden');
 }
 
 /**
  * Handles the form submission event, processes the text input, 
  * and updates the output elements (longest, shortest, vowels, consonants, palindrome, reversed).
  * @param {Event} event - The form submission event.
  */
 function submitHandler(event) {
    event.preventDefault();
 
    const {target} = event;
    const textareaElement = target.querySelector('textarea');
    console.log(textareaElement.value);
 
    const outputElement = document.querySelector('.output');
    if (outputElement) {
        removeHidden(outputElement);
    }
 
    /* Update text content in output elements */
    const element = document.querySelector('.input');
    if (element) {
        element.textContent = textareaElement.value;
    }
 
    const longestElement = document.querySelector('.longest');     
    if (longestElement) {
        longestElement.textContent = longest(textareaElement.value);
    }
 
    const shortestElement = document.querySelector('.shortest');     
    if (shortestElement) {
        shortestElement.textContent = shortest(textareaElement.value);
    }
 
    const vowelsElement = document.querySelector('.vowels');     
    if (vowelsElement) {
        vowelsElement.textContent = vowels(textareaElement.value);
    }
 
    const consonantsElement = document.querySelector('.consonants');
    if (consonantsElement) {
        consonantsElement.textContent = consonants(textareaElement.value);
    }
 
    const palindromeElement = document.querySelector('.palindrome');
    if (palindromeElement) {
        if (palindrome(textareaElement.value)) {
            addHidden(palindromeElement);
        }
    }
 
    const reverseElement = document.querySelector('.reversed');
    if (reverseElement) {
        reverseElement.textContent = reverse(textareaElement.value);
    }
 }
 
 /**
  * Handles the form reset event, hides the output section, and clears the text area.
  * @param {Event} event - The form reset event.
  */
 function resetHandler(event) {
    event.preventDefault();
 
    /* Hide output again when reset */
    const outputElement = document.querySelector('.output');
    if (outputElement) {
        outputElement.classList.add('hidden');
    }
 
    /* Clear text in textarea */
    const {target} = event;
    const textareaElement = target.querySelector('textarea');
    textareaElement.value = "";
 }
 
 const formElement = document.querySelector('form');
 formElement.addEventListener('submit', submitHandler);
 formElement.addEventListener('reset', resetHandler);