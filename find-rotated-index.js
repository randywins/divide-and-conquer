//accepts a rotated array of sorted numbers and 
//an integer, this fucntion retunrs the index of num in the array
function findRotatedIndex(arr, num) {
    var rotate = findRotate(arr)
    if (rotate > 0 && num >= arr[0] && num <= arr[rotate - 1]) {
        return binarySearch(arr, num, 0, rotate -1);
    } else {
        return binarySearch(arr, num, rotate, arr.length - 1);
    }
}

//this is a binary search array
function binarySearch(arr, num, start, end) {
    if(arr.length === 0) 
        return -1;
    if(num < arr[start] || num > arr[end])
        return -1;

    while (start <= end) {
        var middleIdx = Math.floor((start + end) / 2);
        if (arr[middleIdx] === num) {
            return middleIdx;
        } else if (num < arr[middleIdx]) {
            end = middleIdx - 1;
        } else {
            start = middleIdx + 1;
        }
    }
    return -1;
}

//this function finds the pivote in the array
function findRotate(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) 
        return 0;
    var start = 0
    var end = arr.length - 1;
    while (start <= end) {
        var middleIdx = Math.floor((start + end) / 2);
        if (arr[middleIdx] > arr[middleIdx + 1])
            return mid + 1
        else if (arr[start] <= arr[mid]) {
            start = middleIdx + 1
        } else {
            end = middleIdx - 1
        }
    }
}

module.exports = findRotatedIndex