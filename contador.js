let  adicionar = document.getElementById("increment");
let subtrair = document.getElementById("decrement");
let reset = document.getElementById('resetar');
let currentNumberWrapper = document.getElementById('currentNumber');


adicionar.addEventListener('click' , () => {
    if (currentNumberWrapper.innerHTML< 10){
        currentNumberWrapper.innerHTML++
    }
  
   });

 subtrair.addEventListener('click' , () => {
    if (currentNumberWrapper.innerHTML >(-10)){
        currentNumberWrapper.innerHTML--
    }
   
});

reset.addEventListener('click' , () => {
    currentNumberWrapper.innerHTML = 0
});





    
