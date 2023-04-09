/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashTable = {}
  let neededValue

  for (let i = 0; i < nums.length; i++) {
    neededValue = target - arr[i]

    if (neededValue in hashTable) {
      return [hashTable[neededValue], i]
    } else {
      hashTable[nums[i]]=i
    }
  }
}
