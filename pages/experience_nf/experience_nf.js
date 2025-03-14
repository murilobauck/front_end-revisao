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

    const routes = {
        Iniciante: {
            Montanhas: {
                Relaxar: "Sugerimos uma trilha leve na Serra do Cipó, perfeita para iniciantes que buscam relaxar.",
                "Desafiar-se": "Experimente a trilha do Pão de Açúcar no Rio de Janeiro, um desafio acessível para iniciantes.",
                Explorar: "Explore a Chapada Diamantina, com trilhas leves e paisagens incríveis."
            },
            Florestas: {
                Relaxar: "Visite a Floresta da Tijuca no Rio de Janeiro, ideal para um dia tranquilo na natureza.",
                "Desafiar-se": "Aventure-se na Mata Atlântica com uma trilha moderada em Ilhabela.",
                Explorar: "Conheça a Amazônia com um guia local, perfeito para exploradores iniciantes."
            },
            Desertos: {
                Relaxar: "Relaxe nas dunas de Lençóis Maranhenses, uma experiência única para iniciantes.",
                "Desafiar-se": "Desafie-se com um passeio de jipe pelo deserto do Atacama.",
                Explorar: "Explore o deserto do Saara com um roteiro guiado para iniciantes."
            }
        },
        Intermediário: {
            Montanhas: {
                Relaxar: "Caminhe pela Serra da Mantiqueira, com vistas deslumbrantes e trilhas moderadas.",
                "Desafiar-se": "Escale o Pico da Bandeira, um desafio intermediário com recompensas incríveis.",
                Explorar: "Explore os Andes peruanos, com trilhas intermediárias e paisagens únicas."
            },
            Florestas: {
                Relaxar: "Relaxe na Floresta Amazônica com um passeio de barco pelos rios.",
                "Desafiar-se": "Desafie-se com uma trilha na Mata Atlântica em Paraty.",
                Explorar: "Explore a Floresta Negra na Alemanha, com trilhas intermediárias e histórias fascinantes."
            },
            Desertos: {
                Relaxar: "Relaxe no deserto de Mojave, com passeios tranquilos e paisagens únicas.",
                "Desafiar-se": "Desafie-se com uma expedição de 4x4 no deserto de Sonora.",
                Explorar: "Explore o deserto de Wadi Rum na Jordânia, com trilhas intermediárias."
            }
        },
        Avançado: {
            Montanhas: {
                Relaxar: "Relaxe nos Alpes Suíços, com trilhas avançadas e paisagens deslumbrantes.",
                "Desafiar-se": "Desafie-se com a escalada do Monte Kilimanjaro, uma aventura para experts.",
                Explorar: "Explore o Himalaia, com trilhas avançadas e vistas incríveis."
            },
            Florestas: {
                Relaxar: "Relaxe na Floresta de Redwood, com trilhas avançadas e árvores gigantes.",
                "Desafiar-se": "Desafie-se com uma expedição na Floresta Amazônica, enfrentando condições extremas.",
                Explorar: "Explore a Floresta de Borneo, com trilhas avançadas e vida selvagem única."
            },
            Desertos: {
                Relaxar: "Relaxe no deserto do Atacama, com passeios avançados e paisagens surreais.",
                "Desafiar-se": "Desafie-se com uma travessia do deserto do Saara, uma aventura extrema.",
                Explorar: "Explore o deserto de Gobi, com trilhas avançadas e paisagens únicas."
            }
        }
    };

    const route = routes[experience]?.[adventureType]?.[objective] || "Não encontramos uma rota específica para suas respostas. Tente novamente!";

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