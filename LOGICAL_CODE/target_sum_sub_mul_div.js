let arr = [2,3,5,7,8,9]
let target = 10
let flag = 0
let jVal = 0

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        jVal = j
        let max = Math.max(arr[i],arr[j])
        let min = Math.min(arr[i],arr[j])

        if((arr[i]+arr[j])==target){
            let flag = 1
            console.log(`${arr[i]} + ${arr[j]} gives ${target}`);
        }

        if((arr[i]*arr[j])==target){
            let flag = 1
            console.log(`${arr[i]} * ${arr[j]} gives ${target}`);
        }

        if((max-min)==target){
            let flag = 1
            console.log(`${max} - ${min} gives ${target}`);
        }

        if((max/min)==target){
            let flag = 1
            console.log(`${max} divided ${min} gives ${target}`);
        }
    }
    if(flag == 0){
    console.log(`Number ${arr[i]} & ${arr[jVal]} doesn't satisfy all the operations`);
}
}

// let arr = [2,10,20,89,5,5,2]
// let target = 10

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(i==j){
//             continue
//         }

//         if((arr[i]+arr[j])==target){
//             console.log(`${arr[i]} + ${arr[j]} gives ${target}`);
//         }
//     }
// }

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(i==j){
//             continue
//         }

//         if((arr[i]*arr[j])==target){
//             console.log(`${arr[i]} * ${arr[j]} gives ${target}`);
//         }
//     }

// }


// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//          let max = Math.max(arr[i],arr[j])
//         let min = Math.min(arr[i],arr[j])
//         if(i==j){
//             continue
//         }

//         if((max-min)==target){
//             console.log(`${max} - ${min} gives ${target}`);
//         }
//     }

// }

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         let max = Math.max(arr[i],arr[j])
//         let min = Math.min(arr[i],arr[j])
//         if(i==j){
//             continue
//         }

//          if((max/min)==target){
//             console.log(`${max} divided ${min} gives ${target}`);
//         }
//     }
// }