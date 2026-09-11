let counter = {}
let num = [1,5,5,9,9,32]

for (let i=0;i<num.length;i++){
    if(counter[num[i]]){
        counter[num[i]] += 1
    }
    else{
        counter[num[i]] = 1
    }
}

//  loop through the array (num) to access (num) - if value  already stored in counter - current num element as key in counter  value -> +1
//                                                                         - else add the current array element to counter with value 1

for (let i in counter){
   console.log(`${i} occurs ${counter[i]} times`);
}

// loop through the counter to display value and count of that value