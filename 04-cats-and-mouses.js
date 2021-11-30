/*
Link - https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true
*/

function catAndMouse(x, y, z) {
    if(Math.abs(x - z) < Math.abs(y - z)){
        return "Cat A"
    }else if(Math.abs(x - z) > Math.abs(y - z)){
        return "Cat B"
    }else if(Math.abs(x - z) == Math.abs(y - z)){
        return "Mouse C"
    }

}
