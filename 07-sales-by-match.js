/*
Link - https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true
*/

function sockMerchant(n, ar) {
    let pairsCount = 0;
    let uniquesArr = [...new Set(ar)];
    
    for(let uniques of uniquesArr){
        let count = 0;
        for(let socks of ar){
            if(uniques == socks){
                count++;
            }
        }
        pairsCount += Math.floor(count/2);
        
    } 
    
    return pairsCount;

}
