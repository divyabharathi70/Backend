let num = 18
let temp = num
let sum = 0

while(temp>0){
    let rem = temp%10
    sum += rem
    temp = Math.floor(temp/10)
}

if(num%sum==0){
    console.log("Harshad Number");
}
else{
    console.log("Not a Harshad Number");
}

// 1. while loop runs untill temp is > 0
//     -> get last digit - rem = temp%10
//     -> add to sum - sum += rem
//     -> now neglect the last digit from temp - (temp/10)

// 2. if sum is divisible by the num - > Harshad Number 
//     else - > Not a Harshad Number

// op : Harshad Number