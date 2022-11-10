function solution(order) {
    let answer = String(order).split('').join('');
    let cnt = 0;

    for(let i = 0; i < answer.length; i++) {
        answer[i] == 0 ? 0 : answer[i] % 3 == 0 ? cnt++ : 0;
    }

    return cnt;
}