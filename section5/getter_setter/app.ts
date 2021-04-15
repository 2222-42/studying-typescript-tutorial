export { };

class Person {
    private _age!: number;
    private _firstName!: string;
    private _lastName!: string;

    // Use TypeScript getters/setters to control the access properties of a class.
    // The getter/setters are also known as accessors/mutators.

    /**
     * get age
     */
    // A getter method returns the value of the property’s value. A getter is also called an accessor
    public get age() {
        return this._age;
    }

    /**
     * set age
     */
    // A setter method updates the property’s value. A setter is also known as a mutator.
    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error("The age is invalid");
        }
        this._age = theAge;
    }


    public get firstName() {
        return this._firstName;
    }

    public set firstName(v: string) {
        this._firstName = v;
    }


    public get lastName() {
        return this._lastName;
    }

    public set lastName(v: string) {
        this._lastName = v;
    }

    /**
     * getFullName
     */
    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }


    public get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    public set fullName(name: string) {
        let parts = name.split(' ');
        if (parts.length != 2) {
            throw new Error("Invalid name format: first last");
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }


}

let person = new Person();
// person.age = 0;
person.age = 10;
console.log(person.age);
person.firstName = '42';
person.lastName = 'kuroku';
console.log(person.getFullName());

person.fullName = 'Shijuuni Kuroku';
console.log(person.fullName);