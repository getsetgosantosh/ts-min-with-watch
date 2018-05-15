export class Greeter {
    private greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    public greet(): string {
        return `Bonjour, ${this.greeting}!`;
    }

    public meet(): string {
        console.log('this is meeting functon');
        return '';
    }

    public ghanta() {
        console.log('gjanta');
    }
}
