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

function generateRoute(userAnswers) {
    const [experience, adventureType, objective] = userAnswers;

    let route;

    // Combinações de respostas
    if (experience === "Iniciante" && adventureType === "Montanhas" && objective === "Relaxar") {
        route = "Sugerimos uma trilha leve na Serra do Cipó, perfeita para iniciantes que buscam relaxar.";
    } else if (experience === "Iniciante" && adventureType === "Montanhas" && objective === "Desafiar-se") {
        route = "Experimente a trilha do Pão de Açúcar no Rio de Janeiro, um desafio acessível para iniciantes.";
    } else if (experience === "Iniciante" && adventureType === "Montanhas" && objective === "Explorar") {
        route = "Explore a Chapada Diamantina, com trilhas leves e paisagens incríveis.";
    } else if (experience === "Iniciante" && adventureType === "Florestas" && objective === "Relaxar") {
        route = "Visite a Floresta da Tijuca no Rio de Janeiro, ideal para um dia tranquilo na natureza.";
    } else if (experience === "Iniciante" && adventureType === "Florestas" && objective === "Desafiar-se") {
        route = "Aventure-se na Mata Atlântica com uma trilha moderada em Ilhabela.";
    } else if (experience === "Iniciante" && adventureType === "Florestas" && objective === "Explorar") {
        route = "Conheça a Amazônia com um guia local, perfeito para exploradores iniciantes.";
    } else if (experience === "Iniciante" && adventureType === "Desertos" && objective === "Relaxar") {
        route = "Relaxe nas dunas de Lençóis Maranhenses, uma experiência única para iniciantes.";
    } else if (experience === "Iniciante" && adventureType === "Desertos" && objective === "Desafiar-se") {
        route = "Desafie-se com um passeio de jipe pelo deserto do Atacama.";
    } else if (experience === "Iniciante" && adventureType === "Desertos" && objective === "Explorar") {
        route = "Explore o deserto do Saara com um roteiro guiado para iniciantes.";
    } else if (experience === "Intermediário" && adventureType === "Montanhas" && objective === "Relaxar") {
        route = "Caminhe pela Serra da Mantiqueira, com vistas deslumbrantes e trilhas moderadas.";
    } else if (experience === "Intermediário" && adventureType === "Montanhas" && objective === "Desafiar-se") {
        route = "Escale o Pico da Bandeira, um desafio intermediário com recompensas incríveis.";
    } else if (experience === "Intermediário" && adventureType === "Montanhas" && objective === "Explorar") {
        route = "Explore os Andes peruanos, com trilhas intermediárias e paisagens únicas.";
    } else if (experience === "Intermediário" && adventureType === "Florestas" && objective === "Relaxar") {
        route = "Relaxe na Floresta Amazônica com um passeio de barco pelos rios.";
    } else if (experience === "Intermediário" && adventureType === "Florestas" && objective === "Desafiar-se") {
        route = "Desafie-se com uma trilha na Mata Atlântica em Paraty.";
    } else if (experience === "Intermediário" && adventureType === "Florestas" && objective === "Explorar") {
        route = "Explore a Floresta Negra na Alemanha, com trilhas intermediárias e histórias fascinantes.";
    } else if (experience === "Intermediário" && adventureType === "Desertos" && objective === "Relaxar") {
        route = "Relaxe no deserto de Mojave, com passeios tranquilos e paisagens únicas.";
    } else if (experience === "Intermediário" && adventureType === "Desertos" && objective === "Desafiar-se") {
        route = "Desafie-se com uma expedição de 4x4 no deserto de Sonora.";
    } else if (experience === "Intermediário" && adventureType === "Desertos" && objective === "Explorar") {
        route = "Explore o deserto de Wadi Rum na Jordânia, com trilhas intermediárias.";
    } else if (experience === "Avançado" && adventureType === "Montanhas" && objective === "Relaxar") {
        route = "Relaxe nos Alpes Suíços, com trilhas avançadas e paisagens deslumbrantes.";
    } else if (experience === "Avançado" && adventureType === "Montanhas" && objective === "Desafiar-se") {
        route = "Desafie-se com a escalada do Monte Kilimanjaro, uma aventura para experts.";
    } else if (experience === "Avançado" && adventureType === "Montanhas" && objective === "Explorar") {
        route = "Explore o Himalaia, com trilhas avançadas e vistas incríveis.";
    } else if (experience === "Avançado" && adventureType === "Florestas" && objective === "Relaxar") {
        route = "Relaxe na Floresta de Redwood, com trilhas avançadas e árvores gigantes.";
    } else if (experience === "Avançado" && adventureType === "Florestas" && objective === "Desafiar-se") {
        route = "Desafie-se com uma expedição na Floresta Amazônica, enfrentando condições extremas.";
    } else if (experience === "Avançado" && adventureType === "Florestas" && objective === "Explorar") {
        route = "Explore a Floresta de Borneo, com trilhas avançadas e vida selvagem única.";
    } else if (experience === "Avançado" && adventureType === "Desertos" && objective === "Relaxar") {
        route = "Relaxe no deserto do Atacama, com passeios avançados e paisagens surreais.";
    } else if (experience === "Avançado" && adventureType === "Desertos" && objective === "Desafiar-se") {
        route = "Desafie-se com uma travessia do deserto do Saara, uma aventura extrema.";
    } else if (experience === "Avançado" && adventureType === "Desertos" && objective === "Explorar") {
        route = "Explore o deserto de Gobi, com trilhas avançadas e paisagens únicas.";
    } else {
        route = "Não encontramos uma rota específica para suas respostas. Tente novamente!";
    }

    return route;
}

function checkQuiz() {
    const quizResult = document.getElementById("quiz-result");
    const selectedOptions = document.querySelectorAll('input[type="radio"]:checked');

    if (selectedOptions.length < quizQuestions.length) {
        quizResult.textContent = "Por favor, responda todas as perguntas.";
        return;
    }

    const userAnswers = Array.from(selectedOptions).map((option) => option.value);
    const route = generateRoute(userAnswers);
    quizResult.textContent = `Sua rota recomendada: ${route}`;
}

document.addEventListener("DOMContentLoaded", loadQuiz);

document.getElementById("quiz-submit").addEventListener("click", checkQuiz);