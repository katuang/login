
customElements.define('x-fb-template', class extends HTMLElement {
    constructor() {
        super();

        let tmpl = document.getElementById('fb-from-template').content;
        
        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(tmpl.cloneNode(true));
    }
});

customElements.define('x-login', class extends HTMLElement {
    constructor() {
        super();
        let tmpl = document.getElementById('x-from-login').content;
        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(tmpl.cloneNode(true))
    }
});

customElements.define('x-birthday', class extends HTMLElement {
    constructor() {
        super();
        let tmpl = document.getElementById('x-from-birthday').content;
        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(tmpl.cloneNode(true))

        // let day = this.shadowRoot.getElementById('day');
        // // console.log(day);
        // for(let i=1; i<32; i++) {
        //     let option = document.createElement('option');
        //     option.setAttribute('value', i);
        //     option.innerHTML = `${i}`;
        //     day.appendChild(option);
        // }
    }

    connectedCallback() {
        let day = this.shadowRoot.getElementById('day');
        for(let i=1; i<32; i++) {
            let option = document.createElement('option');
            option.setAttribute('value', i);
            option.innerHTML = `${i}`;
            day.appendChild(option);
        }

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let bulan = this.shadowRoot.getElementById('month');
        months.forEach(month => {
            let option = document.createElement('option');
            option.setAttribute('value', month);
            option.innerHTML = `${month}`;
            bulan.appendChild(option);
        })
        let d = new Date();
        // console.log(d.getFullYear());
        let tahun = this.shadowRoot.getElementById('year');
        for(let i=1980; i<=d.getFullYear(); i++) {
            let option = document.createElement('option');
            option.setAttribute('value', i);
            option.innerHTML = `${i}`;
            tahun.appendChild(option);

        }
    }
});

customElements.define('x-gender', class extends HTMLElement {
    constructor() {
        super();
        let tmpl = document.getElementById('x-from-gender').content;
        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(tmpl.cloneNode(true))
    }
});

customElements.define('x-register', class extends HTMLElement {
    constructor() {
        super();
        let tmpl = document.getElementById('x-from-register').content;
        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(tmpl.cloneNode(true))
    }
});