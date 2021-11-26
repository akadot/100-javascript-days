/*
Link - https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
*/

function gradingStudents(grades) {
    
    let newGrades = grades.map(grade=>{
        if(grade >= 38){
            if((grade + 2)%5 == 0){
                return grade+2
            }else{
                return grade
            }
        } else{
            return grade
        } 
    })
    
    return newGrades;
}
