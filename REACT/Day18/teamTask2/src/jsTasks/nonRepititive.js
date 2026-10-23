let word = "aabbcdecd"
let counter = {}

for(let i=0;i<word.length;i++){
    if(counter[word[i]]){
        counter[word[i]]++
    }
    else{
        counter[word[i]] = 1
    }
}

for(let key in counter){
    if(counter[key] == 1){
        console.log(`Non Repititive is ${key}`);
    }
}