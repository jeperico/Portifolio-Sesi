window.addEventListener('scroll', () => {
    const textSection = document.querySelector('#random-text-section');
    if(scrollY > 500) {
        textSection.classList.add('active');
        textSection.classList.remove('disable')
    }
})

window.addEventListener('load', () => {
    const dogImage = document.querySelectorAll('.dog-image');
    console.log(dogImage)
    
    dogImage.forEach(el => {
        el.addEventListener('mouseenter', () => {
            dogImage.forEach(element => {
                if(element === el) {
                    element.style.transform = 'scale(1.1)';
                    element.style.filter = 'brightness(1)';
                    console.log('a')
                } else {
                    element.style.filter = 'brightness(.7)';
                }
            })
        })
        el.addEventListener('mouseleave', () => {
            dogImage.forEach(element => {
                    element.style.transform = 'scale(1)';
                    element.style.filter = 'brightness(1)';
            })
        })
    });

});
