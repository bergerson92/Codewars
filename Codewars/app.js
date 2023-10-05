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
