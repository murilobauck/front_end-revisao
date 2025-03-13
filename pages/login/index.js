document.getElementById('login-form').addEventListener('submit', function(event) {
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
        alert('Usuário ou senha incorretos');
    }});