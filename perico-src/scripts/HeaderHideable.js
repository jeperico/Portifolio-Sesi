let preScroll = 0;
let contador = 0;
window.addEventListener('scroll', () => {
    const header = (document.querySelector(".hideable-header")).classList;
    
    let thisScroll = window.scrollY;
    
    if(contador == 10) {
        contador = 0;
        preScroll = thisScroll;
    }
    
    if(window.scrollY > 50) {
        if (thisScroll === preScroll) return;
        if (thisScroll > preScroll) {
            if(!header.contains('scrollHide')) {
                header.add('scrollHide');
                console.log(header)
            }
        } else {
            if(header.contains('scrollHide')) {
                header.remove('scrollHide');
            }
        }
    }

    contador++;
});