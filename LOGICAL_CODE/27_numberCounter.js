let num = 218914810841
let temp = num
let counter = {}        // counter of the num

while(temp>0){
    let rem = temp%10
    if(counter[rem]){
        counter[rem]++
    }
    else{
        counter[rem] = 1
    }
    temp = Math.floor(temp/10)
}
console.log(counter);

for (let i in counter){
    console.log(`${i} occurs ${counter[i]} times`);
}

//1.  while loop iterate until temp > 0
//         -> extract last digit from temp  -  temp%10
//         -> counting digits : if last digit(rem) in counter - digits value ++
//         ->                           else create new key as last digit (rem) with value as 1
//         -> now neglect the last value - temp/10

// 2. for loop iterate through the counter and display key with value

// op : 
// 0 occurs 1 times
// 1 occurs 4 times
// 2 occurs 1 times
// 4 occurs 2 times
// 8 occurs 3 times
// 9 occurs 1 times