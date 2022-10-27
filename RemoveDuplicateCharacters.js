function solution(my_string) {
    // let newStr = '';

    // for(let i = 0; i < my_string.length; i++) {
    //     if(my_string.indexOf(my_string[i]) === i) newStr += my_string[i];
    // }

    // return newStr;

    return [...new Set(my_string)].join('');
}