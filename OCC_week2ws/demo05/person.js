class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    display(){
        return this.firstName+" "+this.lastName;
    }
}


module.exports=Person;