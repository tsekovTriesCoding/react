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

let person: {
    name: string,
    age: number
};

person = {
    name: "Max",
    age: 32
}

let people: {
    name: string,
    age: number
}[];

// Type inference
let course = 'React - The Complete Guide';
// course = 1 - we will get an error!

// Union types
let courseUnion: string | number = 'React - The Complete Guide';
courseUnion = 1;
// here there is no error!
