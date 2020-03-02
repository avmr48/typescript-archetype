class Human {
    says(something: string): string {
        return 'Human says: ' + something;
    }
}

console.log(new Human().says('hello world!'));
