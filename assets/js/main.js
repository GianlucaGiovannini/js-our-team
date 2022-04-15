/*  TRACCIA
    Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
    Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

    MILESTONE 1
    stampare su console le informazioni di nome, ruolo e la stringa della foto
    
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
/* 
    for (let i = 0; i < team.length; i++) {
        const teamElement = team[i];

        // console.log(teamElement)
        // console.log(`Nome: ${teamElement.name}`)
        // console.log(`Ruolo: ${teamElement.role}`)
        // console.log(`Foto: ${teamElement.image}`)
    } 
*/



/* MILESTONE 2
    stampare le stesse informazioni su DOM sottoforma di stringhe
    BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
    trasformare la stringa foto in una immagine effettiva
    BONUS 2 (solo se non sei giá fuso):
    organizzare i singoli membri in card/schede
*/

/*  SENZA FUNZIONI 

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
*/

/* CON FUNZIONE*/

/**
 * ## generatore di team card nella dom 
 * @param {array} array_object array di oggetti da stampare 
 * @param {string} css_selector  selettore della dom
 */
function createTeamElementDom(array_object, css_selector) {
    // selezionare l'elemento della dom dove voglio stampare le informazioni
    const userRowElement = document.querySelector(css_selector);
    //pulire l'elemento quando lo si rigenera
    userRowElement.innerHTML = ""
        //console.log(userRowElement)
    for (let i = 0; i < array_object.length; i++) {
        const teamElement = array_object[i];

        const userCardElement = generateMemberMarkup(teamElement)

        userRowElement.insertAdjacentHTML("beforeend", userCardElement);

    };
}

function generateMemberMarkup(member_object) {
    return `<div class="col">
    <div class="card border-0">
        <div class="top_card">
            <img class="img-fluid" src="./assets/img/${member_object.image}" alt="dipendente team">
        </div>
        <!-- /.top_card -->
        <div class="bottom_card d-flex flex-column align-items-center">
            <div class="role mt-2 text-center">
                <h5>
                    ${member_object.role}
                </h5>
            </div>
            <div class="name text-center">
                <h6>
                    ${member_object.name}
                </h6>
            </div>
        </div>
        <!-- /.bottom_card -->
    </div>
    <!-- /.card -->
</div>
<!-- /.col -->
`
}


createTeamElementDom(team, ".row")



/* BONUS NASCOSTO */
// selezionare il form

const formElement = document.querySelector('form');
// aggiungi event listener
formElement.addEventListener('submit', function(event) {
    // previenire refresh della pagina
    event.preventDefault()
        // prendere i valori dei campi compixlati
    console.log(event);


    // prendere il valore dei campi compilati
    const name = event.target.name.value
    const role = event.target.role.value
    const image = event.target.image.value
        // usare i valori presi sopra per creare un nuovo oggetto
    const newMember = {
        name,
        role,
        image
    }

    console.log(newMember);

    // pushare il nuovo oggetto nell'area team
    team.push(newMember)
    console.log(team)

    // rigenerare le card con i membri 
    createTeamElementDom(team, ".row")

    // ripulire gli input prima dell'invio di un form
    document.getElementById("name").value = ""
    document.getElementById("role").value = ""
    document.getElementById("image").value = ""

    // impedire all'utente di inviare form senza compilare i campi tramite required negli input dell'html

    // mostra un allerta che scomprare dopo 2 secondi

    const form_alert = document.querySelector(".alert")
    form_alert.style.display = "block";
    form_alert.innerHTML = `Hai inserito ${name} con successo`;
    // crea un setTimout per far sparire il pop up generato
    setTimeout(() => {
        form_alert.style.display = "none";
    }, 4000)
})






/* SOLUZIONE FABIO 

    //MILESTONE 1
    for (let i = 0; i < team.length; i++) {
        const member = team[i];
        // console.log(member.name, member.role, member.image)
        // const member_name = member.name
        // const member_role = member.role
        // const member_image = member.image
        // console.log(member_name, member_role, member_image)

        for (const key in member) {
            console.log(`${key}: ${member[key]}`)
        }

    } 

    // MILESTONE 2
    for (let i = 0; i < team.length; i++) {
        const member = team[i];
        const memberMarkup = const userCardElement = `
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
        userRowElement.insertAdjacentHTML("beforeend", memberMarkup)
    }
*/