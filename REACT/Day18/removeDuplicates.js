let arr = [1, 2, 2, 3, 4, 4, 5]
let counters = {}
let removed = []

for(let i=0;i<arr.length;i++){
    if(!counters[arr[i]]){
        counters[arr[i]]  = 1
    }
}

for(let key in counters){
    removed.push(key)
}

console.log(counters);
console.log(removed);