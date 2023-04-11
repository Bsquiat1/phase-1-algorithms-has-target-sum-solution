function hasTargetSum(array, target) {
  
  const complements = new Set();
  for (const number of array) {
    if (complements.has(number)) {
      return true;
    }
    complements.add(target - number);
  }
  return false;


}

/* 
This implementation has a time complexity of O(n), where n is the length of the input array, since we only need to iterate over the array once and perform constant-time operations inside the loop. The space complexity is also O(n), since in the worst case we need to store all the complements in the complements set.
*/

/* 
function hasTargetSum(array, target):
   Initialize an empty set to store complements
  complements = new Set()
  
   Iterate over the elements of the array
  for number in array:
       Check if the current number's complement is in the set
      if complements.contains(number):
           We have found a pair that adds up to the target
          return true
      
       Add the complement of the current number to the set
      complements.add(target - number)
  
   We have checked all possible pairs and none add up to the target
  return false

*/

/*
We initialize an empty set called complements. This set will store the complements of the numbers we have seen so far (i.e., the numbers we need to reach the target sum).
We iterate over the numbers in the array.
For each number, we check if its complement is already in the complements set. If it is, we have found a pair of numbers that add up to the target, so we return true.
Otherwise, we add the complement of the current number to the complements set.
If we have iterated over all the numbers in the array and haven't found a pair that adds up to the target, we return false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([-2, 0, 3, -5, 2, 7, 1], -2));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 10));
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
