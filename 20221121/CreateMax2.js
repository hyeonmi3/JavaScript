function solution(numbers) {
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(i != j) answer.push(numbers[i] * numbers[j]);
        }
    }

    // answer.sort((a, b) => {
    //     return b - a;
    // });

    // return answer[0];

    return Math.max(...answer)
}