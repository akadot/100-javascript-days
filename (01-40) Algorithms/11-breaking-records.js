/*
Link - https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
*/

function breakingRecords(scores) {
    let highest = scores[0];
    let lowest = scores[0];
    
    let highCount = 0;
    let lowCount = 0;
    
    for(let i = 0; i <= scores.length; i++){
        if(scores[i] > highest){
            highest = scores[i]
            highCount++
        }
        if(scores[i] < lowest){
            lowest = scores[i]
            lowCount++
        }
    }
    
    
    return [highCount, lowCount]
}
