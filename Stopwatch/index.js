let time = document.getElementById("time")
let isTimeRunning = false

let sec=0;
let min=0;
let hou=0;
let clock;
function startBtn(){
    if(isTimeRunning){
        return 
    }
    isTimeRunning = true
    clock = setInterval(function(){
        if(sec==60){
            min++;
            sec=0;
        }
        let minutes;
        let seconds;
        let hours;
        if(sec<10){
            seconds="0"+sec
        }else{
            seconds=sec
        }
        if(min<10){
            minutes="0"+min
        }else{
            minutes=min
        }
        if(hou<10){
            hours="0"+hou
        }else{
            hours=hou
        }
        time.textContent = (hours + ":" + minutes + ":" + seconds)
        sec++;
        
        
    },1000)
}


function stopBtn(){
    clearInterval(clock)
    isTimeRunning=false
}

function resetBtn(){
    min=0;
    sec=0;
    time.textContent="00:00:00";
    clearInterval(clock)
    isTimeRunning=false;
}





// Add an Element to a List Problem: Write a function to add an element to a list. Explanation: Use append() to add the element to the end. Input: [1, 2, 3], add 4 Output: [1, 2, 3, 4]

// r=[1,2,3]
// r.push(4)
// console.log(r)


// arr=[1,2,3,4]
// arr.splice(2,1)
// console.log(arr)


// arr=[4,7,1,9]
// console.log(arr.splice(3))






