const errorIcon = document.querySelector('#error-icon');
const errorMsg = document.querySelector('#error-msg');
const email = document.querySelector('#email');

const show = () => {
    console.log(email.value)
}

addEventListener ('submit', function(e) {
    e.preventDefault();
    show()
})