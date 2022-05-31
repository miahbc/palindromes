function palindrome(word) {
let w = word.toString().split('')
let w2 = w.map(x => x.toUpperCase())
let w3 = w2.slice().reverse()
let w22 = w2.join('')
let w33 = w3.join('')
// console.log(w22)
return (w22 == w33)
};

console.log(palindrome('racecar'))
console.log(palindrome('Noon'))
console.log(palindrome('ciVic'))
console.log(palindrome('nice'))
console.log(palindrome(434))
console.log(palindrome(123))



// console.log(palindrome('racecar') === true);
// console.log(palindrome('Noon') === true);
// console.log(palindrome('ciVic') === true);
// console.log(palindrome('nice') === false);
// console.log(palindrome(434) === true);
// console.log(palindrome(123) === false);

// console.log("The following should be true if you're trying to do the extra portion of this challenge");
// console.log(palindrome("Sore was I ere I saw Eros.") === true);
// console.log(palindrome("A man, a plan, a canal -- Panama") === true);


// console.log(palindrome('racecar') === true);
// console.log(palindrome('Noon') === true);
// console.log(palindrome('ciVic') === true);
// console.log(palindrome('nice') === false);
// console.log(palindrome(434) === true);
// console.log(palindrome(123) === false);

// console.log("The following should be true if you're trying to do the extra portion of this challenge");
// console.log(pal.palindrome("Sore was I ere I saw Eros.") === true);
// console.log(pal.palindrome("A man, a plan, a canal -- Panama") === true);

// exports.palindrome = function(word)