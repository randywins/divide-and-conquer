//this function accepts an array of distinct numbers
//sorted in increasing order and finds the value of n in rotated array
function findRotationCount(arr, low = 0, high = arr.length - 1) {
    if (high < low)
        return 0;
    if (high === low)
        return low;
    let middleIdx = Math.floor((low + high) / 2)

    //checks if mid + 1 is the min element
    if (middleIdx < high && arr[middleIdx + 1] < arr[middleIdx])
        return middleIdx + 1;

    //checks if mid its self is the minimum element
    if(middleIdx > low && arr[middleIdx] < arr[middleIdx - 1]) {
        return middleIdx;
    }

    //checks if we need to look at the left or right half
    if (arr[high] > arr[mid]) {
        return findRotationCount(arr, low, middleIdx - 1);
    }

    return findRotationCount(arr, middleIdx + 1, high);
}

module.exports = findRotationCount