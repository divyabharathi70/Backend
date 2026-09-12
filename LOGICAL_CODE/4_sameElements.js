let arr1 = [1,5,8,9,9,6,4,11]
let arr2 = [3,6,8,9,4,87,8]
let sameElmt  = []

for(let e=0;e<arr1.length;e++){
    for(let f=0;f<arr2.length;f++){
       
        if(arr1[e]==arr2[f] && !sameElmt.includes(arr1[e])){
            sameElmt.push(arr1[e])
        }

    }
}
console.log(sameElmt); 

// outer loop iterate through arr1 
// inner loop iterate through arr2 for every other loop element

// now outer loop element = inner loop element - add to sameElmt 

// extra condition ot check : 
//     same element must not be included in sameElmt - if two array elements are same and not in sameElmt -> add element