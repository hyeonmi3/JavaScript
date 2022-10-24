function solution(s) {
    let result = 0;

    if(s.length === 4 || s.length === 6) {
        for(let i = 0; i < s.length; i++) {
            if(isNaN(s[i])) {
                result = false;
                break;
            } else {
                result = true;
            }
        }
    } else {
        result = false;
    }

    return result;
}