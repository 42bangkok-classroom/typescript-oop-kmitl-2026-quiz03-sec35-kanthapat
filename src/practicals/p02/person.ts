export class Person {
    firstname?: string;
    lastname?: string;
    private _age?: number;
    static COUNTRY: string = 'Thailand';

    constructor(firstname?: string, lastname?: string) {
        if(firstname) {
            this.firstname = firstname;
        }
        if(lastname) {
            this.lastname = lastname;
        }
       
    }

    setAge(age:number) {
        return this._age = age;
    }

    getAge() {
        return this._age;
    }

    getFullName() {
        return (`${this.firstname} ${this.lastname}`)
    }
}