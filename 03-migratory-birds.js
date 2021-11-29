/*
Link - https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
*/

function migratoryBirds(arr) {
    
    let hasDoubles = true
    
    let duplicatesFunc = list => list.filter(
        (item,index)=>list.indexOf(item) !== index);
    
    let hasDoubleFunc = list => list.some((val, i) => arr.indexOf(val) !== i)
    
    while (hasDoubles === true){
        arr = duplicatesFunc(arr);
        hasDoubles = hasDoubleFunc(arr);
    }    
    
    let lowestValue = Math.min(...arr)
    
    return lowestValue
}
