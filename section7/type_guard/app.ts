export { };

// Type guards narrow down the type of a variable within a conditional block.

// `typeof`
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error("Invalid arguments. Both arguments must be either numbers or strings.");

}

// `instanceof`
class Customer {
    constructor() {

    }

    isCreditAllowed(): boolean {
        return true;
    }
}

class Supplier {
    constructor() {

    }

    isInShortList(): boolean {

        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
    let message: string = '';

    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    return message;
}

// `in`
function signContractIn(partner: BusinessPartner): string {
    let message: string;

    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        message = partner.isInShortList() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    return message;
}

// User-defined Type Guards
function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
}

function signContractIs(partner: BusinessPartner): string {
    let message: string;

    if (isCustomer(partner)) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        message = partner.isInShortList() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    return message;
}