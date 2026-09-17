let arr = [1,5,7,7,7,7,7,99,2,2,22,2,2,2,2,2,2,22,2,2]
let count = {}

for(let i=0;i<arr.length;i++){
    if(count[arr[i]]){
        count[arr[i]]++
    }
    else{
        count[arr[i]] = 1
    }
}

for(let key in count){
    if(count[key] >= (Math.floor(arr.length/2))){
        console.log(`Majority Element are ${key} with the frequency of ${count[key]}`);
    }
}

// 1. Counting the number in the arr
//    -> for loop iterate through the arr - if element not in count storing the loop element as key in count with the value 1
//                                                          - else increaing the key(element) value by 1 in count

// 2. finding majority element in the count
//    -> if the value in each key > the length of half the arr - then that key is the majority element
 