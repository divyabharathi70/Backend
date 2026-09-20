let num = 12314
let rev = 0

while(num>0){
    let rem = num%10
    rev+=rem
    rev*= 10
    num = num/10
}
console.log(rev);