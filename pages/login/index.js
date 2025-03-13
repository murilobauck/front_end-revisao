document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'murilobauck' && password === '1234') {
        window.location.href = 'home.html';
    } else {
        alert('Usuário ou senha incorretos');
    }});