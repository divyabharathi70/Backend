let num = [1,0,5,0,2,65,2]

for(let a=0;a<num.length;a++){
    
    if(num[a]==0){
        for(let b=a; b<num.length-1; b++){
            num[b] = num[b+1]
        }
        num[num.length-1] = 0        
    }
}
console.log(num);

// 1. outer loop , loops through the array - num 
// 2. if any element is 0  
//      -> inner loop (from outerloop element to num's 2nd last element)
//      -> shifts all element next to the 0(current element) one step forward 
// 3.- now change the last element as 0

// op : [1,5,2,65,2,0,0]