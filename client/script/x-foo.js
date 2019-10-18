let template = document.createElement('template');
template.innerHTML = `
    <style>:host { ... }</style> <!-- scoped styles -->
    <slot></slot>
    <b>I'm in shadow dom!</b>
    
`;

customElements.define('x-foo', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
});