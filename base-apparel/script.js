const form = document.querySelector('#form')
const errorIcon = document.querySelector('#error-icon');
const errorMsg = document.querySelector('#error-msg');
const email = document.querySelector('#email');

const successful = () => {
    email.style.border = '1px solid var(--light-pink)'
    errorIcon.style.visibility = 'hidden';
    errorMsg.innerHTML = 'Thank you' 
    errorMsg.style.color = 'var(--Grayish-red';
    form.reset();
    errorMsg.reset();
}

const unsuccessful = () => {
    email.style.border = '2px solid hsl(0, 93%, 68%)';
    errorIcon.style.visibility = 'visible';
    errorMsg.innerHTML = 'Please provide a valid email';
    errorMsg.style.visibility = 'visible';
}

const checkEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        successful()
    } else {
        unsuccessful()
    }  
}

addEventListener ('submit', function(e) {
    e.preventDefault();

    checkEmail(email)
})