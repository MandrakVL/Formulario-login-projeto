const nameInput = document.querySelector("#nome-form");
const emailInput = document.querySelector("#email-form");
const senhaInput = document.querySelector("#senha-form");
const submit = document.getElementById("submit-button");
const error = document.querySelector('.msg-error');
error.classList = "";

submit.addEventListener('click', function(e) {
        e.preventDefault()

        const nameValue = nameInput.value;
        const emailValue = emailInput.value;
        const senhaValue = senhaInput.value;

        if(nameValue === '' || emailValue === '' || senhaValue === '') {
            error.innerHTML = "Por favor preencha todos os campos!"
            error.classList = "msg-error";

            setTimeout(() => {
                error.innerHTML = ""
                error.classList = "";
            }, 3000);
            
            return;
        }

        nameInput.value = '';
        emailInput.value = '';
        senhaInput.value = '';
    });