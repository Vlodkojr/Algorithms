function isPangram(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let textToLowerCase = text.toLowerCase();
    if(text == '')return false;
    for(let i = 0; i < alphabet.length; i++){
        if(textToLowerCase.indexOf(alphabet[i]) == -1) return false;
    }
    return true;
}

console.log(isPangram('the quick brown fox jumps over with lazy FX'));