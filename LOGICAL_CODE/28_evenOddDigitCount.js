let num = 13138
let evenCount =0
let oddCount =0
let temp = num
let max
let min

while(temp>0){
    let rem = temp%10    
    if(rem%2 == 0){
        evenCount++
    }
    else{
        oddCount++
    }
    temp = Math.floor(temp/10)
}

if(oddCount>evenCount){
    max = oddCount
    min = evenCount
}
else{
    max = evenCount
    min = oddCount
}

console.log(`Even Count is ${evenCount}, Odd count is ${oddCount}`);
console.log(`The Difference Betwen odd and even count is ${max-min}`);


// while loop runs untill temp>0 - untill num is there to calculate
//         -> extract last digit from the temp - %10

//         -> even ? if rem remainder == 0 when divided by 2 - it is even - increment evenCount
//         -> odd ? else  it is even - increment oddCount

//         -> neglect last number as calulation is over - /10