/**
 * Fallið skilar streng í öfugri röð
 * @param {string} str strengur sem á að snúa við
 * @returns {string} strengurinn str í öfugri röð
 */
export function reverse(str) {
    let reversed = "";
    for (let i = 0; i < str.length ; i++){
      reversed += str[str.length - 1 - i];
    }
    return reversed;
  }
  
  console.assert(reverse("hallo") === "ollah", 'reverse: skrifar streng í öfugri röð');
  console.assert(reverse("búið") === "ðiúb", 'reverse: skrifar streng í öfugri röð');
  