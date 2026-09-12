// Sum of 2 number = target 

let arrNums = [1,3,5,4,6]
let targetVal = 9

for (let i=0;i<arrNums.length;i++){
    for (let j=0;j<arrNums.length;j++){
        if(arrNums[i]==arrNums[j]){
            continue
        }
        if(arrNums[i]+arrNums[j]==targetVal){
            console.log(`${arrNums[i]} + ${arrNums[j]} gives ${targetVal}`);
        }
}
}

// outer loop , loops through the arrNums value 
// -for that every arrNums element inner loop , loops through every element in the arrNums   -->  so that means each element can be compared with all element

// outer loop element + inner loop element = target

// main condition : while checking - should not sum the element itself

// op : 
// 3 + 6 gives 9
// 5 + 4 gives 9
// 4 + 5 gives 9
// 6 + 3 gives 9