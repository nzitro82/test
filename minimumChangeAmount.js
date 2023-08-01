function findMinimumAmount(numbers, targetSum, isRecursiveCall) {
  
  if (!isRecursiveCall && !numbers.length) return 1;

  if(!numbers.length) return 0;

  sortedNumbers = isRecursiveCall ? numbers : numbers.sort((n1, n2) => n1 > n2 ? 1 : -1)

  const directNumber = sortedNumbers.find((number) => number === targetSum);

  if (directNumber) return -1;

  const filteredNumbers = isRecursiveCall ? numbers : sortedNumbers.filter(number => number < targetSum)

  const maxIndex = filteredNumbers.length - 1
  maxAmount = filteredNumbers[maxIndex]

  const diff = targetSum - maxAmount;
  minAmount = maxAmount

  const diffNumber = numbers.find((number, index) => number === diff && index !== maxIndex);

  if(diffNumber) minAmount += diffNumber
  else {
    const filteredNum = sortedNumbers.filter((number, index) => number < diff && index !== maxIndex)
    minAmount += findMinimumAmount(filteredNum, diff, true)
  }

  return isRecursiveCall ? minAmount : minAmount === targetSum ? -1 : targetSum
}

const numbers = [5, 7, 1, 1, 2, 3, 22];
//const numbers = [1, 2, 5]
//const numbers = []

let targetSum = 0;
let result = -1;

while (result < 0) {
  targetSum++;
  result = findMinimumAmount(numbers, targetSum);
}

console.log("MINIMUM AMOUNT ", result);
