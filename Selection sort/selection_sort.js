// NOTE: Node JS must be installed on your system before this file can be executed
console.log("\n")

// Random n-length array Generator
let arrLength = 50000;

var arr = [];

while (arr.length < arrLength) {
    var arrValue = Math.floor(Math.random() * arrLength) + 1

    if (arr.indexOf(arrValue) === -1) arr.push(arrValue)
}
console.log(`The array of ${arrLength} unsorted numbers is: ${arr}`)

console.log("Using the Selection sort algorithm:")

// Destructing the performance property from the perf_hooks module
const { performance } = require('perf_hooks')

// The selection sort divides an array into two parts; a sorted subarray and unsorted subarray
// where the sorted subarray is usually empty and the unsorted array contains all the dataset
// it scans the entire unsorted subarray picking the smallest element, then putting it at the sorted aray from lrft to right
// It repeats the process till the unsorted array is empty and all elements have been added to the sorted array
// The Selection sort Algorithm
function selectionSort(arr) {

    let n = arr.length

    for (let i = 0; i < n; i++) {

        // Find the least element in the array
        let min = i;
        
        for (let j = i + 1; j < n; j++) {

            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min != i) {

            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    console.log(`The sorted array is: ${arr}`)
}

// the timing function
function measurePerformance() {

    let startTime = performance.now()
    console.log(`Algorithm started at: ${startTime} milliseconds`)

    // calling the algorithm function whose performance is measured
    selectionSort(arr)

    let endTime = performance.now()
    console.log(`Algorithm ended at: ${endTime} milliseconds`)
    
    let timeTaken = (Math.round((endTime - startTime))) / 1000
    console.log(`Time taken to run: ${timeTaken} seconds`)
}
measurePerformance();

console.log("\n")
