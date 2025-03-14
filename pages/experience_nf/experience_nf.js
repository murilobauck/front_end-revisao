// Perguntas do Quiz
const quizQuestions = [
    {
        question: "Qual é o seu nível de experiência em aventuras?",
        options: ["Iniciante", "Intermediário", "Avançado"],
    },
    {
        question: "Qual tipo de aventura você prefere?",
        options: ["Montanhas", "Florestas", "Desertos"],
    },
    {
        question: "Qual é o seu objetivo principal?",
        options: ["Relaxar", "Desafiar-se", "Explorar"],
    },
];

// Respostas do Quiz
let userAnswers = [];

// Função para carregar as perguntas do quiz
function loadQuiz() {
    const quizContainer = document.getElementById("quiz-questions");
    quizQuestions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `
            <p>${question.question}</p>
            ${question.options
                .map(
                    (option) => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `
                )
                .join("")}
        `;
        quizContainer.appendChild(questionDiv);
    });
}

// Função para verificar as respostas do quiz
function checkQuiz() {
    const quizResult = document.getElementById("quiz-result");
    const selectedOptions = document.querySelectorAll('input[type="radio"]:checked');

    if (selectedOptions.length < quizQuestions.length) {
        quizResult.textContent = "Por favor, responda todas as perguntas.";
        return;
    }

    userAnswers = Array.from(selectedOptions).map((option) => option.value);
    quizResult.textContent = `Você é um aventureiro ${userAnswers[0]} que ama ${userAnswers[1]} e busca ${userAnswers[2]}.`;
}

// Função para gerar uma rota com base no nível de experiência
function generateRoute() {
    const experienceLevel = document.getElementById("experience-level").value;
    const routeResult = document.getElementById("route-result");

    let route;
    switch (experienceLevel) {
        case "beginner":
            route = "Sugerimos uma trilha leve na Serra do Cipó, perfeita para iniciantes!";
            break;
        case "intermediate":
            route = "Que tal escalar o Pico da Bandeira? Um desafio intermediário incrível!";
            break;
        case "advanced":
            route = "Aventure-se na Cordilheira dos Andes, um destino para experts!";
            break;
        default:
            route = "Selecione um nível de experiência para gerar uma rota.";
    }

    routeResult.textContent = route;
}

// Carregar o quiz ao abrir a página
document.addEventListener("DOMContentLoaded", loadQuiz);

// Evento para o botão do quiz
document.getElementById("quiz-submit").addEventListener("click", checkQuiz);

// Evento para o botão do gerador de rotas
document.getElementById("generate-route").addEventListener("click", generateRoute);