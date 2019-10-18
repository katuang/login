

customElements.define('x-foo-template', class extends HTMLElement {
    constructor() {
        super();
        let template = document.querySelector('#x-foo-from-template');
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
})