export { };

interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}

// An interface can extend one or multiple existing interfaces.
interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

class Mail implements FutureMailable {
    send(email: string): boolean {
        console.log(`Sent email to ${email}.`)
        return true;
    }

    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`)
        return true;
    }

    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`)
        return true;
    }
}

// An interface also can extend a class. 
// If the class contains private or protected members, the interface can only be implemented by the class or subclasses of that class.
class Control {
    private state: boolean | undefined;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control {
}

// - error TS2420: Class 'Chart' incorrectly implements interface 'StatefulControl'.
//   Property 'state' is missing in type 'Chart' but required in type 'StatefulControl'.
// class Chart implements StatefulControl {
//     enable() { }
// }