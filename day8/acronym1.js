function acronym (str) {
    let arr = str
    .split(/[\s-]+/)
    .reduce((acr, word) => acr + word.match(/[A-Z]/i)[0], '')
    .toUpperCase();
    console.log(arr);
    return arr;
}

acronym("Something - I made up from thin air");
