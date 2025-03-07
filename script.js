document.addEventListener("DOMContentLoaded", function() {
    const users = [];

    // Simulação de banco de dados
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    }

    // Cadastro
    const cadastroForm = document.getElementById("cadastroForm");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            users.push({ nome, email, senha });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html";
        });
    }

    // Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            const user = users.find(u => u.email === email && u.senha === senha);
            if (user) {
                alert("Login realizado com sucesso!");
                window.location.href = "index.html";
            } else {
                alert("Email ou senha incorretos.");
            }
        });
    }

    // Efeito de carregamento
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const loading = document.createElement("div");
            loading.className = "loading";
            loading.textContent = "Carregando...";
            document.body.appendChild(loading);

            setTimeout(() => {
                window.location.href = link.href;
            }, 2000);
        });
    });
});