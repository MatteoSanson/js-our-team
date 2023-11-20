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


function creaPersona(persona) {
    const divElement = document.createElement('div');
    divElement.classList.add('card');

    const fotoElement = document.createElement('div');
    fotoElement.classList.add('immagine');
    const imgElement = document.createElement('img');
    const nomeElement = document.createElement('h4');
    nomeElement.classList.add('nome');
    const ruoloElement = document.createElement('p');
    ruoloElement.classList.add('ruolo');
    

    nomeElement.textContent = `${persona.nome}`;
    ruoloElement.textContent = `${persona.ruolo}`;

    imgElement.src = `img/${persona.foto}`;
    imgElement.alt = `${persona.nome}`;

    fotoElement.append(imgElement);

    divElement.append(
        fotoElement,
        nomeElement,
        ruoloElement
    );

    return divElement;
}

const mainElement = document.createElement('main');

for (let i = 0; i < lista.length; i++) {
    const persona = lista[i];
    console.log(persona.nome, persona);
    const personaElement = creaPersona(persona);
    mainElement.append(personaElement);
}


document.querySelector('body').append(mainElement);
