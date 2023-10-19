const arr = [5, 1, 4, 2, 8];
for(let i=0; i<arr.length; i++) {
    for(let j=i; j<arr.length-i-1; j++) {
        if(arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);