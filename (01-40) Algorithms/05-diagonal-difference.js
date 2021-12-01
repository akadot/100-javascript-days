/*
Link - https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
*/

function diagonalDifference(arr) {
    
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    
    for(let i = 0; i < arr.length; i++){
        for(let j = arr.length - 1; j >= 0; j--){
            if(i == j){
                firstDiagonal += arr[i][j];
            }
        }
        secondDiagonal += arr[i][arr.length - 1 - i];
    }
    
    return Math.abs(firstDiagonal - secondDiagonal);

}
