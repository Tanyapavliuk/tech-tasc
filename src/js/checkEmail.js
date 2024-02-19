const emailInput = document.querySelector('#emailInput');
emailInput.addEventListener('input', checkInput);


function checkInput(event) {
    const inputString = event.target.value;
    const pattern = /^[a-zA-Z0-9\.\_\-\@]+$/;

    const parent = emailInput.parentElement;
    const alertElement = parent.nextElementSibling;
    if (!pattern.test(inputString)) {
        emailInput.classList.add('error');
        alertElement.classList.add('error')
    } else{
        emailInput.classList.remove('error');
        alertElement.classList.remove('error');
    }
}
