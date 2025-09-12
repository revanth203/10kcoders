let random = Math.ceil(Math.random()*100);
let input = document.getElementById("input");
let para  =document.getElementById("para");
let time = document.getElementById("time");
let count =0;
function guessBtn(){
    count++;

    if(input.value==random){
        para.textContent="Congrats! Your Guessing Correct"
        para.style.color='green'
        time.textContent="No.Of chances: "+count;
    }else if (input.value<random){
        para.textContent=" Your Guessing is Too Low."
        para.style.color='red'
    }else{
       para.textContent="Your  Guessing is Too High." 
    }
     

}
