
var words = ['This','is','JavaScript','Bootcamp!'];
var sentence = ""
function createSentence(argument){ 
    for (var i = 0; i <= 3; i= i+1)
    {sentence = sentence+ argument[i]}
}
createSentence(words)
console.log (sentence)
