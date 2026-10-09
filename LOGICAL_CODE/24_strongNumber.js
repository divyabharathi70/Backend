let num = 145
let temp = num
let sum = 0

while(temp>0){
    let fact = 1
    let rem = temp%10
    for(let i=1;i<=rem;i++){
        fact*=i        
    }
    sum+=fact
    temp = Math.floor(temp/10)
}
if(sum==num){
    console.log("Strong Number");
}
else{
    console.log("Not a Strong Number");
}

// 1. while loop extracts each digit from the number
// 2. Inner for loop calculates the factorial of each digit
// 3. Add the factorial of each digit to sum
// 4. Remove the last digit from temp
// 5. If the original number and sum are the same  -  strong number

// op : Strong Number