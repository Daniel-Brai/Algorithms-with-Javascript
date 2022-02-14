// NAME: BRAI DANIEL OSHOKE, MATRIC NUMBER: 214868, COURSE CODE: CSC 236, DEPARTMENT: COMPUTER SCIENCE
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

console.log("Using the Bucket sort algorithm:")

// Destructing the performance property from the perf_hooks object
const { performance } = require('perf_hooks')

// Bucket sort works by partioning an array in buckets. 
// Each Bucket can take elements from the array in a range
// For example, an array of 200 elements can be split into a bucket count of 2/4/5.
// The algorithm is more efficient as the element are evenly distributed over the bucket ranges
// Taking 2 as the bucket count we have 1-100 and 101-200 as bucket ranges(sizes)
// Individual buckets can be sorted using different algorithm as: insertion sort, quick sort, merge sort etc
// or by using the bucket sort algorithm recursively

// Below I am going to be using the quick sort algorithms for the sorting of the element in the individual buckets
// The Insertion Sort algorithm
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
    return arr
}
// The Bucket sort algorithm
// Here I set the default value of bucketSize to be 5
function bucketSort(arr, bucketSize) {

    // if the array length less than or equal to 1, return the array
    if (arr.length <= 1) return arr
     
    var i
    // Determine the min and max values in the array
    let minValue = arr[0]
    let maxValue = arr[0]

    for (i = 1; i < arr.length; i++) {

        if (arr[i] < minValue) {
            minValue = arr[i]
        }
        else if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }

    // Initialize a default value for Bucket size if not given
    var bucketSize;

    // // Testing whether a bucketSize is given
    bucketSize = bucketSize || 5

    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
    var buckets = new Array(bucketCount)

    for(i = 0; i < buckets.length; i++) {
        buckets[i] = []
    }

    // distrubute the array values into buckets
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) /bucketSize)].push(arr[i])
    }

    // sort buckets and put back into the array
    arr.length = 0
    for (i = 0; i < buckets.length; i++) {
        // calling the quick sort algorithm to sort each individual bucket
        insertionSort(buckets[i])
        
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j])
        }
    }
    return arr
}

// Timimg function for the algorithm
function measurePerformance() {

    let startTime = performance.now()
    console.log(`Algorithm started at: ${startTime} milliseconds`)


    // calling the algorithm function whose performance is measured
    // You can set any value for the bucketSize 
    // For example
    // bucketSize = 4
    // if not set, the default bucket size which is: 5 will be used
    console.log(`The sorted array is: ${bucketSort(arr, bucketSize = 5)}`)

    let endTime = performance.now()
    console.log(`Algorithm ended at: ${endTime} milliseconds`)
    

    let timeTaken = (Math.round((endTime - startTime))) / 1000
    console.log(`Time taken to run: ${timeTaken} seconds`)
}
measurePerformance();

console.log("\n")