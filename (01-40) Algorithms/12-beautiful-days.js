/*
Link - https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true
*/

function beautifulDays(i, j, k) {
    
    let beautifulDays = 0
    
    for(let day = i; day<= j; day++){
        
        let reverse = Number(day.toString().split("").reverse().join(""));
        let sum = Math.abs(day - reverse);
        
        if(sum%k == 0){
            beautifulDays++;
        }
    }

    return beautifulDays;
}
