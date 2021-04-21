function binarySearch (arr, number) {
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== number && start <= end){
        if(number < arr[middle]) end = middle -1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    // console.log(start, middle, end);
    return arr[middle] === number ? middle : -1;
}

binarySearch ([1,3,5,8,33,90,475], 8);