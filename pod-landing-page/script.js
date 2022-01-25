const form = document.querySelector('#form')
const errorMsg = document.querySelector('#error-msg');
const email = document.querySelector('#email');

// message functions
const successful = () => {
    errorMsg.style.color = "#b3ffe2"
    errorMsg.innerHTML = "Email registered";
    form.reset();
}

const unsuccessful = () => {
    errorMsg.style.color = "red"
    errorMsg.innerHTML = "Oops! Please check your email"
}

// email validation
const checkEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        successful()
    } else {
        unsuccessful()
    }

} 

// event listener

addEventListener ("submit", function(e) {
    e.preventDefault();

    checkEmail(email)
})