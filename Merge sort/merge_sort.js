// NAME: BRAI DANIEL OSHOKE, MATRIC NUMBER: 214868, COURSE CODE: CSC 236, DEPARTMENT: COMPUTER SCIENCE
// NOTE: Node JS must be installed on your system before this file can be executed
console.log("\n")

// Random n-length array generator
let arrLength = 50000;

var arr = [];

while (arr.length < arrLength) {
    var arrValue = Math.floor(Math.random() * arrLength) + 1

    if (arr.indexOf(arrValue) === -1) arr.push(arrValue)
}
console.log(`The array of ${arrLength} unsorted numbers is: ${arr}`)


console.log("Using the Merge sort algorithm:")

// Destructing the performance property from the perf_hooks module
const { performance } = require('perf_hooks')


// The Merge sort algorithm
function mergeSort(arr) {

    if (arr.length <=1) return arr

    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid))

    // Setting up a function for the Partition of the generated array
    function merge(left, right) {

        let sortedArr = []

        while (left.length && right.length) {

            if (left[0] < right[0]) {
                sortedArr.push(left.shift())
            }
            else sortedArr.push(right.shift())
        }
        return sortedArr.concat(left.slice().concat(right.slice()))
    }
    return merge(left, right)
}
console.log(`The sorted array is : ${mergeSort(arr)}`)

// The timing function
function measurePerformance() {

    let startTime = performance.now()
    console.log(`Algorithm started at: ${startTime} milliseconds`)

    // calling the algorithm function whose performance is measured
    mergeSort(arr)

    let endTime = performance.now()
    console.log(`Algorithm ended at: ${endTime} milliseconds`)
    
    let timeTaken = (Math.round((endTime - startTime))) / 1000;
    console.log(`Time taken to run: ${timeTaken} seconds`)
}
measurePerformance();

console.log("\n")