// Find the maximum sum of a subarray of a fixed size K within an array of integers.
function maximumSum(arr, k) {
    if(k > arr.length || k<=0) {
        return "invalid input";
    }

    let maxSum = 0;
    let currentSum = 0;

    for(let i = 0; i < k; i++) {
        currentSum += arr[i]; 
    }

    maxSum = currentSum;

    for(let j = k; j < arr.length; j++) {
        currentSum += arr[j]-arr[j-k];
        maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum;
}

const arr = [3, 1, 8, 4, 2, 7, 3, 9, 4, 2, 4, 6, 2, 7, 9];
const k = 3;
const ans = maximumSum(arr, k);
console.log(ans);