function fibs(length) {
    const arr = [0, 1];
    for(let i = 2; i < length; i ++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

const fibsTailRec = (length, arr = [0, 1]) =>
    length <= 2 ? arr : fibsTailRec(length - 1, arr.concat(arr[arr.length - 1] + arr[arr.length - 2]));


const number = 10;

console.log(fibs(number));

console.log(fibsTailRec(number));