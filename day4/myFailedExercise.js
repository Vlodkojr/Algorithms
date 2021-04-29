let noSwapA;
function sortString (str) {
    let arr = str.split(" ");
    bubbleSort(arr);
}

function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--){
        noSwapA = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j].length > arr[j + 1].length){
                swapA(arr, j, j + 1);
            }
            console.log(arr, arr[j], arr[j + 1]);
        }
        if(noSwapA) break;
    }
    console.log(arr);
    return arr;
}

function swapA(arr, indx1, indx2) {
    let templ = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = templ;
    noSwapA = false;
}

sortString("My Name Is Vlodko");

