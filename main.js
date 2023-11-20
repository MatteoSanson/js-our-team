'use strict';

const lista = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];

console.log("lista team:", lista);

// let wayne = lista[0];
// console.log ((wayne.nome), wayne);

// let persona;


// for (let i=0; i < lista.length; i++){
//     persona = lista[i];
//     console.log((persona.nome), persona);
//     const divElement = document.createElement('div');
//     divElement.textContent = persona.nome + " - " + persona.ruolo+ " - "  + persona.foto;
//     document.body.append(divElement);
// }

function creaPersona(persona) {
    const divElement = document.createElement('div');
    divElement.innerHTML = `
        <p>Nome: ${persona.nome}</p>
        <p>Ruolo: ${persona.ruolo}</p>
        <p>Foto: ${persona.foto}</p>
        <br>
    `;
    return divElement;
}

const containerElement = document.createElement('div');

for (let i = 0; i < lista.length; i++) {
    const persona = lista[i];
    console.log(persona.nome, persona);
    const personaElement = creaPersona(persona);
    containerElement.appendChild(personaElement);
}

document.body.append(containerElement);



