// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(target, arr){
  const possibilities = new Array(target+1).fill(0);
  possibilities[0] = 1
  //create an array with each index representing # of ways to sum to that index value
  //hardcode 1 way to sum to index 0, aka return nothing
  for (let i=0; i<arr.length; i++) {
    const coin = arr[i];
    //for each coin denomination...
    for (let j=coin; j<=target; j++) {
      //for each remainder value between the coin and target values...
      const remainder = j-coin
      possibilities[j] += possibilities[remainder]
      //add the current possibility value and the remainder's possibility value
    }
  }
  return possibilities[target]
  //after looping and aggregating, the last index of the possibilities array is the # of ways to sum to the target value
}
