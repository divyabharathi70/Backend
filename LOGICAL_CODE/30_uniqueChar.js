let word = "qddwoo"
let counter = {}
let uniqueCount = 0

for(let i=0;i<word.length;i++){
    console.log(word[i])
    if(counter[word[i]]){
        counter[word[i]]++
    }
    else{
        counter[word[i]] = 1
    }
}

for(let i in counter){    
    if(counter[i]==1){
        uniqueCount++
    }
}

console.log(`Unique Letter in the word is ${uniqueCount}`);

// 1. for loop iterate through the word
//         - >  if the particular letter in the word is in counter as key  -  increament the value 
//         - >  if not in counter add that letter as key in counter with value 1

// 2. for loop iterate through the index of counter 
//         - >  if any counter key value is 1 - increment 1

// op : 2