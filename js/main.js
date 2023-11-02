//? DOM => Element => Event => Action 
//!------- Golbal Data ------
let imgs =Array.from(document.querySelectorAll(`.item img`));
let lightbox = document.getElementById(`lightbox`);
let boxdata = document.getElementById(`boxdata`);
let close = document.getElementById(`close`);
let next = document.getElementById(`next`);
let prev = document.getElementById(`prev`);
let currentIndex = 0;







//!------ functions ------
function closeSlider(){
        lightbox.classList.add(`d-none`);
    }

function nextSlider(){
    currentIndex ++;
    if(currentIndex == imgs.length){
        currentIndex =0;
    }
    //....................... next Img
    let currentElementSrc = imgs[currentIndex].getAttribute(`src`);
    boxdata.style.backgroundImage=(`url(${currentElementSrc})`)
}

function prevSlider(){
    currentIndex --;
    if(currentIndex < 0){
        currentIndex =imgs.length-1;
    }
    let currentElementSrc = imgs[currentIndex].getAttribute(`src`);
    boxdata.style.backgroundImage=(`url(${currentElementSrc})`)
}




//!------ Events ------
for(let i =0; i<imgs.length;i++){
    imgs[i].addEventListener(`click`,function(e){
        let currentTarget = e.target;
        currentIndex = imgs.indexOf(currentTarget);

        // light box show
        lightbox.classList.remove(`d-none`);
        // select element
        let currentSrc = e.target.getAttribute(`src`); //src img
        boxdata.style.backgroundImage = `url(${currentSrc})`
    })
}
close.addEventListener(`click`,function(){
    closeSlider();
})

next.addEventListener(`click`,function(){
    nextSlider();
})

prev.addEventListener(`click`,function(){
    prevSlider();
})

document.addEventListener(`click`,function(e){
    if(e.target == lightbox){
        closeSlider()
    }
})

document.addEventListener(`keydown`,function(e){
    switch(e.key){
        case`ArrowRight`:
        nextSlider();
        break;

        case`ArrowLeft`:
        prevSlider();
        break;

        case(`Escape`):
        closeSlider();
        break;
    }
})

