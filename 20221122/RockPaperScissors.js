function solution(rsp) {
    let answer = String(rsp).split('');
    let answer2 = [];

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] == 2) answer2[i] = 0;
        else if (answer[i] == 0) answer2[i] = 5;
        else if (answer[i] == 5) answer2[i] = 2;
    }

    return answer2.join('');
}