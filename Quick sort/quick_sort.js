// NAME: BRAI DANIEL OSHOKE, MATRIC NUMBER: 214868, COURSE CODE: CSC 236, DEPARTMENT: COMPUTER SCIENCE
// NOTE: Node JS must be installed on your system before this file can be executed
console.log("\n")

var arr = [];

let arrLength = 100000;

// Random n-length array generator
while (arr.length < arrLength) {

    var arrValue = Math.floor(Math.random() * arrLength) + 1

    if (arr.indexOf(arrValue) === -1) arr.push(arrValue)

}
// const arr = Array.from(Array(len).map(x => Math.floor(Math.random())))
console.log(`The array of ${arrLength} unsorted numbers is: ${arr}`)

console.log("Using the Quick sort algorithm:")

// Destructing the performance property from the perf_hooks module
const { performance } = require('perf_hooks')

// The quick sort uses the divider and conquer approach just like merge sort.
// it work by picking an element form the unsorted array as the pivot,
// and partitions the array around the pivot
// By taking the pivot as the central point , it puts elements smaller than or equal to the pivot to the left
// and to the right elements greater than the pivot
// The process repats itself until all elements are sorted
// The Quick Sort algorithm

function quickSort(arr) {
    
    // if the array length less than or equal to 1, return the array
    if (arr.length <= 1) return arr

    var startArr = []
    var endArr = []
    let pivot = arr.pop() // since the pop method removes the last element from an array
    let n = arr.length

    // The pivot utility loop
    // Loop for comparing the the pivot element with an element in the array at index i
    for (let i = 0; i < n; i++) {

        if (arr[i] <= pivot) {
            startArr.push(arr[i])
        }
        else {
            endArr.push(arr[i]);
        }
    }
    // using recursion
    return quickSort(startArr).concat(pivot, quickSort(endArr))
}


// The timing function
function measurePerformance() {

    startTime = performance.now()
    console.log(`Algorithm started at: ${startTime} milliseconds`)

    // calling the algorithm function whose performance is measured using template literals
    console.log(`The sorted array is: ${quickSort(arr)}`)

    endTime = performance.now()
    console.log(`Algorithm ended at: ${endTime} milliseconds`)
    

    timeTaken = (Math.round((endTime - startTime))) /1000
    console.log(`Time taken to run: ${timeTaken} seconds`)
}
measurePerformance();

console.log("\n")