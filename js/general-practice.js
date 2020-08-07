//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    const ht = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in ht) {
            return [ht[target - nums[i]], i];
        } else {
            ht[nums[i]] = i;
        }
    }
};

console.log(twoSum([1, 2, 3, 4], 5));