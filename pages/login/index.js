document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'murilobauck' && password === '1234') {
        const container = document.querySelector('.container');
        container.classList.add('zoom-out');

        setTimeout(() => {
            window.location.href = '../home/home.html';
        }, 300);
    } else {
        loginErro.textContent = `Usuário ou senha inválidos!`;
    }
});

document.getElementById('toggleSenha').addEventListener('click', function () {
    var senhaInput = document.getElementById('password');
    var icone = this;

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        icone.classList.remove('fa-eye-slash');
        icone.classList.add('fa-eye');

    } else {
        senhaInput.type = 'password';
        icone.classList.remove('fa-eye');
        icone.classList.add('fa-eye-slash');
    }
});