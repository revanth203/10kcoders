
let counts= document.getElementById("counter")
let count=0;

function increaseBtn(){
    count++;
    counts.textContent=count;
}

function resetBtn(){
    count=0;
    counts.textContent =count;

}

function decreaseBtn(){
    if(count>0){
        count--;
    counts.textContent=count;
    }
    
}
