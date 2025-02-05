// Opgave 3: Dynamic html content
const person = {
    navn: "Mohamed",
    alder: 96,
    by: "København",
    erhverv: "dev",
    Hobbies: ["fodbold", "run", "code"],
    gift: false,
    pet: {
        name: "max",
        type: "dog"
    }
};

// Find container fra HTML
const container = document.querySelector(".container");

// Opret en ny div for person-info
const personDiv = document.createElement("div");
personDiv.classList.add("person");

// use innerHTML to add some content to the div
personDiv.innerHTML = `
    <h2>Navn: ${person.navn}</h2>
    <p>Alder: ${person.alder}</p>
    <p>By: ${person.by}</p>
    <p>Erhverv: ${person.erhverv}</p>
    <p>Hobbyer: ${person.Hobbies.join(", ")}</p>
    <p>Gift: ${person.gift ? "Ja" : "Nej"}</p>
    <p>Husdyr: ${person.pet.name} (${person.pet.type})</p>
`;

container.appendChild(personDiv);




// Array af studerende
let students = [
    { name: "Sofie", age: 25, course: "Webudvikler" },
    { name: "Lukas", age: 22, course: "Mediegrafiker" },
    { name: "Emil", age: 28, course: "Teknisk designer" },
];

// Hent <div> fra HTML
let elev = document.querySelector(".students-container");

// Tilføj info
students.forEach((student) => {
    let studentInfo = document.createElement("p");
    studentInfo.textContent = `${student.name}, ${student.age} år gammel, studerer ${student.course}.`;
    
    // Tilføj <p>-elementet til containeren
    elev.appendChild(studentInfo);
});

