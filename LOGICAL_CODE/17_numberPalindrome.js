
let num = 11511
let ori = num

let rev = 0

while(num > 0) {
    let rem = num % 10
    rev = rev * 10 + rem
    num = Math.floor(num / 10)
}

if(ori==rev){
    console.log("Palindrome");
}
else{
    console.log("not a palindrome");
}

// 1. while loop runs untill num > 0 
//     -> num % 10 - get last number
//     -> add rem to rev and multiply rev with 10 to increase the place value
//     -> now last digit is done - remove the last digit - num/10
// 2. if rev = ori 
//     -> palindrome
//    else -> not a palindrome

// op : Palindrome