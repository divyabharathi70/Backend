    // let arr = [13,5,46,34,9]    
    // let largest = arr[0]

    // for(let i=1;i<arr.length;i++){
    //     if(arr[i]>largest){
    //         largest = arr[i]
    //     }
    // }

    // console.log(largest);

    
    let arr = [132,5,46]
    let largest = arr[0]
    let second = -Infinity//(leastest)   // why -Infinity instead of arr[0] should be maintained to handle array which has largest in 1st place 
                                                           // if 1st number in a array is largest 
                                                           //second number must be lesser than the largest so if we assume second = arr[0] initially both largest and second are equal
                                                           // when i=1 -> arr[i]<largest && arr[i]>second will be 5<132 && 5>132
                                                           //when i=2 -> 46<132 && 46>132  -  no second value update as the second holds the largest value 
                                                           // so largest = 132 
                                                           //second = 132  -  that is why -Infinity should be used in second initially(least than largest)

    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
                second = largest
                largest = arr[i]
            }
        else if(arr[i]<largest && arr[i]>second){
                second = arr[i]
        }
    }

    console.log(largest);
    console.log(second);

    // NOTE : so instead of assuming largest and second a actual value in array (arr[0]) initially
                     //we can initialise them a leastest value(-infinity) - "no assumption in array"   -   SAFE WHEN LARGEST IS AT START


    let arr = [132,5,46]
    let largest = -Infinity//(leastestvalue)  instead of assuming a value from the actual array (arr[0]) if we assume both as -Infinity 
                                                                // even when largest is at start , if array is empty ,if values negative all are handled
                                                                //NOTE : "No assumption are made from the array - so all edgecases handled safely"

    let second = -Infinity//(leastestvalue)  

    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
                second = largest
                largest = arr[i]
            }
        else if(arr[i]<largest && arr[i]>second){
                second = arr[i]
        }
    }

    console.log(largest);
    console.log(second);

    // NOTE : so instead of assuming largest and second a actual value in array (arr[0]) initially
                     //we can initialise them a leastest value(-infinity) - "no assumption in array"   -   SAFE WHEN LARGEST IS AT START
    // let arr = [13,5,46,34,9]
    // let largest = arr[0]
    // let second = arr[0]
    // let third = arr[0]

    // for(let i=1;i<arr.length;i++){

    // if(arr[i]>largest){
    //         third = second
    //         second = largest
    //         largest = arr[i]
    //     }                                           // 1st
    //     else if(arr[i]<largest && arr[i]>second){
    //             third = second
    //             second = arr[i]
    //     }                                           //2nd
    //     else if(arr[i]<second&&arr[i]>third){
    //         third = arr[i]
    //     }                                               //3rd
    // }

    // console.log(largest);
    // console.log(second);
    // console.log(third);


// const largest = (val)=>{

//     let arr = [13,59, 6,8]

//     for (let i=0;i<arr.length;i++){
//         for (let j=i+1;j<arr.length;j++){
//             // small = lar   arr[i] = arr[j]
//             //   lar = small   arr[j]  = arr[i]
        
//             if(arr[i]<arr[j]){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//                 console.log(arr);
//             }
//         }
//     }
//     console.log(val+"th largest "+ arr[val-1]);
//     }

// largest(3)

//largest

// let arr = [231,2,657,4,23,1,3,12]

// let largest = arr[0]

// for(let i= 0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest = arr[i]
//     }
// }
// console.log(largest);

// let arr = [231,2,54]

// let largest = arr[0]
// let second = arr[0]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){ //54>231
//         second = largest
//         largest = arr[i]
//     }

//     if(arr[i]<largest && arr[i]>second){ // 54<231 && 54>231
//         second = arr[i]
//     }
// }
// console.log(second);


// const largest =(val)=>{
//    let arr = [24,5,3,32,45]

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         console.log({i,j});
//             // ()>() compare - swap
//         // compare = ">" - swap
//         if(arr[i]<arr[j]){
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
// }
// }
// console.log(arr);

// console.log(arr[val-1]);
// }

// largest(4)

// let arr  =  [23,5,25,78,88]

// let largest = arr[0]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest = arr[i]
//     }
// }

// console.log(largest);

// let arr = [2,5,7,931,1]
// let largest = arr[0]
// let second = arr[0]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         second = largest
//         largest = arr[i] 
//     }

//     if(arr[i]<largest && arr[i]>second){
//         second = arr[i]
//     }
    
// }
// console.log(arr);
// console.log(second);

// let arr = [3,4,36,8,2]
// let largest = arr[0]
// let second = arr[0]
// let third = arr[0]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         third = second 
//         second = largest
//         largest = arr[i]
//     }

//     if(arr[i]<largest && arr[i]>second){
//         third = second
//         second = arr[i]
//     }

//     if(arr[i]<second && arr[i]>third){
//         third = arr[i]
//     }
// }
// console.log(arr);

// console.log({largest});
// console.log({second});
// console.log({third});


// () () compare - swap

// const largest = (val) =>{
//     let arr = [2,3,6,832,11]
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]<arr[j]){    //()() compare
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp       //swap
//             }
//         }
//     }
//     console.log(arr);
    
//     console.log(arr[val-1]);
    
// }

// largest(3)