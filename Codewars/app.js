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

// new Challenge
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//First non-repeating character

let s = "stress";

function getFirstNonRepeating(s) {
    let str = toLowerCase(s);

    for (let i = 0; i < s.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return s[i];
        }
    }
    return " ";
}

function getFirstNonRepeating(s) {
    for (var i in s) {
        if (s.match(new RegExp(s[i], "gi")).length === 1) {
            return s[i];
        }
    }
    return " ";
}

// new Challenge
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

// new Challenge
function solution(str, ending){
    let str_length = str.length;
  let ending_length = ending.length;
  
  
  if (str.charAt(str_length -1) === ending.charAt(ending_length -1)){
      if (str.charAt(str_length - 2) === ending.charAt(ending_length -2)){
    return true;
  }
      }
else {
  return false;}
}

// check for all ending, not only last two
function solution(str, ending){
    let str_length = str.length;
  let ending_length = ending.length;
  
  for (let x = 1; x <= ending_length; x++)
    {
      if(str.charAt(str_length - x) !== ending.charAt(ending_length -x)){
        console.log(str.charAt(str_length - x));
        return false;
      }
      if(x === ending_length)
        {
          return true;
        }
    }
}
