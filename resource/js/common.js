var visualSwiper = new Swiper('.visual .swiper-container', {
	slidesPerView: 3,
    spaceBetween: 30,
	loop: false,
});

var elStn = document.querySelectorAll('.scroll_event');
var elHeight;
window.addEventListener('scroll',function(){
    for(var i=0; i<elStn.length; i++){
        elHeight = elStn[i].getBoundingClientRect().top + window.pageYOffset;
        if( ((elHeight - window.innerHeight) + (window.innerHeight/2 - window.innerHeight/4)) <= window.pageYOffset){
            elStn[i].classList.add('active');
        } //scroll fadein event
        else if( (elHeight - window.innerHeight) <= window.pageYOffset ){
            elStn[i].classList.remove('active');
        } //event fadeout event
    }
})