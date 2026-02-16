export class Person {
    firstname?: string;
    lastname?: string;
    private _age?: number;
    static COUNTRY: string = 'Thailand';

    constructor(firstname?: string, lastname?: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    setAge(age:number) {
        return this._age = age;
    }

    getAge() {
        console.log(this._age);
    }

    getFullName() {
        console.log(`${this.firstname} ${this.lastname}`)
    }
}