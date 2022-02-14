// "use strict";

console.log("\n")

// Random n-length array generator
let arrLength = 10;

var arr = [];

while (arr.length < arrLength) {
    var arrValue = (Math.floor(Math.random() * arrLength) + 1) 

    if (arr.indexOf(arrValue) === -1) arr.push(arrValue)
}
console.log(`The array of ${arrLength} unsorted numbers is: ${arr}`)


console.log("Using the Counting sort algorithm:")

// Destructing the performance property from the perf_hooks module
const { performance } = require('perf_hooks')

// The Cocktail Sort Algorithm
function cocktailSort(arr) {

    let isSorted = true

    while (isSorted) {

        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i] > arr[i + 1]) {

                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                isSorted = true
            }
        }
        if (!isSorted) break;

        isSorted = false;
        
        for (let j = arr.length - 1; j > 0; j--) {

            if (arr[j - 1] > arr[j]) {

                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
                isSorted = true
            }
        }
    }
    return arr
}

// The timing function
function measurePerformance() {

     let startTime = performance.now()
    console.log(`Algorithm started at: ${startTime} milliseconds`)

    // calling the algorithm function whose performance is measured using template literals
    console.log(`The sorted array is: ${cocktailSort(arr)}`)

    let endTime = performance.now()
    console.log(`Algorithm ended at: ${endTime} milliseconds`)
    

     let timeTaken = Math.round((endTime - startTime))
    console.log(`Time taken to run: ${timeTaken} milliseconds`)
}
measurePerformance();

console.log("\n")