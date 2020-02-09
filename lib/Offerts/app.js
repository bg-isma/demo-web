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
        if (e.isSaved) {
            img.src = './img/guardar.svg';
            e.isSaved = false;
        } else {
            img.src = './img/guardado.svg';
            e.isSaved = true;
        }
    });
}

document.getElementById('search').addEventListener('keydown', () => {
    if (document.getElementById('search').value === '') {
        printOfferts();
    } else {
        filter();
    }
})

const filterByText = () => {
    const text = document.getElementById('search').value;
    filterOfferts = [...(offerts.filter((e, i) => e.title.includes(text) || e.teamName.includes(text)))]
    OffertsListElement.innerHTML = '';
    filterOfferts.forEach((e, i) => {
        OffertsListElement.innerHTML += filterOfferts[i].getOffertWithLink();
    })
}