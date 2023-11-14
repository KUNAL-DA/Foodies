// Nav Toggle 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove('show');
    })
})

//  Number Copy Functions 

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
            number.innerText = "1200 345 212";
        }, 1000);
        number.innerText = "Wait a Sec....";
       
    }


