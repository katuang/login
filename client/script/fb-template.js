
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
            .appendChild(tmple.cloneNode(true))
    }
});

customeElements.define('x-gender', class extends HTMLElement {
    constructor() {
        super();
        let tmpl = document.getElementById('x-from-gender').content;
        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(tmpl.cloneNode(true))
    }
});

customeElements.define('x-register', class extends HTMLElement {
    constructor() {
        super();
        let tmpl = document.getElementById('x-from-register').content;
        const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(tmpl.cloneNode(true))
    }
});