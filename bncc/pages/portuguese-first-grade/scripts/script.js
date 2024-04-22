window.onload() = () => {
    const mentalMapLeftArrow = document.querySelector('#mental-map-left-arrow');
    const mentalMapRightArrow = document.querySelector('#mental-map-right-arrow');
    const mentalMapImage = document.querySelector('#mental-map-carousel');
    console.log(mentalMapLeftArrow);
    
    mentalMapLeftArrow.addEventListener('click', () => {
        console.log("a");
        if(mentalMapImage.src == './assets/mental-map-quinhentismo.jpg') {
            mentalMapImage.src = './assets/mental-map-humanismo.jpg';
        } else {
            mentalMapImage.src = './assets/mental-map-quinhentismo.jpg';
        }
    });
}