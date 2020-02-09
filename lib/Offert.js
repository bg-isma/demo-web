class Offert {
    constructor (offert){
        this.id = offert.id;
        this.teamIcon = offert.teamIcon || './img/teamPixel.jpeg';
        this.title = offert.title || 'No title';
        this.description = offert.description || 'No Description';
        this.team_id = offert.team_id;
        this.game = offert.game || '';
        this.date = offert.date || new Date().getDay();
        this.teamName = offert.teamName || 'No team Name';
        this.isSaved = offert.isSaved || false;
    }

    getOffert () {
        let res = 
        `<li class="offert ${this.game}" id="offert-${this.id}">
            <div class="offert-head">
                <h2>${this.title}</h2>
                <div onclick="deleteOffert('offert-${this.id}')"><img src="./img/guardado.svg" alt=""></div>
                <div><img src="./img/share.svg" alt=""></div>
            </div>
            <div class="offert-paragraph">
                <p>${this.description}</p>
            </div>
            <div class="offert-foot">
                <div>
                    <img src="${this.teamIcon}" alt="">
                    <h3>${this.teamName}</h3>
                </div>
                <div></div>
                <div>
                    <time>${this.date}</time>
                </div>
            </div>
        </li>`;
        return res;
    }

    getOffertWithLink () {
        let res = 
        `<li class="offert ${this.game}" id="${this.id}">
            <div class="offert-btns">
                <div onclick="saveOffert(${this.id})"><img id="save-${this.id}" src="./img/${this.isSaved ? 'guardado.svg' : 'guardar.svg'}" alt=""></div>
                <div><img src="./img/share.svg" alt=""></div>
            </div>
            <a href="http://127.0.0.1:5500/src/public/views/offert.html"> 
                <div class="offert-head">
                    <h2>${this.title}</h2>
                </div>
                <div class="offert-paragraph">
                    <p>${this.description}</p>
                </div>
                <div class="offert-foot">
                    <div>
                        <img src="${this.teamIcon}" alt="">
                        <h3>${this.teamName}</h3>
                    </div>
                    <div></div>
                    <div>
                        <time>${this.date}</time>
                    </div>
                </div>
            </a>
        </li>`;
        return res;
    }
}