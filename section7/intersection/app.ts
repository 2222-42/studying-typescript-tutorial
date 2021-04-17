export { };

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

// An intersection type combines two or more types to create a new type that has all properties of the existing types.
type Employee = Identity & Contact & BusinessPartner;
type Customer = BusinessPartner & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000,
};

let c: Customer = {
    name: 'ABC inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
}

// The type order is not important when you combine types.
type CustomerInverse = Contact & BusinessPartner;
let ci: CustomerInverse = {
    name: 'ABC inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
}