//this function counts how many times a number occurs in the array
function sortedFrequency(arr, num) {
    let first = findFirstNum(arr, num);
    if (first == -1) 
        return first;
    let last = findLastNum(arr, num);
    return last - first + 1;
}

//finds first number that repeats
function findFirstNum(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        if ((middleIdx === 0 || num > arr[middleIdx - 1]) && arr[middleIdx] === num) {
            return middleIdx;
        } else if (num > arr[middleIdx]) {
            return findFirstNum(arr, num, middleIdx + 1, rightIdx)
        } else {
            return findFirstNum(arr, num, leftIdx, middleIdx - 1)
        }
    }
    return -1;
}

//finds the last number that repeats
function findLastNum(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        if ((middleIdx === arr.length - 1 || num < arr[middleIdx + 1]) && arr[middleIdx] === num) {
            return middleIdx;
        } else if (num < arr[middleIdx]) {
            return findLastNum(arr, num, leftIdx, middleIdx - 1)
        } else {
            return findLastNum(arr, num, middleIdx + 1, rightIdx)
        }
    }
    return -1;
}



module.exports = sortedFrequency