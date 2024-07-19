// 48 misol

// function repeatElements(arr, n) {
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         for(let g = 0; g < n; g++){
//             result.push(arr[i])
//         }
//     }
//     return result
// }   
// console.log(repeatElements([1, 2, 3], 3)); // [1, 1, 1, 2, 2, 2, 3, 3, 3]

// 49 misol

// function sumEvenIndexedElements(arr) {
//     let result = []
//     arr.forEach(element => {
//         if(arr[element] % 2 == 0){
//             result.push(arr[element])
//         }
//     });
//     let total = result.reduce((a, b)=> a + b)
//     return total
// }

// console.log(sumEvenIndexedElements([1, 2, 3, 4, 5, 6]));  // 9 (1 + 3 + 5)

// 50 misol

//     function uniqueElements(arr) {
//         let new_arr = arr.filter(item => arr.indexOf(item) == arr.lastIndexOf(item))
//         console.log(new_arr)
//      }
 
//  console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5,])); // [1, 3, 5]

// 51 misol

// function reverseStringsInArray(arr) {
//     return arr.map(str => str.split("").reverse().join(""))
// }

// console.log(reverseStringsInArray(['abc', 'def', 'ghi'])); // ['cba', 'fed', 'ihg']

// 52 misol

function rotateArrayLeft(arr, n) {
    let a = arr.splice(n, 4)
    arr.unshift(+a.join("").split(" "))
    console.log(arr)
 }
 
 console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6, 7], 3)); // [4, 5, 6, 7, 1, 2, 3]