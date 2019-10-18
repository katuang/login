import './my-component';

window.addEventListener('load', () => {
    const main = document.querySelector('main');
    const el = document.createElement('my-component');
    // const header = document.createElement('header');
    // const h1 = document.createElement('h1');
    // h1.textContent = 'Hello World';
    // header.appendChild(h1);
    // document.body.appendChild(header);

    // document.createElement('h1').innerHTML = 'hello';
    main.appendChild(el);
})
