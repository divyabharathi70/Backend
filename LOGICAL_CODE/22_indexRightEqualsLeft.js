let arr = [2,3,6,4,1]
let leftSum = 0         // to cal leftsum in each iteration
let rightSum = 0        // to cal leftsum in each iteration

for(let i=1;i<arr.length;i++){
    for(let j=0;j<i;j++){
        leftSum+=arr[j]
    }

    for(let k=i+1;k<arr.length;k++){
        rightSum+=arr[k]
    }

    if(leftSum==rightSum){
        console.log("At index " +i+ " the left and right sum are equal");
    }
    leftSum=0
    rightSum=0
}

// 1.outer loop iterate through the array - it acts as center element for calculating its left elements sum and right elements sum

// 2. inner first loop starts from 0 to i - left side of outer loop element
//         -> left sum is calculated - leftSum+=arr[j]

// 3. inner second loop starts from i+1 to end - right side of outer loop element
//         -> right sum is calculated - rightSum+=arr[k]

// 4. if leftsum == rightSum - show index which is i

// 5. reset leftSum and rightSum after leftSum and rightSum is calculated for each outerloop iteration

// op: