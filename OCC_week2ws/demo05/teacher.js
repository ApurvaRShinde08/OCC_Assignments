const Person=require('./person');
class Teacher extends Person{
    constructor(firstName,lastName,subject){
        super(firstName,lastName);
        this.subject=subject;
    }
    display(){
        return super.display()+" "+this.subject;
    }
}
module.exports=Teacher;