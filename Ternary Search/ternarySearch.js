// Note: Node JS must be installed on your system before this file can be executed
// To execute this file, the command "node {filename}" which in this case is "node ternarySearch"
// must be typed on a terminal of your choice with  it in the file's directory

// Destructing the performance property from the perf_hooks object
const { performance } = require('perf_hooks')

// A random array generator of variable size
function randomArrayGenerator(size) {

    var array = []

    function randomNumber(max) {
        const number = Math.floor((Math.random() * (max))) + 1
        return number
    }
    
    // calling the randomNumber function to generate number up to n in this case n = 100
    // and pushing to the array variable
    for (var i = 0; array.push(randomNumber(100)) < size + 1; i++) {
        if (array.length === size) return array
    }

}

// A sorting algorithm to sort the array generated by the random array generator
// since Binary search works best on sorted data
// Here I used the counting algorithm because it is the most suitable for dealing
// with duplicate elements in an array
function countingSort(arr) {
    return arr.reduce( (acc, v ) => (acc[v] = (acc[v] || 0) + 1, acc), [])
              .reduce((acc, n, i) => acc.concat(Array(n).fill(i)), [])
    
}

function ternarySearch (start, end, key, array) {

    if (end >= start) {

        let middle_1 = Math.floor(start + (end - start) / 3)
        let middle_2 = Math.floor(end - (end - start) / 3)
    
        if (array[middle_1] == key) {
            return middle_1// key was found
        }
        else if (array[middle_2] == key) {
            return middle_2
        }
    
        if (key < array[middle_1]) {
            return ternarySearch(start, middle_1 - 1, key, array)
        }
        else if ( key > array[middle_2]) {
            return ternarySearch(middle_2 + 1, end, key, array)
        }
        else {
            return ternarySearch(middle_1 + 1, middle_2 - 1, key, array)
        }
    }
    return -1 // key was not found
}
// end of ternary Search

console.log("\n") 


// Testing on data

// when the array is unsorted
let array = randomArrayGenerator(750000)

// when the array is sorted
// let sortedArray = countingSort(array)

// the element to be searched for in the sorted and/or unsortedarray
let key = 120

console.log(`For a data size of ${array.length}:`)


// Timimg function for the algorithm
function measurePerformance() {

    // The array of data sizes to be used
    // const size_array = [50000, 100000, 250000, 500000, 750000]

    //  calling the binary search function in a foreach loop to loop across the various sizes
    // and checking the time taken to run th binary search for that size
    // size_array.forEach(size => {

    //     // when the array is unsorted
    //     let array = randomArrayGenerator(size)

    //     // when the array is sorted
    //     let sortedArray = countingSort(array)

    //     // the element to be searched for in the sorted and/or unsortedarray
    //     let key = 70

    //     console.log(`For a data size of ${array.length}:`)

    //     let startTime = performance.now()
    //     console.log(`Algorithm started running at: ${startTime} milliseconds`)

    //     // the variable findKeyIndex when the array is sorted
    //     let findKeyIndex = ternarySearch(0, sortedArray.length - 1, key, sortedArray)

    //     // when the array is unsorted
    //     // let findKeyIndex = ternarySearch(0, array.length - 1, key, array)

    //     if (findKeyIndex !== -1) {
    //         console.log(`The Element: ${key} has been found at position ${findKeyIndex}`)
    //     }
    //     else {
    //         console.log(`The element: ${key} has not been found in the array`)
    //     }

    //     let endTime = performance.now()
    //     console.log(`Algorithm ended at: ${endTime} milliseconds`)

    //     let timeTaken = ((endTime - startTime)) / 1000
    //     console.log(`Time taken to run: ${timeTaken} seconds`)
         
    //     console.log("\n")
    //     console.log("----------------------------------------------------------")

    // })
    let startTime = performance.now()
    console.log(`Algorithm started running at: ${startTime} milliseconds`)

    // the variable findKeyIndex when the array is sorted
    // let findKeyIndex = ternarySearch(0, sortedArray.length - 1, key, sortedArray)

    // when the array is unsorted
    let findKeyIndex = ternarySearch(0, array.length - 1, key, array)

    if (findKeyIndex !== -1) {
        console.log(`The Element: ${key} has been found at position ${findKeyIndex}`)
    }
    else {
        console.log(`The element: ${key} has not been found in the array`)
    }

    let endTime = performance.now()
    console.log(`Algorithm ended at: ${endTime} milliseconds`)

    let timeTaken = ((endTime - startTime)) / 1000
    console.log(`Time taken to run: ${timeTaken} seconds`)
         
    console.log("\n")

}
measurePerformance();

console.log("\n")           
