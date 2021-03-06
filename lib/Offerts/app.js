const offerts = [
    new Offert({
        id: 1,
        teamIcon: './img/teamPixel.jpeg',
        title: 'Jugador de fornite para Las Palmas',
        description: 'Descripcion de prueba de oferta guardada por un usuario',
        team_id: 3567,
        game: 'lol',
        date: 'July 7',
        teamName: 'Team Pixel'
    }),
    new Offert({
        id: 2,
        teamIcon: './img/teamPixel.jpeg',
        title: 'Jugador de fornite para Las Palmas',
        description: 'Descripcion de prueba de oferta guardada por un usuario',
        team_id: 3567,
        game: 'pokemon',
        date: 'July 7',
        teamName: 'Team Pixel'
    }),
    new Offert({
        id: 3,
        teamIcon: './img/teamPixel.jpeg',
        title: 'Gamer de fornite para Las Palmas',
        description: 'Descripcion de prueba de oferta guardada por un usuario',
        team_id: 3567,
        game: 'pokemon',
        date: 'July 7',
        teamName: 'Team Pixel'
    }),
    new Offert({
        id: 4,
        teamIcon: './img/teamPixel.jpeg',
        title: 'Jugador de fornite para Las Palmas',
        description: 'Descripcion de prueba de oferta guardada por un usuario',
        team_id: 3567,
        game: 'csgo',
        date: 'July 7',
        teamName: 'Taim Pixel'
    })
];
let filterOfferts;
const OffertsListElement = document.getElementById('offerts-list');
const printOfferts = () => offerts.forEach((e) => {OffertsListElement.innerHTML += e.getOffertWithLink();});

printOfferts();

const saveOffert = (id) => {
    const img = document.getElementById(`save-${id}`);
    offerts.forEach((e) => {
        if (e.isSaved && id === e.id) {
            img.src = './img/guardar.svg';
            e.isSaved = false;
        } else if (id === e.id) {
            img.src = './img/guardado.svg';
            e.isSaved = true;
        }
    });
}

const input_search = document.getElementById('search');
input_search.addEventListener('keyup', () => {
    OffertsListElement.innerHTML = '';
    input_search.value === '' ? printOfferts() : filterByText();
})

const filtrar = (element, text) => {
    let res = false;
    text.split(' ').forEach((word) => {
        if (element.title.toLocaleLowerCase().split(' ').includes(word) ||
            element.teamName.toLocaleLowerCase().split(' ').includes(word) ||
            element.description.toLocaleLowerCase().split(' ').includes(word)
        ) res = true;
    })
    return res;
}

const filterByText = () => {
    const text = document.getElementById('search');
    let filterOfferts = [];
    filterOfferts = offerts.filter((e) => filtrar(e, text.value.toLocaleLowerCase()))
    filterOfferts.forEach((e, i) => {
        OffertsListElement.innerHTML += filterOfferts[i].getOffertWithLink();
    })
}