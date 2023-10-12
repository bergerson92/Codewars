// new challenge
function solution(number) {
    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}

// new challenge
function findNeedle(haystack) {
  let i = 0;
  while(i < haystack.length)
    {
      if(haystack[i] === "needle"){
        return "found the needle at position " + i;
      }
      i++;
    }
}

// new challenge
function removeChar(str){
let removeFirst = str.slice(1);
let removeLast = removeFirst.slice(0, removeFirst.length -1);
return removeLast;
};

// new challenge
function feast(beast, dish) {
  return beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1);
}

// global replacement
function removeExclamationMarks(s) {
  return s.replace(/!/g,"");
}

// new challenge
function firstNonConsecutive (arr) {
  for(let i = 1; i<arr.length; i++){
    if(arr[i] !== arr[i -1] +1)
      {
        return arr[i];
      }
  }
  return null;
}

// new challenge
function filter_list(l) {
  let array = [];
  for(let i = 0;i<l.length;i++){
    if (typeof(l[i]) === "number")
    {
      array.push(l[i]);
    }
  }
  return array;
}

// new challenge
function move (position, roll) {
  return position + (2*roll);
}

// new challenge
let str = "success";

function convertStr(str) {

    console.log(str.replace(/./g, char => str.indexOf(char) === str.lastIndexOf(char) ? '(' : ')'));
}

convertStr(str);

//longer version of answer
function replaceChars(str) {
    const charCount = {}; // Object to store character counts

    // Count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Replace characters based on their counts
    let result = '';
    for (let char of str) {
        if (charCount[char] === 1) {
            result += '(';
        } else {
            result += ')';
        }
    }

    return result;
}

// Example usage:
const inputString = "success";
const replacedString = replaceChars(inputString);
console.log(replacedString); // Output: "))(())("

// new challenge
var countBits = function(n) {
  let result = 0;
  const bin = n.toString(2);
for (const char of bin){
  if (char === "1"){
    result += 1;
  }
}
  return result;
};


