const check = (no,func)=>{
    if (no%2==0){
        func("Even")
    }
}

const res = (val)=>{
    console.log(val);
    
}

check(22,res)