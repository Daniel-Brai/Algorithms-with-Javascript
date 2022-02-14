// NAME: BRAI DANIEL OSHOKE, MATRIC NUMBER: 214868, COURSE CODE: CSC 236, DEPARTMENT: COMPUTER SCIENCE
// NOTE: Node JS must be installed on your system before this file can be executed
console.log("\n")

// Random n-length array Generator
let arrLength = 10;

var arr = [];

while (arr.length < arrLength) {
    var arrValue = Math.floor(Math.random() * arrLength) + 1

    if (arr.indexOf(arrValue) === -1) arr.push(arrValue)
}
console.log(`The array of ${arrLength} unsorted numbers is: ${arr}`)

console.log("Using the Insertion sort algorithm:")

// Destructing the performance property from the perf_hooks object
const { performance } = require('perf_hooks')

// The Insertion Sort works the way you can sort playin cards in your hand.
// By shofting elements one by one and inserting the right element at the right position
// It is appropriate for small data sets or when adding to already sorted data
// For the Insertion sort algorithm 
function insertionSort(arr) {

    for (let i =1; i < arr.length; i++) {

        let j = i -1
        let temp = arr[i]

        while (j >= 0 && arr[j] > temp) {

            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
    console.log(`The sorted array is: ${arr}`)
}

// Timimg function for the algorithm
function measurePerformance() {

    let startTime = performance.now()
    console.log(`Algorithm started at: ${startTime} milliseconds`)

    // calling the algorithm function whose performance is measured
    insertionSort(arr)

    let endTime = performance.now()
    console.log(`Algorithm ended at: ${endTime} milliseconds`)

    let timeTaken = Math.round((endTime - startTime))
    console.log(`Time taken to run: ${timeTaken} milliseconds`)
}
measurePerformance();

console.log("\n")