function acronym (str) {
    let arr = str
    .split(' ')
    .reduce((acr, word) => acr + word.match(/[A-Z]/i)[0], '')
    .toUpperCase();
    console.log(arr);
    return arr;
}

acronym("World Health Organization jhg");
