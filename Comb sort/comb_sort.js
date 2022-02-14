console.log("\n")

// Random n-length array generator
let arrLength = 10;

var arr = [];

while (arr.length < arrLength) {
    var arrValue = Math.floor(Math.random() * arrLength) + 1

    if (arr.indexOf(arrValue) === -1) arr.push(arrValue)
}
console.log(`The array of ${arrLength} unsorted numbers is: ${arr}`)


console.log("Using the Comb sort algorithm:")

// Destructing the performance property from the perf_hooks module
const { performance } = require('perf_hooks')

// The Comb sort Algorithm
function combSort(arr) {
    let gap = Math.floor(arr.length/1.3)

    while ( gap > 0 ) {

        for (let i = 0; i + gap < arr.length; i += 1) {
            if (arr[i] > arr[i + gap]) {
                
                var small = arr[i + gap]
                arr[i + gap] = arr[i]
                arr[i] = small
            }
        }
        gap = Math.floor(gap/1.3)
    }
    return arr
}

// The timing function
function measurePerformance() {

    let startTime = performance.now()
    console.log(`Algorithm started at: ${startTime} milliseconds`)

    // calling the algorithm function whose performance is measured using template literals
    console.log(`The sorted array is: ${combSort(arr)}`)

    let endTime = performance.now()
    console.log(`Algorithm ended at: ${endTime} milliseconds`)
    

    let timeTaken = Math.round((endTime - startTime))
    console.log(`Time taken to run: ${timeTaken} milliseconds`)
}
measurePerformance();

console.log("\n")