//Q3
// calculate sum of array using either for in or for of
//Output= 20
const arr = [2, 5, 6, 7];
let sum = 0;
for (let i of arr) {
  sum = sum + i; //sums the values
}
console.log(sum);

//Q4
//high level
//remove from array if duplicate
const users = ['hari', 'shyam', 'hari'];
let temparr = [];
users.map((item) => {
  if (!temparr.includes(item)) {
    temparr.push(item); //pushes items to temparr if the item is not in temparr
  }
});
console.log(temparr);

//Q5
//calculate the sum of all the odd numbers inside this nested array
//Output= 24
const newArr = [
  [4, 5],
  [5, 7],
  [7, 2],
];
let sum1 = 0;
for (i = 0; i < newArr.length; i++) {
  for (j = 0; j < newArr.length - 1; j++) {
    if (newArr[i][j] % 2 != 0) {
      sum1 = sum1 + newArr[i][j];
    }
  }
}
console.log(sum1);

//Q6
// return only array of ids: expected output  [3,5,6]
const myDetails = [
  { id: 3, name: 'hari' },
  { id: 5, name: 'shyam' },
  { id: 6, name: 'gopal' },
];
let temp = [];
myDetails.map((item) => {
  temp.push(item.id);
});
console.log(temp);

//Q7
//loop over the arr of objects and calculate total score exp output is:
// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
// ]

const userDetails = [
  { score: 0, name: 'hari', marks: [10, 3, 23] },
  { score: 0, name: 'shyam', marks: [50, 23, 23] },
  { score: 0, name: 'shyam', marks: [20, 13, 43] },
];
score = 0;
userDetails.map((item) => {
  for (i = 0; i < userDetails.length; i++) {
    item.score = item.score + item.marks[i];
  }
});
console.log(userDetails);
