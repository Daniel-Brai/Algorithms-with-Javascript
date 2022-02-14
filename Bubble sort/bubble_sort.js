console.log("\n")

// Random n-length array Generator
let arrLength = 10;

var arr = [];

while (arr.length < arrLength) {
    var arrValue = Math.floor(Math.random() * arrLength) + 1

    if (arr.indexOf(arrValue) === -1) arr.push(arrValue)
}
console.log(`The array of ${arrLength} unsorted numbers is: ${arr}`)

console.log("Using the Bubble sort algorithm:")

// Destructing the performance property from the perf_hooks module
const { performance } = require('perf_hooks')


// The Bubble sort algorithm
function bubbleSort(arr) {
    
    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < (arr.length -i - 1); j++) {

            if (arr[j] > arr[j + 1]) {

                // swapping 
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }  
    console.log(`The sorted array is: ${arr}`);
}

// Timimg function for the algorithm
function measurePerformance() {

    let startTime = performance.now()
    console.log(`Algorithm started at: ${startTime} milliseconds`)


    // calling the algorithm function whose performance is measured
    bubbleSort(arr)

    let endTime = performance.now()
    console.log(`Algorithm ended at: ${endTime} milliseconds`)
    

    let timeTaken = Math.round((endTime - startTime))
    console.log(`Time taken to run: ${timeTaken} milliseconds`)
}
measurePerformance();

console.log("\n")


