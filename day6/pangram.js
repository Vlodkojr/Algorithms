function isPangram(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let textToLowerCase = text.toLowerCase();
    if(text == '')return false;
    for (let letter of textToLowerCase) {
        if(!alphabet.includes(letter) && letter != ' ' && letter != "_"){
            console.log("1111");
            return false;
                       
        } 
    }    
    return true;
}

console.log(isPangram(""));