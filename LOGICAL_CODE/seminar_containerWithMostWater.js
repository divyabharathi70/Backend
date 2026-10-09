// let arr = [678,645,756]
// let capacity = 0
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){   

//         let min 
//          if(arr[i]<arr[j]){
//              min = arr[i]            
//          }
//          else{
//               min = arr[j]
//          }

//          let base = j-i

//         let area = base * min
        
//          if(capacity<area){
//              capacity=area
//          }
//     }
// }

//  console.log(capacity);

let arr = [12,7,9,22,3,4]
let capacity = 0
let left = 0
let right = arr.length-1

while(left<right){
    let min
    if(arr[left]<arr[right]){
        min = arr[left]
    }
    else{
        min = arr[right]
    }

    let base = right-left
    
    let area = base*min

    if(capacity<area){
        capacity = area
    }

    if(arr[left]<arr[right]){
        left++
    }
    else{
        right--
    }
}

console.log(capacity);