document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Burger animation
        burger.classList.toggle('toggle');
    });
});
 
//this is thr js for validation

let validForm = document.getElementById('loginForm');
validForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let emailInput = document.getElementById('email').value;
    let pass = document.getElementById('tel').value;
    let msg = document.querySelectorAll('small');
    let user = document.getElementById('user').value;

    if (!emailInput.includes('@')) {
        msg[1].innerHTML = "invalid email address";
        msg[1].style.color = "red";
    }else{
        msg[1].innerHTML = "email is correct";
        msg[1].style.color = "green";
    }
    if (pass.length <= 10) {
        msg[2].innerHTML = "your number is not complete"
        msg[2].style.color = "red";
    }else{
        msg[2].innerHTML = "correct";
        msg[2].style.color = "green";
    }
    if (user === "") {
        msg[0].innerHTML = "username cannot be empty or number";
        msg[0].style.color = "red";
    }else{
        msg[0].innerHTML = "Username is corect";
        msg[0].style.color = "green";
    }
})