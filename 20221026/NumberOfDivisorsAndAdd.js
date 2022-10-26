function solution(left, right) {
    // let result = 0;

    // for (let i = left; i <= right; i++) {
    //     let arr = [];
    //     for (let j = 0; j <= i; j++) {
    //         if (i % j === 0) arr.push(j);
    //     }
    //     arr.length % 2 === 0 ? result += i : result -= i;
    // }

    // return result;

    // 다른 정답 와 대박 어떻게 이런 생각을
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;

}