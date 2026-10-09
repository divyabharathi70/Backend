let wordOne = "cilent"
let wordTwo = "lientc"
let count = 0

if(!wordOne.length==wordTwo.length){
    console.log("Not a Anagram");
}

for(let i=0;i<wordOne.length;i++){
    for(let j=0;j<wordTwo.length;j++){
        if(wordOne[i]==wordTwo[j]){
            count +=1            
            break
        }
    }
}

if(count == wordOne.length){
        console.log("Anagram");
}
else{
        console.log("Not a Anagram");
}

// 1. wordOne length is not equal to wordTwo(no need to check further) - not a Anagram

// 2. outer for loop iterate through wordOne
// 3. inner loop iterate through the wordTwo - for comparing every wordOne letter with all letters in wordTwo
//         -> if outer loop element = inner loop element - increatment count and break

// 4. if count(matched count) = any one word lenght -> anagram 
//                                                     -> Not a Anagran

// op : Anagram 