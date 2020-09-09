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

// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.
function hasVowels(str) {
    return str.match(/[aeiouAEIOU]/);
}

// Write a function definition named countVowels that takes in value and returns the count of the number of vowels in a sequence.
function countVowels(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for(var x = 0; x < str1.length ; x++)
    {
        if (vowel_list.indexOf(str1[x]) !== -1)
        {
            vcount += 1;
        }

    }
    return vcount;
}

// Write a function definition named removeVowels that takes in string and returns the string without any vowels
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}


// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel
function startsWithVowel(str) {
    var vowelRegex = '^[aieouAIEOU].*';
    var matched = str.match(vowelRegex);
    if(matched) {
        return true;
    }
    return false;
}

// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel
function endsWithVowel(str) {
    var vowelRegex = '[aieouAIEOU]$.*'
    var matched = str.match(vowelRegex)
    if(matched) {
        return true;
    }
    return false;
}

// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel
function startsAndEndsWithVowel(str) {
    var vowelRegexStart = '^[aieouAIEOU].*'
    var vowelRegexEnd = '[aieouAIEOU]$.*'
    if(str.match(vowelRegexStart) && str.match(vowelRegexEnd)) {
        return true;
    }
    return false;
}

function countLetters(str) {
    //initiate empty obj
    let countObj = {};
    //fancy es6 syntax for loop
    for (let element of str) {
        //if the obj does not contain that specific letter, it is just 1
        if (!countObj[element]) {
            countObj[element] = 1
            //else keep adding to the count of that letter
        } else {
            countObj[element]++
        }
    }
    return countObj

}

console.log(countLetters("jasmineannrivera"));



//calculate if n subsets that add up to the same sum from given arr is possible, return boolean
// ex: [1, 2, 3, 3, 4, 5, 6] n = 4 would return true


console.log(sortArray([1, 2, 3, 3, 4, 5, 6]));
function calculateSubsets(arr, n) {
    let target = findTarget(arr, n);
    let sortedArray = sortArray(arr);
    let subSets = createSubsets(n);
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < subSets.length; j++) {
            //
            if (sortedArray[i] <= target && addArray(subSets[j]) !== target ) {
                pushToArray(sortedArray[i], subSets[j]);
                // subSets[j].push(sortedArray[i]);
                console.log(addArray(subSets[j]));
                break;
            }
        }
    }
    return subSets;

}

// console.log(calculateSubsets([1, 2, 3, 3, 4, 5, 6], 4));

//helper function to sort array
function sortArray(arr) {
    return arr.sort().reverse();
}

//helper function to add all numbers in array
function addArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}


//helper function to create n subsets
function createSubsets(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {

        arr.push([]);
    }
    return arr;

}

    //helper function to find target
    function findTarget(arr, n) {
        return addArray(arr)/n;
    }
    function pushToArray(element,arr) {
        arr.push(element);
        return arr;

    }





//Given a string s, eliminate consecutive duplicate characters from the string and return it.
// That is, if a list contains repeated characters, they should be replaced with a single copy of the character. The order of the elements should not be changed.

function eliminateDupes(s) {
    let sArr = s.split(" ");
    let newString = "";
    for (let i = 0; i < sArr.length; i++) {
        for (let j = i + 1; j < sArr.length; j ++) {
            if (sArr[i] !== sArr[j]) {
                newString += (sArr[i]);
            }
        }
    }
    console.log(sArr);
    return newString;

}

console.log(eliminateDupes("Mira Fawn"));


//lookup example with linked list
function getIthItemInLinkedList(head, i) {

    if (i < 0) {
        throw new Error("i can't be negative: " + i);
    }

    var currentPosition = 0;
    var currentNode = head;

    while (currentNode) {

        if (currentPosition === i) {
            // found it!
            return currentNode;
        }

        // move on to the next node
        currentNode = currentNode.next;
        currentPosition++;
    }

    throw new Error("List has fewer than i + 1 (" + (i + 1) + ") nodes");
}

//Given two sorted lists of integers, merge them into one large sorted list.
//
// For example, given these two lists:
//
// lst0 = [5, 10, 15]
// lst1 = [3, 8, 9]
// Return [3, 5, 8, 9, 10, 15].
function mergeArr(lst0, lst1) {
   let mergedArr = [];
   let index1 = 0;
   let index2 = 0;
   let current = 0;

   while (current < (lst0.length + lst1.length)) {
       let islst0Depleted = index1 >= lst0.length;
       let islst1Depleted = index2 >= lst1.length;

       if(!islst0Depleted && (islst1Depleted || (lst0[index1] < lst1[index2]))) {
           mergedArr[current] = lst0[index1];
           index1++;
       } else {
           mergedArr[current] = lst1[index2];
           index2++;
       }

       current++;
   }

    return mergedArr;

}




console.log(mergeArr([5, 10, 15], [3, 8, 9]));