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
        title: 'Jugador de fornite para Las Palmas',
        description: 'Descripcion de prueba de oferta guardada por un usuario',
        team_id: 3567,
        game: 'csgo',
        date: 'July 7',
        teamName: 'Team Pixel'
    })
];
const notifications = [
    new Notification({
        id: 1,
        icon: './img/tick.svg',
        title: 'Pixel Grande a acceptado tu solicitud',
        date: 'July 7',
        user_id: 3456,
        type: 'accept'
    }),
    new Notification({
        id: 2,
        icon: './img/ojo.svg',
        title: 'Team Pixel a visto tu perfil',
        date: 'July 7',
        user_id: 3456,
        type: 'see'
    }),
    new Notification({
        id: 3,
        icon: './img/tick.svg',
        title: 'Tristicus a aceptado tu peticion',
        date: 'July 7',
        user_id: 3456,
        type: 'accept'
    }),
    new Notification({
        id: 4,
        icon: './img/ojo.svg',
        title: 'Red Hair a visto tu perfil',
        date: 'July 7',
        user_id: 3456,
        type: 'see'
    })
];

const notificationListElement = document.getElementById('notification-list');
const OffertsListElement = document.getElementById('offerts-list');
const printNotifications = () => notifications.forEach((e) => {notificationListElement.innerHTML += e.getNotification();});
const printOfferts = () => offerts.forEach((e) => {OffertsListElement.innerHTML += e.getOffert();});
const deleteNotification = (id) => {
    notifications.forEach((e, i) => {
        if (id === `notification-${e.id}`) {
            notifications.splice(i, 1);
            notificationListElement.removeChild(document.getElementById(`notification-${e.id}`));
        }
    })
}
const deleteOffert = (id) => {
    offerts.forEach((e, i) => {
        if (id === `offert-${e.id}`) {
            offerts.splice(i, 1);
            OffertsListElement.removeChild(document.getElementById(`offert-${e.id}`));
        }
    })
}

printNotifications();
printOfferts();

const notificationBtn = document.getElementById('notification-btn');
const offertBtn = document.getElementById('offert-btn');
const bottomLine = document.getElementById('line');

notificationBtn.addEventListener('click', () => {
    bottomLine.style.marginLeft = '0%';
    OffertsListElement.style.display = 'none';
    notificationListElement.style.display = 'flex';
});

offertBtn.addEventListener('click', () => {
    bottomLine.style.marginLeft = '50%';
    notificationListElement.style.display = 'none';
    OffertsListElement.style.display = 'flex';
});