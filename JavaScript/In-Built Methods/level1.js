// write a code that generates random number from 1 to 5
const randomNum = Math.floor(Math.random() * 5 + 1);
console.log(randomNum);

//using function
function generateRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}
var randomNumber1 = generateRandomNumber();
console.log(randomNumber1);
