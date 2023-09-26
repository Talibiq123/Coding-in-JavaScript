// Note: Array should be sorted
function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) { 
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] < key) { 
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

const arr = [1, 2, 3, 4, 5];
let key = 4;
const ans = binarySearch(arr, key);
console.log(ans);
