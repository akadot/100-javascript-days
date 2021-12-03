/*
Link - https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
*/

function bonAppetit(bill, k, b) {
    
    let anaBills = bill.filter((value, index)=>index !== k);
    
    let anaValue = anaBills.reduce((previous, current)=> previous + current)/2
   
    if(b == anaValue){
        console.log("Bon Appetit");
    }else{
        console.log(b - anaValue);
    }
    

}
