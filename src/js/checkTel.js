const telInput = document.querySelector('#telInput');
telInput.addEventListener('input', validatePhoneNumber);

function validatePhoneNumber(event) {
    const inputString = event.target.value;
    var pattern = /^\+380\d{9}$/;

    const parent = telInput.parentElement;
    const alertElement = parent.nextElementSibling;
    if (!pattern.test(inputString)) {
        telInput.classList.add('error');
        alertElement.classList.add('error')
    } else{
        telInput.classList.remove('error');
        alertElement.classList.remove('error');
    }
}