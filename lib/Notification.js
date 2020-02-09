class Notification {
    constructor (notification){
        this.id = notification.id;
        this.icon = notification.icon;
        this.title = notification.title;
        this.date = notification.date;
        this.user_id = notification.user_id;
        this.type = notification.type;
    }

    getNotification () {
        let res = 
        `<li id="notification-${this.id}">
            <div class="notification-body">
                <img src="${this.icon}" alt="">
                <div class="notification-text">
                    <h2>${this.title}</h2>
                    <time>${this.date}</time>  
                </div>
            </div>
            <div class="close-icon" onclick="deleteNotification('notification-${this.id}')">
                <img src="./img/close.svg" alt="">
            </div>
        </li>`;
        return res;
    }
}