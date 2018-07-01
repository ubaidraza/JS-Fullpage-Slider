var sliderImages = document.querySelectorAll('.slide');
var leftArrow = documnet.querySelector('#arrow-left');
var rightArrow = document.querySelector('#arrow-right');
var current = 0;

function reset(){
    for(var i=0; i<sliderImages.length;i++){
        sliderImages[i].style.display="none";
    }
}

function startSlide(){
    reset();
    sliderImages[current].style.display ='display';
}

startSlide();

leftArrow.addEventListener('click',function(){
    if(current===0){
        current=sliderImages.length;
    }
    leftSlide();
});

rightArrow.addEventListener('click',function(){
    if(current===imagesSlider.length-1){
        current=-1;
    }
    rightSlider();
});

function rightSlider(){
    sliderImages[current+1].style.display = 'block';
    current++;
}

function leftSlide(){
    sliderImages[current-1].style.display='block';
    current--;
}