let sentence = "JS is one way flow";
let word = "";
let longest = "";

for (let i=0; i<sentence.length; i++) {
   if(sentence[i]==" "){
    if(word.length>longest.length){
        longest = word
    }
    word = ""
   }
   else{
    word+=sentence[i]
   }
}

console.log(longest);

// word - store separate word in the sentence
// longest - store the longest word

// for loop iterate through the array
//     -> if array element is empty string and the word is > largest - assign word to largest -  make word  - "" to store new word
//     -> else add current element to the word

// op : flow