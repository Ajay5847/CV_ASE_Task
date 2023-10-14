// Without using inbuilt sort() function

let arr = [5, 3, 8, 1, 2, 0, 4];

// Bubble sort in descending order
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);

// With using inbuilt sort() function

arr.sort((a,b) => {
    return b - a;
})

console.log(arr);
