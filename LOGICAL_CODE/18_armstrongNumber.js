// ArmStrong Number  - sum of digit in the number with power number of digit  =  original number

let num = 153
let tempVarCount = num      // temp variable for counting digit in number
let tempVarArmStrong = num  // temp variable for calculating Armstrong Number
let Nocount = 0             // for counting digit
let cal = 0                 // for calculating Armstrong Number 1^3 + 5^3 + 3^3

while(tempVarCount>0){
    tempVarCount = Math.floor(tempVarCount/10)    
    Nocount+=1
}

while(tempVarArmStrong>0){
    let rem = tempVarArmStrong % 10
    cal = cal + rem**Nocount
    tempVarArmStrong = Math.floor(tempVarArmStrong/10)
}

if(cal = num){
    console.log(num + " is Armstrong Number");
}
else{
    console.log(num + " is not a Armstrong Number");
}

// 1. 1st while loop run untill tempVarCount is < 0
//     -> remove last digit by /10
//     -> count - +1

// 2. 2nd while loop run untill tempVarCount is < 0
//       -> get reminder of num by %10 - add that remainder**count to cal variable

// 3. if cal == originalnumber -> Armstrong
//    else -> not a Armstrong Number

//op : Armstrong Number