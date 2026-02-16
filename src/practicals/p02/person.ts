export class Person {
    firstname?: string;
    lastname?: string;
    private _age = 0;
    static COUNTRY: string = 'Thailand';

    constructor(firstname?: string, lastname?: string) {
        if(firstname) {
            this.firstname = firstname;
        }
        if(lastname) {
            this.lastname = lastname;
        }
       
    }

    set setAge(x:number) {
        this._age = x;
    }

    get getAge() {
        return this._age
    }

    getFullName() {
        return (`${this.firstname} ${this.lastname}`)
    }
}