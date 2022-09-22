function solution(s){
    let pCnt = 0, yCnt = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] == 'y' || s[i] == 'Y') yCnt++;
        else if(s[i] == 'p' || s[i] == 'P') pCnt++;
    } return yCnt == pCnt ? true : false;
}