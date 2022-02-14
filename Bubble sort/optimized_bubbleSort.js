console.log("\n")

// Random n-length array Generator
let arrLength = 1000000;

var arr = [];

while (arr.length < arrLength) {
    var arrValue = Math.floor(Math.random() * arrLength) + 1

    if (arr.indexOf(arrValue) === -1) arr.push(arrValue)
}
console.log(`The array of ${arrLength} unsorted numbers is: ${arr}`)

console.log("Using the Optimized Bubble sort algorithm:")

// Destructing the performance property from the perf_hooks module
const { performance } = require('perf_hooks')


// for the Optimized Bubble sort
function bubbleSort(arr) {

    let i, j;
    let len = arr.length

    var isSwapped = false

    for (i = 0; i < len; i++) {

        isSwapped = false

        for (j = 0; j < len; j++) {

            if (arr[j] > arr[j + 1]) {

                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSwapped = true
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    console.log(`The sorted array is: ${arr}`)
}

// The timing function
function measurePerformance() {

    let startTime = performance.now()
    console.log(`Algorithm started at: ${startTime} milliseconds`)


    // calling the algorithm function whose performance is measured
    bubbleSort(arr)

    let endTime = performance.now()
    console.log(`Algorithm ended at: ${endTime} milliseconds`)
    

    let timeTaken = (Math.round((endTime - startTime))) / 1000
    console.log(`Time taken to run: ${timeTaken} seconds`)
}
measurePerformance();

console.log("\n")