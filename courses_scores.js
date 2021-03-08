'use strict' ;

function Exam(code, name, cfu, score, honors, datePassed) {
    this.code = code ;
    this.name = name ;
    this.cfu = cfu ;
    this.score = score ;
    this.honors = honors ;
    this.datePassed = datePassed ;
}

function ExamList() {
    this.exams = [] ;
    
    this.add = (exam) => {
        this.exams.push(exam);
    };

    this.find = (courseCode) => {

        const result = this.exams.filter(ex => ex.code===courseCode) ;
        if (result.length===1)
            return result[0];
        else 
            return undefined ;
        return result && result[0] ; // []

    }
}


const wa1 = new Exam('01FXY', 'Web Applications I', 6, 28, false, '2021-02-10') ;
const db = new Exam('01ANC', 'Data Science and Stuff', 8, 25, false, '2021-02-11') ;

console.log(wa1) ;
console.log(db) ;

const myExams = new ExamList() ;
myExams.add(wa1);
myExams.add(db);
// myExams.exams.push(wa1); // possible, but not recommended
myExams = "hello" ;

debugger ;