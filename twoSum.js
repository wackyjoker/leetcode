//Simple for loop

// var twoSum = function(nums, target) {
//     for (let i = 0 ; nums.length-1> i ; i++){
//         for(let j = i+1; nums.length>j ; j++){
//             if(nums[i]+nums[j]===target){
//                 return [].concat(i,j);
//             }
//         }
        
//     }
//     return 0;
// };




//complicated one
// var twoSum = function(nums, target) {
//     const sorted = nums.sort();
//     const middleIndex = Math.floor(nums.length / 2);


//     for (let i = 0; nums.length > i; i++) {
//         let otherHalf = target - sorted[i]
//         if (otherHalf >= 0) {
//             if (binarySearch(otherHalf, sorted) >= 0);
//         }
//     }


// };
 //---


// function binarySearch(num, arr) {
//     if (arr[0] === num) {
//         return num;
//     }
//     if (!num || arr.length < 2) {
//         return -1;
//     }
//     const middleIndex = Math.floor(arr.length / 2);
//     const left = arr.slice(0, middleIndex);
//     const right = arr.slice(middleIndex);
//     if (left[middleIndex - 1] <= num) {
//         return binarySearch(num, left);
//     } else {
//         return binarySearch(num, right);
//     }
// }


// var twoSum = function(nums, target) {
//     const sorted = nums.slice().sort();
//     const result = [];

//     for (let i = 0; nums.length > i; i++) {
//         const otherHalf = target - sorted[i]
//         console.log(`let's try our ${i}th time `);
//         if (otherHalf >= 0) {
//             const found = binarySearch(otherHalf, sorted);
//             console.log("we found something",found);
//             if (found >= 0 ) {
//                 console.log("we found it");
//                 if(nums.indexOf(found)!== i ){
//                     let found1 = nums.indexOf(found);
//                     nums.splice(found,found+1);
//                     let found2 = nums.indexOf(sorted[i])+1;
//                 return result.concat(found1,found2).sort();
//                 }
//             }
//         }
//     }
// };
//

// console.log(twoSum([2,7,11,15],9));

//fake
// function binarySearch(sortedArray, key){
//     let start = 0;
//     let end = sortedArray.length - 1;

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);

//         if (sortedArray[middle] === key) {
//             // found the key
//             return middle;
//         } else if (sortedArray[middle] < key) {
//             // continue searching to the right
//             start = middle + 1;
//         } else {
//             // search searching to the left
//             end = middle - 1;
//         }
//     }
//     // key wasn't found
//     return -1;
// }

//Best Solution

// time O(n) space O(n)
// var twoSum = function(nums, target) {
//     const map = new Map()
    
//     for(let i=0; i<nums.length; i++) {
//         const number = nums[i]
//         const complement = target - number
        
//         if(map.has(complement)) {
//             return [i, map.get(complement)]
//         }
        
//         map.set(number, i)
//     }
// };

// console.log(twoSum([3,4,3],6));

const moda = Array(200).fill().map((_,i)=>i++);

console.table(moda);