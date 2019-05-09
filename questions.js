var selectElementsStartingWithA = function(array) {
  const result = array.filter(word => word.startsWith("a"));
  return result;
};

var selectElementsStartingWithVowel = function(array) {
  const result = array.filter(word => /^[aeiou]/.test(word));
  return result;
};

var removeNullElements = function(array) {
  const result = array.filter(word => word !== null);
  return result;
};

var removeNullAndFalseElements = function(array) {
  const result = array.filter(word => word !== null && word !== false);
  return result;
};

var reverseWordsInArray = function(array) {
  const result = array.map(word =>
    word
      .split("")
      .reverse()
      .join("")
  );
  return result;
};

var everyPossiblePair = function(array) {};

var allElementsExceptFirstThree = function(array) {
  const result = array.slice(3);
  return result;
};

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
};

var sortByLastLetter = function(array) {
  function compare(a, b) {
    if (a.slice(-1) < b.slice(-1)) return -1;
    if (a.slice(-1) > b.slice(-1)) return 1;
    return 0;
  }
  return array.sort(compare);
};

var getFirstHalf = function(string) {
  const result = Math.round(string.length / 2);
  return string.slice(0, result);
};

var makeNegative = function(number) {
  if (number < 0) {
    return number;
  } else {
    return number - number - number;
  }
};

var numberOfPalindromes = function(array) {};

var shortestWord = function(array) {
  array.sort(function(a, b) {
    return a.length - b.length;
  });
  return array[0];
};

var longestWord = function(array) {
  array.sort(function(a, b) {
    return b.length - a.length;
  });
  return array[0];
};

var sumNumbers = function(array) {
  const result = array.reduce(function(a, b) {
    return a + b;
  });
  return result;
};

var repeatElements = function(array) {
  let new_array = array.map(x => x);
  return array.concat(new_array);
};

var stringToNumber = function(string) {
  return Number(string);
};

var calculateAverage = function(array) {
  const result = array.reduce(function(a, b) {
    return a + b;
  });
  return result / array.length;
};

var getElementsUntilGreaterThanFive = function(array) {
  // let result = array.filter(num => num <= 5);
  // console.log(result);
};

var convertArrayToObject = function(array) {
  var object = {};
  for (var i = 0; i < array.length; i += 2) {
    object[array[i]] = array[i + 1];
  }
  return object;
};

var getAllLetters = function(array) {
  let new_array = [];
  for (var i = 0; i < array.length; i++) {
    new_array.push(array[i].split(""));
  }
  let result = new_array.flat().sort();
  return [...new Set(result)];
};

var swapKeysAndValues = function(object) {
  // console.log(Object.entries(object)[2]);
};

var sumKeysAndValues = function(object) {
  return "Write your method here";
};

var removeCapitals = function(string) {
  return "Write your method here";
};

var roundUp = function(number) {
  return Math.ceil(number);
};

var dateChecker = function(day) {
  return day < 10 ? "0" + day : day;
};

var formatDateNicely = function(date) {
  let day = dateChecker(date.getDate());
  let month = dateChecker(date.getMonth() + 1);
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

var getDomainName = function(string) {
  return string.substring(
    string.lastIndexOf("@") + 1,
    string.lastIndexOf(".com")
  );
};

var titleize = function(string) {
  return "Write your method here";
};

var checkForSpecialCharacters = function(string) {
  return "Write your method here";
};

var squareRoot = function(number) {
  return "Write your method here";
};

var factorial = function(number) {
  return "Write your method here";
};

var findAnagrams = function(string) {
  return "Write your method here";
};

var convertToCelsius = function(number) {
  return "Write your method here";
};

var letterPosition = function(array) {
  return "Write your method here";
};
