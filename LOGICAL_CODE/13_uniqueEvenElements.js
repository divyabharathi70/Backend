let arr = [23,5,8,8,8,94,2,22]
let counter = {}

for(let d=0;d<arr.length;d++){
    if(counter[arr[d]]){        
        counter[arr[d]]++
    }
    else{
        counter[arr[d]] = 1
    }
}

for(let key in counter){
    if((key % 2 == 0) && (counter[key]==1))
        console.log(key);
}

// 1. outer loop ,iterate through the arr elements
//     -> if that element is not in counter add that element as key with value as 1
//     -> else if that element is in counter then increament its value 

//     now the arr element with its frequency is in counter

// 2. loop through the counter 
//     -> if the key is even also its value is 1 - that's the unique even number in the array