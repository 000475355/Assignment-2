
// Solution 1 
// Higher Order Function
function checkCondition(str, conditionFun) {
    if (conditionFun(str)) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
  
  
  function checkY(str) {
    return str.includes('y');
  }
  
  // Example usage
  checkCondition('Crazyy', checkY); // Output: YES
  
  

  // Solution 2
  
  function getFactorial(num) {
    // Check if the input is a non-negative integer
    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
      return "Please provide a non-negative integer.";
    }

    let result = 1;
  
    // Multiply result by each integer from 1 to num
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  
    return result;
  }
  
  // Example usage
  const factorial = getFactorial(5);
  console.log(factorial); 
  
  ////////////////////////////////////////
  

  // solution 3

  let studentList = [
    { name: "Mike", marks: [80, 50, 60, 100] },
    { name: "Daniel", marks: [40, 50, 100, 100] },
    { name: "Stacy", marks: [20, 100, 50, 70] },
  ];
  
  function getHighestAverageStudent() {
    let highestAverage = -1;
    let highestAverageStudent = null;
  
    for (let i = 0; i < studentList.length; i++) {
      const student = studentList[i];
      let sum = 0;
  
      for (let j = 0; j < student.marks.length; j++) {
        sum += student.marks[j];
      }
  
      const average = sum / student.marks.length;
  
      if (average > highestAverage) {
        highestAverage = average;
        highestAverageStudent = student.name;
      }
    }
  
    return highestAverageStudent;
  }
  
  // Example 
  console.log(getHighestAverageStudent()); 

  /////////////////////////////////////////////////////////

  //solution 4 

  function CommonNumber(arr) {
    const occurrences = {};
  
    arr.forEach(number => {
      occurrences[number] = (occurrences[number] || 0) + 1;
    });
  
    const mostCommonNumber = Object.keys(occurrences).reduce((maxNumber, currentNumber) => {
      return occurrences[currentNumber] > occurrences[maxNumber] ? currentNumber : maxNumber;
    });
  
    return parseInt(mostCommonNumber);
  }
  
  // Example 
  const numbers = [20, 4, -10, 4, 11, 20, 4, 2];
  console.log(CommonNumber(numbers)); // Output
  
  ////////////////////////////////////////////////////////////

 // solution 5

 function findUniqueNumber(arr) {
  const occurrences = {};

  arr.forEach(number => {
    occurrences[number] = (occurrences[number] || 0) + 1;
  });

  const uniqueNumbers = Object.keys(occurrences).filter(number => occurrences[number] === 1);

  if (uniqueNumbers.length === 0) {
    return null; // No unique number found
  }

  return parseInt(uniqueNumbers[0]);
}

// Example 
const number = [20, 20, 11, 4, 11, 20, 2, 4];
console.log(findUniqueNumber(numbers)); // Output: 2

//////////////////////////////////////////////////////////////

// solution 6 

function isPalindrome(str) {
  const reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}

function filterPalindromes(arr) {
  return arr.filter(isPalindrome);
}

// Example 
const strings = ['abc', 'aba', 'ccc', 'dca', 'dad', 'a'];
const palindromeArray = filterPalindromes(strings);

console.log(palindromeArray); 
