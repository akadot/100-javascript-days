/*
Link - https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true
*/

function findDigits(n) {
    let digits = String(n)
    .split("")
    .map(value => Number(value));
    
    let count = 0;
    
    for(let values of digits){
        if(n%values == 0){
            count++;
        }
    }
    
    return count;

}
