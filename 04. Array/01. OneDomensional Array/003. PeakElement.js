// find peak element
function findPeakElement(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[mid + 1]) {
            // The peak is to the left of the mid element
            right = mid;
        } else {
            // The peak is to the right of the mid element
            left = mid + 1;
        }
    }

    return left; // 'left' now points to a peak element
}

const arr = [1, 3, 20, 4, 1, 0];
const peakIndex = findPeakElement(arr);

console.log(`The peak element is ${arr[peakIndex]} at index ${peakIndex}`);
