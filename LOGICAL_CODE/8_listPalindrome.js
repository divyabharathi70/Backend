let list = ["mam","madam","divya"]
let listOfPalindrome = []

for(let i=0;i<list.length;i++){
    let rev = ""
    for(let j=list[i].length-1; j>=0; j--){        
        rev+=list[i][j]
    }
    
    if(rev==list[i]){
        listOfPalindrome.push(list[i])
    }
}

console.log(listOfPalindrome);

// 1. outer loop , loops through the list 
// 2. inner loop , reverse every outer loop and store in rev 
//     - if rev - outerloop element  add that element listOfPalindrome