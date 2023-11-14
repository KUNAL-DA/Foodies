// Nav Toggle code 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show');
    })
})

//  Number Copy Function

let number = document.getElementById('number');
number.onclick = function(){
    setTimeout(() => {
        navigator.clipboard.writeText(number.innerHTML);
    }, 1000);
    setTimeout(() => {
        number.innerText = "Copied";
    }, 1200);
}

 number.onmouseover = function(){
        setTimeout(() => {
            number.innerText = "1200 345 212"
        }, 1000);
        number.innerText = "Wait a Sec....";
       
    }

//Counter Design

document.addEventListener('DOMContentLoaded', () =>{
function counter(id, start, end, duration){
    let oBj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval( () =>{
        current += increment;
        oBj.textContent = current;
        if(current == end){
            clearInterval(timer);
        }
    }, step);
};
counter('count1', 0, 1499, 3000);
counter('count2', 0, 1234, 2000);
counter('count3', 0, 2341, 7000);
counter('count4', 0, 678, 4000);
});


    


