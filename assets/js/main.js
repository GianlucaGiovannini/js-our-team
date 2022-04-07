/* 
    Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
    Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
    
    
    MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
    stampare le stesse informazioni su DOM sottoforma di stringhe
    BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
    trasformare la stringa foto in una immagine effettiva
    BONUS 2 (solo se non sei giá fuso):
    organizzare i singoli membri in card/schede
*/


const team = [{
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

/* MILESTONE 1
    stampare su console le informazioni di nome, ruolo e la stringa della foto
*/
// stampare ogni singolo oggetto dell'array di oggetti tramite un ciclo
for (let i = 0; i < team.length; i++) {
    const teamElement = team[i];

    console.log(teamElement)
    console.log(`Nome: ${teamElement.name}`)
    console.log(`Ruolo: ${teamElement.role}`)
    console.log(`Foto: ${teamElement.image}`)

}


/* MILESTONE 2
    stampare le stesse informazioni su DOM sottoforma di stringhe
*/
// selezionare gli elementi della dom dove voglio stampare le informazioni