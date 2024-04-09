//counts number of zeroes in array
function countZeroes(arr) {

    let firstZeroIndex = findFirstZero(arr)
    if(firstZeroIndex === -1) 
        return 0;
    return arr.length - firstZeroIndex
}

//iterate through array to find first zero
function findFirstZero(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2)
        if ((middleIdx === 0 || arr[middleIdx - 1] === 1) && arr[middleIdx] === 0) {
            return middleIdx;
        } else if (arr[mid] === 1) {
            return findFirstZero(arr, middleIdx + 1, rightIdx)
        }
        return findFirstZero(arr, leftIdx, middleIdx -1)
    }
    return -1;
}

module.exports = countZeroes