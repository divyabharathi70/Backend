let num = [1,3,5,0,0,65,0]

for(let a=0;a<num.length;a++){
    console.log(num);
    
    if(num[a]==0){
        for(let b=a;b<num.length-1;b++){
            num[b] = num[b+1]
        }
        num+=0
    }
}
console.log(num);