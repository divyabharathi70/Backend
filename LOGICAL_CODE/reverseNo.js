let num = 12314
let rev = 0

while (num>0){
    let lastVal = num % 10
    rev+=lastVal 
    rev*=10
    num = num/10
}

console.log(rev);