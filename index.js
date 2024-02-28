function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
  
  for (let j = i + 1; j < array.length; j++) 
    
  if (currentNum + array[j] === target) {
    
    return true;
  } 
}
return false;

    // for (const targetNumber of array) {
  //   if(targetNumber === "target") return targetNumber;
  // }

}
hasTargetSum([3, 8, 12, 4, 11, 7], 10);
hasTargetSum([22, 19, 4, 6, 30], 25);
hasTargetSum([1, 2, 5], 4);



  //   const seenNumbers = {};

//   for(let Number of array) {
//     const complement = target - number;
//     if(seenNumbers[complement]) {
//       return true;
//     }
//     seenNumbers[number] = true;
//   }
//   return false;

//   // Write your algorithm here
// }
// console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));

/* 
  Write the Big O time complexity of your function here
*/

/*
Add your pseudocode here

hasTargetSum([3, 8, 12, 4, 11, 7], 10);
returns true, since 3 and 7 add up to 10

hasTargetSum([22, 19, 4, 6, 30], 25);
returns true, since 19 and 6 add up to 25

hasTargetSum([1, 2, 5], 4);
returns false, since no pair of numbers adds up to 4

1. check target targetNumber
2. check numbers in array
3. if there is number bigger than targetNumber, remove it
4. among the numbers in the remaining gruop, 
  add the first number and the next numbers in order
5. if the add up number is bigger than the targetNumber, remove it
6. if there is no mach up, the first number remove it
7. back to 4. process with next number
8. repeat process from 4 to 6 till find matching number with targetNumber
9. return the numbers 
*/
















// const targetNumber = 10;
// const numbers = [3, 8, 12, 4, 11, 7];

// function findSumNumber(targetNumber, array) {
//   for(const number of array) {
//     let i = 10;
//     if(i > 10) {
//       delete i;
//     }
//     let sum = 10
//     for (let i = 10; i < array.length; i++) {
//       sum += array[i];
//     }
//   }
// }







/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
