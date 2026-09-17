//1. {}{} - is invalid , return val shouldd be single val
//2. if we access and change private val in closure outside 
//        ie. count+=1 - > count is not defned (+= needs previous val)
//             count = 3 - > it means creating variable , default var count = 3

// const createStock = ()=>{
//         let stock = 10
//         return stockMarket = {
//            add :(quantity)=>{
//                 stock+=quantity
//                 console.log(stock);
//             }
//         },{
//             sell : sellProduct=(quantity) =>{
//                 if (quantity<stock){
//                     stock-=quantity
//                     console.log(stock);
//                 }
//                 else{
//                     console.log("Stock is less");
//                 }
//         }
//     }
// }

//     const product = createStock()
//     product.add(20)
//     product.sell(20)
//     product.add(20)
//     product.sell(40)

//     return product.add is not a function   -   return returns only one val also 
//                                                                -   {}{} - is invalid 

const counterFunc = ()=>{
    let count = 0
    const counter = ()=>{
        count+=1
        console.log(count);
    }

    return counter
}

const counterval = counterFunc()
counterval()
counterval()
counterval()

// count+=1 - > count is not defned (+= needs previous val)
// count = 3 - > it means creating variable , default var count = 3
// console.log(count);