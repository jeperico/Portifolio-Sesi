let preScroll = 0;
let counter = 0;
window.addEventListener('scroll', () => {
    const header = (document.querySelector(".hideable-header")).classList;

    let thisScroll = window.scrollY;

    if (counter == 50) {
        counter = 0;
        preScroll = thisScroll;
    }

    if (window.scrollY <= 50) {
        header.remove('scrollHide');
        return;
    } else if (window.scrollY > 50) {
        if (thisScroll === preScroll) return;
        if (thisScroll > preScroll) {
            if (!header.contains('scrollHide')) {
                header.add('scrollHide');
            }
        } else {
            if (header.contains('scrollHide')) {
                header.remove('scrollHide');
            }
        }
    }

    counter++;
});