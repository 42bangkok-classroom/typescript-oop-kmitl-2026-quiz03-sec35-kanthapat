export class Person {
    firstname?: string;
    lastname?: string;
    private age = 0;
    static COUNTRY: string = 'Thailand';

    constructor(firstname?: string, lastname?: string) {
        if(firstname) {
            this.firstname = firstname;
        }
        if(lastname) {
            this.lastname = lastname;
        }
       
    }

    private setAge(x:number) {
        this.age = x;
    }

    private getAge() {
        return this.age
    }

    getFullName() {
        return (`${this.firstname} ${this.lastname}`)
    }
}