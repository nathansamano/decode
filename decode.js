/* Nathan Samano
 * 4/27/15
 * Write JavaScript code to find a 9 letter string
 * of characters that contains only letters from
 * acdegilmnoprstuw
 *
 * decode.js
 */

// given function
function hash(s) {
  var h = 7;
  var letters = "acdegilmnoprstuw";
  for (var i = 0; i < s.length; i++) {
    h = h * 37 + letters.indexOf(s[i]);
  }
  return h;
}

console.log(hash("leepadg"));
// 680131659347

// get big number for h and take it back to 7
// ended up no being necessary for solution, however,
// this helped me think up "while (h !== 7)" in reverseHash
function refactorHash(s) {
  var h = 7;
  var letters = "acdegilmnoprstuw";
  for (var i = 0; i < s.length; i++) {
    h = h * 37 + letters.indexOf(s[i]);
    console.log("First: " + h);
  }

  for (var i = s.length-1; i >= 0; i--) {
    h = (h - letters.indexOf(s[i])) / 37;
    console.log("Second: " + h);
  }
  return h; // should be 7
}

console.log(refactorHash("leepadg"));
// 7

// solution here! takes (big) number and the desired word length
// and decryps for the string
function reverseHash(h, word_len) {
  // string being parsed for
  var s = "";
  var letters = "acdegilmnoprstuw";
  // temporary variable explained below
  var temp = h;

  console.log("About to print index numbers");

  // stop when h == 7 since that's where it starts in the initial function
  while (h !== 7) {
    // iterate through each index number
    for (var i = 0; i < letters.length; i++) { 
      // find factors of 37 from h 
      if ((h - i) % 37 === 0) {
        console.log(i);
        // temporarily stored i just in case there would be multiple cases
        // in one full iteration of the for loop that satisfied the if statement
        // this is never the case due to the nature of 37 and 9 in terms of divisiblity
        temp = i;
      }
    } // for
    // create string in reverse order
    s = letters[temp] + s;
    // from bottom portion of refactorHash
    h = (h - temp) / 37;
  } // while
  return s;
}

// test to make sure my code is correct
console.log(reverseHash(680131659347, 7));
// leepadg

console.log(reverseHash(911064701880998, 9));
// auctioned
// :-)
