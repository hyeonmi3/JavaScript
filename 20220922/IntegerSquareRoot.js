function solution(n) {
    // Math.sqrt() => 제곱근을 구해주는 math메소드
    let num = Math.sqrt(n);
    if(num % 1 === 0 ) return (num+1) * (num+1)
    else return -1
}