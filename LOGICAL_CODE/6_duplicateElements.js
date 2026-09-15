let dupFinder = {}
let duplicate = []
let num = [1,5,5,9,9,32]

for (let i=0;i<num.length;i++){
    if(dupFinder[num[i]]){
        dupFinder[num[i]] += 1
    }
    else{
        dupFinder[num[i]] = 1
    }
}

for(let i in dupFinder){
    if(dupFinder[i]>=1 && !duplicate.includes(dupFinder[i])){
        duplicate.push(dupFinder[i])
    }
}

console.log(`Duplicstes in the array are ${duplicate}`);

// 1. loop through the array (num) to access (num) - if value  already stored in counter - current num element as key in counter  value -> +1
//                                                                         - else add the current array element to counter with value 1

// 2. second for loop iterate through the dupFinder - id the value of key is <= 1 add that element to duplicate