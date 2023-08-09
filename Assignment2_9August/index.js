//Q . 1
const removeDUplicates = (arr) => {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      ans.push(arr[i]);
    }
  }
  return ans;
};

const inp1 = [1, 2, 3, 2, 4, 3, 5];
const result = removeDUplicates(inp1);
console.log(result);

//Q 2
function findPrimes(inputArray) {
  const ans = [];

  for (let i = 0; i < inputArray.length; i++) {
    let prime = true;
    for (let j = 2; j * j <= inputArray[i]; j++) {
      if (inputArray[i] % j === 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      ans.push(inputArray[i]);
    }
  }

  return ans;
}
const inp2 = [2, 5, 8, 11, 12, 17, 20, 23];
const primes = findPrimes(inp2);
console.log(primes);

//Q 3
function transformArray(inputArray) {
  // Your code here
  const ans = inputArray.map((item) => item * item);
  return ans;
}

const inp3 = [1, 2, 3, 4, 5];
const transformedArray = transformArray(inp3);
console.log(transformedArray);

//Q 4
function sortPeopleByAge(peopleArray) {
  // Your code here
  peopleArray.sort((a, b) => {
    return a.age - b.age;
  });
  return peopleArray;
}
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
const sortedPeople = sortPeopleByAge(people);
console.log(sortedPeople);

//Q 5
function filterStudents(studentsArray) {
  // Your code here
  const newArr = studentsArray.filter((item) => item.score >= 70);
  return newArr;
}
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 60 },
  { name: "Charlie", score: 75 },
];
const highScoringStudents = filterStudents(students);
console.log(highScoringStudents);

//Q 6

function addPrefixToNames(peopleArray) {
  const newArr = peopleArray.map((item) => {
    return (item.name = "Mr. " + item.name);
  });

  return newArr;
}

const people1 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const peopleWithPrefix = addPrefixToNames(people1);
console.log(peopleWithPrefix);

//Q_7
function countVowels(str) {
  // Your code here
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toUpperCase();
    if (ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U") {
      cnt++;
    }
  }

  return cnt;
}

console.log(countVowels("apple")); // Expected output: 2
console.log(countVowels("banana")); // Expected output: 3

//Q_8
function titleCase(str) {
  // Your code here
  let s = "";
  for (let i = 0; i < str.length; i++) {
    s += str[i].toUpperCase();
  }

  return s;
}

console.log(titleCase("hello world")); // Expected output: "Hello World"
console.log(titleCase("this is a test")); // Expected output: "This Is A Test"

//Q_9
function countVowels(str) {
  // Your code here
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toUpperCase();
    if (ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U") {
      cnt++;
    }
  }

  return cnt;
}

console.log(countVowels("apple")); // Expected output: 2
console.log(countVowels("banana")); // Expected output: 3

//Q_10:
function reverseString(str) {
  let s = "";
  for (let i = str.length - 1; i >= 0; i--) {
    s += str[i];
  }

  return s;
}
console.log(reverseString("hello")); // Expected output: "olleh"
console.log(reverseString("world")); // Expected output: "dlrow"
