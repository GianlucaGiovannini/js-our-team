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
    BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
    trasformare la stringa foto in una immagine effettiva
    BONUS 2 (solo se non sei giá fuso):
    organizzare i singoli membri in card/schede
*/


// selezionare l'elemento della dom dove voglio stampare le informazioni
const userRowElement = document.querySelector(".row")
    //console.log(userRowElement)

for (let i = 0; i < team.length; i++) {
    const teamElement = team[i];
    // crea degli elementi della dom per ogni singolo utente 
    const userCardElement = `
<div class="col">
    <div class="card border-0">
        <div class="top_card">
            <img class="img-fluid" src="./assets/img/${teamElement.image}" alt="dipendente team">
        </div>
        <!-- /.top_card -->
        <div class="bottom_card d-flex flex-column align-items-center">
            <div class="role mt-2 text-center">
                <h5>
                    ${teamElement.role}
                </h5>
            </div>
            <div class="name text-center">
                <h6>
                    ${teamElement.name}
                </h6>
            </div>
        </div>
        <!-- /.bottom_card -->
    </div>
    <!-- /.card -->
</div>
<!-- /.col -->
`;
    // console.log(userCardElement)
    userRowElement.insertAdjacentHTML("beforeend", userCardElement);
    // ad ogni giro deve stampare a schermo le info di ogni singolo teamElement
};