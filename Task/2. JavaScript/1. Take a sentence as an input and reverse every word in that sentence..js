
function reverseWords(sentence){
    const words = sentence.split(" ");

    const reverseWords = words.map((word) => {
        return word.split('').reverse().join('');
    })

    const reversedSentence = reverseWords.join(' ');

    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);

