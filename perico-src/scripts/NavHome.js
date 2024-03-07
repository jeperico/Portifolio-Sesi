const navItems = document.querySelectorAll('.hero-nav-option');

function scroll(finalPosition) {
    window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
    })
}
console.log(navItems);
navItems.forEach(el => {
    el.addEventListener('click', () => {
        switch (el.innerHTML) {
            case 'Moinho':
                console.log('Rolou até Moinho');
                scroll(950);
                break
            case 'DS1':
                scroll(1000);
                console.log('Rolou até DS1');
                break
            case 'CyberRain':
                scroll(1500);
                console.log('Rolou até CyberRain');
                break
        }
    })
})