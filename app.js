const person = {
    name: "John Doe",
    age: 30,    
    friends : ["Jane", "Doe", "Smith"],
    status: true
};

const personJSON = JSON.stringify(person);
console.log(personJSON);

const personParsed = JSON.parse(personJSON);
console.log(personParsed);