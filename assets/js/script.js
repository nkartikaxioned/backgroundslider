/* Author: 

*/


const 
 sliderLi=document.querySelectorAll('.list'),
 mainSliderLi=document.querySelectorAll('.sliderlist'),
 leftButton =document.querySelector('.leftbutton'), 
 rightButton =document.querySelector('.rightbutton');


 window.addEventListener('load',() => {
 let number=0;

 leftButton.addEventListener('click', () => previousSlide());

 rightButton.addEventListener('click',() => nextSlide());

 function nextSlide(){
  
     number++;
     if(number<5){
        removeBackgroundActive();
        removeActive();
        sliderLi[number].classList.add('activeBackground');
        mainSliderLi[number].classList.add('active');
    }
    if(number===5){
        number=-1;
        nextSlide();
    }
 }

 function previousSlide () {

    number--;
    if(number>-1){
       removeBackgroundActive();
       removeActive();
       sliderLi[number].classList.add('activeBackground');
       mainSliderLi[number].classList.add('active');
   }
   if(number===-1){
       number=5;
       previousSlide();
   }

 }

    function removeBackgroundActive() {
        sliderLi.forEach(elem => {
            elem.classList.remove('activeBackground');
        })
    }

    function removeActive() {
        mainSliderLi.forEach(elem => {
            elem.classList.remove('active');
        })
    }

 })













