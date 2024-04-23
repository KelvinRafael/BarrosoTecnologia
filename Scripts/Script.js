const item = document.querySelectorAll('[data-anime]');

const animeScroll = () => {

    const topElement = window.pageYOffset + window.innerHeight * 0.85;
    console.log(topElement);

    item.forEach( element => {

        if(topElement > element.offsetTop){
            element.classList.add('animate')
        }else{
            element.classList.remove('animate')
        }

    })

}

animeScroll()

window.addEventListener('scroll', () => {
    animeScroll();
})