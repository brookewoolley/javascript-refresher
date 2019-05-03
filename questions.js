var selectElementsStartingWithA = function(array) {
  const result = array.filter(word => word.startsWith('a'));
  return result;
}

var selectElementsStartingWithVowel = function(array) {
  const result = array.filter(word => /^[aeiou]/.test(word));
  return result;
}

var removeNullElements = function(array) {
const result = array.filter(word => word !== null);
return result;
}

var removeNullAndFalseElements = function(array) {
  const result = array.filter(word => word !== null && word !== false);
  return result;
}

var reverseWordsInArray = function(array) {
  const result = array.map(word => word.split("").reverse().join(""));
  return result;
}

var everyPossiblePair = function(array) {

}

var allElementsExceptFirstThree = function(array) {
  const result = array.slice(3);
  return result;
}

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  function compare(a,b) {
    if (a.slice(-1) < b.slice(-1)) return -1;
    if (a.slice(-1) > b.slice(-1)) return 1;
    return 0;
  }
  return array.sort(compare);
}

var getFirstHalf = function(string) {
  const result = Math.round(string.length / 2);
  return string.slice(0, result);
}

var makeNegative = function(number) {
  if (number < 0) {
    return number;
  } else {
    return (number - number) - number;
  };
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
