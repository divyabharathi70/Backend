let word = "banana"
let counter = {}

for(let i=0;i<word.length;i++){
    if(counter[word[i]]){
        counter[word[i]]++
    }
    else{
        counter[word[i]] = 1
    }
}

console.log(counter);
