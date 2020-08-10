//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    const ht = {}; //create an empty object
    for (let i = 0; i < nums.length; i++) { //loop through array of numbers
        if (target - nums[i] in ht) { //see if the target minus the current num is in the obj
            return [ht[target - nums[i]], i];
        } else {
            ht[nums[i]] = i;
        }
    }
};

console.log(twoSum([1, 2, 3, 4], 5));


// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
function isVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "U") {
        return true;
    }
    return false;
}

console.log(isVowel("a"));