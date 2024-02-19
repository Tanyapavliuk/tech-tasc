import { Toast } from "toaster-js"; 

const BntSubmit = document.querySelector('#submit');
BntSubmit.addEventListener('click', handelSubmitForm);
const inputs = document.querySelectorAll('.form-input')
const checkbox = document.querySelector('#checkbox')
const inputAlerts = document.querySelectorAll('.input-alert')

function handelSubmitForm(event) {
    event.preventDefault();
    const isChecked = checkbox.checked;
    if(!isChecked){
        new Toast("Are you agree to the Terms of Use and Privacy Policy?", Toast.TYPE_ERROR, Toast.TIME_NORMAL);
    }
    if(isChecked){
        const isNotFill = Array.from(inputs).some(el=>el.value === '');
        if(isNotFill){
            Array.from(inputs).forEach(el=>{
                if(el.value !== ''){
                    el.classList.remove('error')
                }
                if(el.value === ''){
                    el.classList.add('error')
                }
            })
            new Toast("Please fill in all input fields!", Toast.TYPE_ERROR, Toast.TIME_NORMAL);
        }
        if(!isNotFill) {
            Array.from(inputs).forEach(el=>el.classList.remove('error'))
            Array.from(inputAlerts).forEach(el=>el.classList.remove('error'))
            const form = document.querySelector('#form');
            new Toast("Thank you for your registration!", Toast.TYPE_DONE, Toast.TIME_NORMAL);
            form.reset()
        } 
    } 
}
