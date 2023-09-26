function linearSearch(arr, key) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === key) {
            return i;
        }
    }
    return -1;
}

const arr = [2, 4, 1, 3, 8, 6, 7];
const key = 1;
const ans = linearSearch(arr, key);
console.log(ans);

