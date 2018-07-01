var slide = document.querySelectorAll('.slide');

var counter=0;

var arrowLeft = document.getElementById('arrow-left');
arrowLeft.addEventListener('click',getLeftSlide);

var arrowRight = document.getElementById('arrow-right');
arrowRight.addEventListener('click',getRightSlide);


// display no slide
function reset(){
    for(var i=0; i<slide.length; i++){
         slide[i].style.display='none';
    }
}
    
//display default slide that is slide1
 function startSlide(){
        reset();
      slide[counter].style.display='block';
    }

    startSlide();

function getLeftSlide(){
    if(counter===0){
        counter=slide.length;
    }
    counter--;
    startSlide();
}

function getRightSlide(){
    if(counter===slide.length-1){
        counter=-1
    }
    counter++;
    startSlide();
}



const interwal= setInterval(interwalSlide,4000);
function interwalSlide(){
    if(counter===slide.length-1){
        counter=-1
    }
    counter++; 
    startSlide();
}

// slide[counter].addEventListener('mouseover',stopInterwal);
// function stopInterwal(){
//     clearInterval(interwal)

// }

// slide[counter].addEventListener('mouseout',startInterwal);
// function startInterwal(){

//     interwal=setInterval(function(){
//         interwalSlide();
//     },1000);
// }

