function selectionSort (arr) {
    for (var i = 0; i < arr.length; i++) {
        let lowest = i;
        for (var j = i + 1; j <arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if(i !== lowest) {
            console.log(i, lowest);
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    console.log(arr);
    return arr;
}

selectionSort([23,45,3,44,2]);