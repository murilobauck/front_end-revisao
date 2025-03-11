document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Dados de login (simulação)
    const usuarioCorreto = "murilobauck";
    const senhaCorreta = "senha123";

    // Captura os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação
    if (username === usuarioCorreto && password === senhaCorreta) {
        // Redireciona para a página de boas-vindas
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
});