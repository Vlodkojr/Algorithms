// let reverseStr = word => word.split('').reverse().join('');

function reverseStr (word) {
    let str ='';
    for (let i = word.length -1; i >= 0; i--) {
        str += word[i];
    }
    return str;
}

console.log(reverseStr('word'))