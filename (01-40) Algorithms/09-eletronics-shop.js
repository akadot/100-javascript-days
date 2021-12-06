/*
Link - https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true
*/

function getMoneySpent(keyboards, drives, b) {
    let count = [];
    
    for(let key of keyboards){
        for(let usb of drives){
            if(key + usb <= b){
                count.push(key + usb)
            }
        }
    }
    if(count.length > 0){
        return Math.max(...count)
    }else{
        return -1
    }

}
