/*
Exercise Link: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
*/

//Solution

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    
    let applePos = apples.map(fruit=>{
        return fruit + a;
    });
    
    let orangePos = oranges.map(fruit=>{
        return fruit + b;
    })
    
    
    applePos.map(apple =>{
        if(apple >= s && apple <= t){
            appleCount += 1; 
        }
    });
    
    orangePos.map(orange =>{
        if(orange <= t && orange >= s){
            orangeCount += 1;
        }
    });
    
    console.log(appleCount);
    console.log(orangeCount);

}
