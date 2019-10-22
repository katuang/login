window.addEventListener('load', () => {
    let day = document.getElementById('day');
    
    for(let i=1; i<32; i++) {
        let option = document.createElement('option');
        option.setAttribute("value", i);
        option.innerHTML = `${i}`;
        day.appendChild(option);
        
    }
})