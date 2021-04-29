const translateObj = {
    G : "C",
    C : "G",
    T : "A",
    A : "U",
};

let translateDNAtoRNA = function (transcription){
    return transcription == undefined ? "" : [...transcription].reduce((a , b) => a + translateObj[b], (""));
} 
console.log(translateDNAtoRNA("AT"))