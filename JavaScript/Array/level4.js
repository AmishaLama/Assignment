//Q1 find if hari is in allUsers array or not/
//expected output is :
//true
const name = 'hari';
const allUsers = ['hari', 'shyam', 'thakur'];
for (i = 0; i < allUsers.length; i = i + 1) {
  if (allUsers[i] == 'hari') {
    console.log(true);
  }
}

//Q2 find number of duplicates
//expected output is : 2
//true
const name = 'hari';
const allUsers = ['hari', 'hari', 'shyam', 'thakur'];
let sum = 0;
allUsers.map((item, id) => {
  if (item == 'hari') {
    sum = sum + 1;
    return item;
  } else {
    return 'hello';
  }
});
sum;
