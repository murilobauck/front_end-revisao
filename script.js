document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuarioCorreto = "murilobauck";
    const senhaCorreta = "senha123";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === usuarioCorreto && password === senhaCorreta) {
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
});