function solution(phone_number) {
    let answer = "*".repeat(s.length - 4);

    // for(let i = 1; i <= phone_number.length - 4; i++) {
    //     answer += '*';
    // }

    let number = phone_number.slice(-4);

    return answer + number;
}