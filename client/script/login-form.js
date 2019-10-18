class LoginForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>LOGIN</h1>`
    }
}

customElements.define('login-form', LoginForm);