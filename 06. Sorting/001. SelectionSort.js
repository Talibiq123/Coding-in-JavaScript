function selectionSort(arr) {
    let minIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        minIdx = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[minIdx] > arr[j]) { // Corrected condition
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            let temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

const arr = [3, 1, 6, 8, 7];
const result = selectionSort(arr);
console.log(result); // Output: [1, 3, 6, 7, 8]
