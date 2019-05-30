var words = ["ground", "control", "to", "major", "tom"];
var callback = "callback";
var map = function(inputWord, callback) {

    var arr = [];
    inputWord.forEach(function(element) {
        //console.log(callback(element));
        arr.push(callback(element));
    });
    console.log(arr);
};
    map(words, function(word) {
        return word.length;
    });
    map(words, function(word) {
        return word.toUpperCase();
    });
    map(words, function(word) {
        return word.split('').reverse().join('');
    });