'use strict';

const lista = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "barbara-ramos-graphic-designer.jpg"
    }
];

console.log("lista team:", lista);

// let wayne = lista[0];
// console.log ((wayne.nome), wayne);

let persona;

for (let i=0; i < lista.length; i++){
    persona = lista[i];
    console.log((persona.nome), persona);
}