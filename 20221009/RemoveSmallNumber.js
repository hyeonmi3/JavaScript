function solution(arr) {
    let i = 0;

    if (arr.length === 1) return [-1];
    for (let j = 0; j < arr.length; j += 1) {
        if (arr[i] > arr[j]) i = j;
    }
    arr.splice(i, 1);
    
    return arr;
}