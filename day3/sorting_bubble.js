function swap (arr, indx1, indx2) {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
}

function bubble_sort (arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
               swap(arr, j, j + 1);
            }
            // console.log(arr, arr[j], arr[j + 1]);
        }
    }
    console.log(arr);
    return arr;
}



bubble_sort([34, 5.6, 21, -Infinity, -5]);