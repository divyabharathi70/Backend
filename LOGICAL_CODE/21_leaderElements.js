let arr = [77,3,74,6,9,7,2,31]
let leaders = []

for(let i=0;i<arr.length-1;i++){
    let check = true
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            check = false
            break
        }
    }
    if(check!=false){
        leaders.push(arr[i])
    }
}

console.log(leaders);

// 1 . outer loop iterate through the array elements ignoring last as after last element no element are there to compare
// 2 . inner loop iterate from the outer loop elements' next till the end
//        - > check var is used as flag to track the element is leader / not
//        - > by marking check as flase if outerloop element < inner loop element
//        - > flag = true - till the inner loop execution complete - push the element to leader
       
// op : [ 77, 74 ]