function solution(a, b) {
    let num = 0;
    if (a >= b) {
        for (let i = b; i <= a; i++) {
            num += i;
        }
    } else {
        for (let j = a; j <= b; j++) {
            num += j;
        }
    }
    return num;
}