//accepts a sorted array and a value 
//x and returns the floor of x in the array
function findFloor(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
    if (leftIdx > rightIdx)
        return -1;
    if (num >= arr[rightIdx]) 
        return arr[rightIdx];

    let middleIdx = Math.floor((leftIdx + rightIdx) / 2)

    if(arr[middleIdx] === num) 
        return arr[middleIdx];

    if(middleIdx > 0 && arr[mid - 1] <= num && num < arr[middleIdx]) {
        return arr[middleIdx - 1];
    }

    if (num < arr[middleIdx]) {
        return findFloor(arr, num, leftIdx, middleIdx - 1);
    }

    return findFloor(arr, num, middleIdx + 1, rightIdx)
}

module.exports = findFloor