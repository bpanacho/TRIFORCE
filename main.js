document.addEventListener("DOMContentLoaded", () => {
    //animacao
    const registerButton = document.getElementById("registro");
    const loginButton = document.getElementById("login");
    const container = document.getElementById("container");

    registerButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
    });

    loginButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
    });


    //check campo erro
    const form = document.querySelector('form')
    const username = document.getElementById('nome')
    const usernameError = document.querySelector("#nome-erro")
    const email = document.getElementById('email')
    const emailError = document.querySelector("#email-erro")
    const password = document.getElementById('senha')
    const passwordError = document.querySelector("#senha-erro")

    //msg de erro
    function showError(input, message) {
        const formControl = input.parentElement
        formControl.className = 'campo-formulario erro'
        const small = formControl.querySelector('small')
        small.innerText = message
    }

    // deu certo
    function showSuccess(input) {
        const formControl = input.parentElement
        formControl.className = 'campo-formulario successo'
        const small = formControl.querySelector('small')
        small.innerText = ''
    }

    // check email eh valido
    function checkEmail(email) {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(email);
    }

    email.addEventListener("input", function () {
        if (!checkEmail(email.value)) {
            emailError.textContent = "*E-mail não é válido."
        } else {
            emailError.textContent = "";
        }
    })

    // restricoes nome
    username.addEventListener("input", function () {
        if (username.value.length < 3) {
            usernameError.textContent = "*O nome deve conter no minímo 3 caracteres."
        } else if (username.value.length > 20) {
            usernameError.textContent = "*O nome estende o máximo de 15 caracteres."
        } else {
            usernameError.textContent = "";
        }
    })

    // restricoes senha
    password.addEventListener("input", function () {
        if (password.value.length < 8) {
            passwordError.textContent = "*A senha deve conter no minímo 8 caracteres."
        } else if (password.value.length > 20) {
            passwordError.textContent = "*A senha estende o máximo de 20 caracteres."
        } else {
            passwordError.textContent = "";
        }
    })


    //campos obrigatórios
    function checkRequired(inputArr) {
        let isRequired = false
        inputArr.forEach(function (input) {
            if (input.value.trim() === '') {
                showError(input, `*${getFieldName(input)} é obrigatório.`)
                isRequired = true
            } else {
                showSuccess(input)
            }
        })

        return isRequired
    }

    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1)
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        if (!checkRequired([username, email, password])) {

        }
    })

    // check login aqui
    let lgForm = document.querySelector('.form-lg')
    let lgEmail = document.querySelector('.email-2')
    let lgEmailError = document.querySelector(".email-erro-2")
    let lgPassword = document.querySelector('.senha-2')
    let lgPasswordError = document.querySelector(".senha-erro-2")

    function showError2(input, message) {
        const formControl2 = input.parentElement
        formControl2.className = 'campo-formulario2 erro'
        const small2 = formControl2.querySelector('small')
        small2.innerText = message
    }

    function showSuccess2(input) {
        const formControl2 = input.parentElement
        formControl2.className = 'campo-formulario2 successo'
        const small2 = formControl2.querySelector('small')
        small2.innerText = '';
    }

    //email eh valido
    function checkEmail2(lgEmail) {
        const emailRegex2 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex2.test(lgEmail);
    }

    lgEmail.addEventListener("input", function () {
        if (!checkEmail2(lgEmail.value)) {
            lgEmailError.textContent = "*E-mail não é valido."
        } else {
            lgEmailError.textContent = "";
        }
    })

    //restricao senha
    lgPassword.addEventListener("input", function () {
        if (lgPassword.value.length < 8) {
            lgPasswordError.textContent = "*A senha deve conter no minímo 8 caracteres."
        } else if (lgPassword.value.length > 20) {
            lgPasswordError.textContent = "*A senha estende o máximo de 20 caracteres."
        } else {
            lgPasswordError.textContent = "";
        }
    })

    function checkRequiredLg(inputArr2) {
        let isRequiredLg = false
        inputArr2.forEach(function (input) {
            if (input.value.trim() === '') {
                showError2(input, `*${getFieldNameLg(input)} Preencha o campo obrigatório.`)
                isRequiredLg = true
            } else {
                showSuccess2(input)
            }
        })

        return isRequiredLg
    }

    function getFieldNameLg(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1)
    }

    lgForm.addEventListener('submit', function (e) {
        e.preventDefault()

        if (!checkRequiredLg([lgEmail, lgPassword])) {
            checkEmail2(lgEmail)
        }
    })

    let goToPy = document.querySelector('.btn-acessar')

    goToPy.addEventListener('click', function() {
       //executar quando o botão é clicado
        fetch('/executar')
        .then(response => response.text())
        .then(data => {
            //mostra a resposta do navegador
            console.log(data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });
});