/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/
function filterArray(arr1,arr2){
    return arr1.filter(item => {
        const haveItem = arr2.find((e) => e == item)
        if(haveItem) return;
    
        return item;
    });
 }

function diffArray(arr1, arr2) {
    return [... filterArray(arr1, arr2), ...filterArray(arr2, arr1) ]
}

// test
diffArray([1, 2, 3, 5, "andrew"], [1, 2, 3, 4, 5]);