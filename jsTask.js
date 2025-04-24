// Task 1: Create a function that takes an array of numbers and returns the largest number in the array.
// Example input: [10, 5, 20, 8]

function my_max(nums) {
  if (nums.length === 0) return null;
  let maxi = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxi) {
      maxi = nums[i];
    }
  }
  return maxi;
}

let ray = [10, 5, 20, 8];
console.log(my_max(ray));

// Output: 20

// Task 2:Create a function that takes an array of numbers and returns how many of them are positive.
// Use a loop and an if condition inside it.

// Example: [-1, 2, 5, -7]
// Output: 2

function my_pos(nums) {
  if (nums.length === 0) return null;
  let count=0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]*-1<0) {
      count++
    }
  }
  return count;
}

let ray = [-1, 2, 5, -7];
console.log(my_pos(ray));

// Task 3: Create a function that takes an array of numbers and returns a new array with each number squared.
// Example input: [2, 3, 4]
// Output: [4, 9, 16]
//bonus: Use the map method to create the new array.
function my_pos(nums) {
  return nums.map(num => num ** 2);
}

let ray = [-1, 2, 5, -7];
console.log(my_pos(ray)); 

// Task 4: Create a function that takes an array of numbers and returns a new array with only the numbers that are divisible by 3 , then add them together and print the sum.
// Example input: [3, 5, 9, 12, 14]
// Output: [3, 9, 12] , sum = 24
// bonus: Use the filter method to filter the numbers and the reduce method to sum them up.
function my_pos(nums) {
  let filtered=nums.filter(num =>  num % 3 === 0);
  return filtered.reduce(funco,0)
  function funco(total,num){
    return total+num
  }

}

let ray = [3, 5, 9, 12, 14];
console.log(my_pos(ray));

// Task 5: Create a function that takes an array of strings and returns a new array with only the strings that have more than 5 characters.
// Example input: ["apple", "banana", "kiwi", "watermelon"]
// Output: ["banana", "watermelon"]

let ray=["apple", "banana", "kiwi", "watermelon"]

let filtered=ray.filter(X=>X.length>5)
console.log(filtered)

// Task 6: Create a function that takes a string and returns true if it is a palindrome (reads the same backward as forward), and false otherwise.
// Example input: "racecar"
// Output: true

let ray = ["racecar", "apple", "banana", "kiwi", "watermelon"];

let pal = ray.filter(word => word === word.split('').reverse().join(''));
console.log(pal);

// Task 7: Create a function that takes an array of strings and returns a new array with only the even indexed strings converted to uppercase and reversed.
// Example input: ["apple", "banana", "cherry"]
// Output: ["ELPPA", "YRREHC"]

let ray = ["racecar", "apple", "banana", "kiwi", "watermelon"];
let filtered=ray.filter(word=>word.length%2!==0)
let reversed = filtered.map(word =>word.split('').reverse().join(''));
let upper=reversed.map(word=>word.toUpperCase())
console.log(upper);

// Task 8:

const students = [
    {
        name: "Ahmed",
        score: 68,
    },
    {
        name: "Ali",
        score: 24,
    },
    {
        name: "Mariam",
        score: 85,
    },
    {
        name: "Amr",
        score: 54,
    },
    {
        name: "Sara",
        score: 99,
    },
];
// Create a function that takes the array of students and prints each student and their grade to the console.
//
// The grade is calculated as follows:
// If the score is less than 50, the grade is 'F'.
// If the score is between 50 and 60, the grade is 'D'.
// If the score is between 60 and 70, the grade is 'C'.
// If the score is between 70 and 80, the grade is 'B'.
// If the score is higher than 80, the grade is 'A'.
//
// The output for each student should look like this:
// "Name: -student name-, Grade: -student grade-"
//
// Bonus: Sort the students by their grade in descending order into a new array
// and print the new array to the console. (Hint: Use the sort method)

// Write your code here


let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 72 },
  { name: "Charlie", score: 68 },
  { name: "Diana", score: 59 },
  { name: "Ethan", score: 42 },
];

function getGrade(score) {
  if (score < 50) return 'F';
  if (score < 60) return 'D';
  if (score < 70) return 'C';
  if (score < 80) return 'B';
  return 'A';
}

function StudentsWithGrades(students) {
  students.forEach(student => {
    const grade = getGrade(student.score);
    console.log(`Name: ${student.name}, Grade: ${grade}`);
    student.grade = grade; 
  })

  const gradeOrder = ['A', 'B', 'C', 'D', 'F'];
  const sorted = [...students].sort((a, b) => {
    return gradeOrder.indexOf(a.grade) - gradeOrder.indexOf(b.grade);
  });

  console.log("Sorted by grade (descending):");
  console.log(sorted);
}

StudentsWithGrades(students);