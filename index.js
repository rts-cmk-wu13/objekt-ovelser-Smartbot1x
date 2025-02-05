// opgave 1
const person = {
    navn: "Mohamed",
    alder: 96,
    by: "København",
    erhverv: "dev",
    Hobbies: ["fodbold", "run","jimmy"] 
};

// med dot notation
console.log(person.navn);
console.log(person.alder);

//  med bracket notation
console.log(person["by"]);
console.log(person["erhverv"]);



// Opgave 2: booleans, arrays og nestede objekter
const alias = {
    navn: "Mohamed",
    alder: 96,
    by: "København",
    erhverv: "dev",
    // Array
    Hobbies: ["fodbold", "run", "jimmy"], 
    // Boolean
    gift: false, 
    // Nested objekt
    pet: {      
        name: "Max",
        type: "dog"
    }
};

// Udskriv værdier fra array med en løkke
alias.Hobbies.forEach((hobby) => {
    console.log(hobby); 
    // Udskriver hobby
});

// Udskriv værdier fra det nestede objekt
console.log(`Pet's Name: ${alias.pet.name}`);
console.log(`Pet's Type: ${alias.pet.type}`);

