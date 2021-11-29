/*
Link - https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
*/

function migratoryBirds(arr) {
    
    //Using .filter to find duplicates
    let duplicatesFunc = list => list.filter(
        //If the index of first occurrence is not equal than the actual index, means the value is repeated
        (item,index)=>list.indexOf(item) !== index);
    
    //Repeating the function 2 times to get the most repeated values
    let mostDuplicates = duplicatesFunc(duplicatesFunc(arr))
    
    //Using Math.min to find the smallest value (the rest operator extract values because Math.min only accepts numbers)
    let lowestValue = Math.min(...mostDuplicates)
    
    return lowestValue
}
