//Primitives

let age: number;
age = 2;

let username: string;
username = 'John';

let isInstructor: boolean;
isInstructor = true;

//More complex types

let hobbies: string[];

hobbies = ['Sprots', 'Cooking'];

type Person = {
    name: string,
    age: number
};

let person: Person;

person = {
    name: "Max",
    age: 32
}

let people: Person[];

// Type inference
let course = 'React - The Complete Guide';
// course = 1 - we will get an error!

// Union types
let courseUnion: string | number = 'React - The Complete Guide';
courseUnion = 1;
// here there is no error!

// Functions & Types

function add(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, 0); // [0, 1, 2, 3]