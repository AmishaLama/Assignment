//calculate the percentage he scored in the exams out of total 150 score
const obj = {
  computer: 42,
  maths: 42,
  science: 50,
};
let sum = 0;
for (i in obj) {
  sum = sum + obj[i];
}
let percent = (sum * 100) / 150;
let p = percent.toFixed(2);
console.log(p);

//Generate the output as follows
// {
//     userName: 'kaylin',
//     subjectCodes: ['M','S', 'G'],
//     subjectScores: [23,35,30]
// }
const userDetails = {
  name: 'kaylin',
  maths: 23,
  science: 35,
  gk: 30,
};
let subjectCodes = [];
const sub = Object.keys(userDetails);
sub.forEach((item) => {
  if (item != 'name') {
    subjectCodes.push(item.charAt(0).toUpperCase());
  }
});
const object = {
  userName: userDetails.name,
  subjectCodes,
  subjectScores: Object.values(userDetails).filter(Number),
};
console.log(object);
