let num = 123
let temp = num
let sum = 0
let product = 1

while(temp>0){
    let rem = temp%10
    sum+=rem
    product*=rem
    temp = Math.floor(temp/10)
}

if(sum==product){
    console.log("Spy Number");
}
else{
    console.log("Not a Spy Number");
}

// 1. while loop runs untill temp > 0 
//         -> extract last Number -%10
//         -> add that number to sum
//         -> multiply that number to product
//         -> neglect that number as calcultion is don using that number - /10
// 2. if - sum and product as equal  -  spy number
//     else - not a spy number

// op : Spy Number