export class Person {
    firstname?: string;
    lastname?: string;
    age: number = 0;
    static COUNTRY: string = 'Thailand';

    constructor(firstname?: string, lastname?: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    setAge(age:number) {
        this.age = age;
    }

    getAge() {
        console.log(this.age);
    }

    getFullName() {
        console.log(`${this.firstname} ${this.lastname}`)
    }
}