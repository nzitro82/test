function findPairWithSum(numbers, targetSum) {
    let auxSum = numbers[0]
    let pairs = [numbers[0]]
    let index = 1
    while ((pairs.length < 2 || auxSum !== targetSum) && index <= numbers.length - 1) {
        if(pairs.length === 2) {
            auxSum = numbers[0]
            pairs = [numbers[0]]
        }
        auxSum += numbers[index]
        pairs.push(numbers[index])
        index ++
    }
    
    if(auxSum === targetSum && pairs.length === 2) 
        return pairs
    
    if(!!numbers.length) {
        numbers.shift()
        return findPairWithSum(numbers, targetSum)
    } 

    return []
}

const numbers = [9, 7, 7, 15, 1, 2];

const result = findPairWithSum(numbers, 17)

console.log("PAIRS MAIN!!", result)