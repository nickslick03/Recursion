function mergeSort(arr) {
    if(arr.length < 2) return arr;
    const arr1 = mergeSort(arr.slice(0, arr.length / 2));
    const arr2 = mergeSort(arr.slice(arr.length / 2)); // if arr.length is odd, arr2.length > arr1.length
    const mergeArr = [];
    while(arr1.length > 0 || arr2.length > 0) {
        mergeArr[mergeArr.length] = (arr1.length === 0 || arr2[0] < arr1[0] ? arr2 : arr1).shift();
    }
    return mergeArr;
}

console.log(mergeSort([10, 4, 30, 100, 1, -5, 12, 24, 2, 30005, -100]));