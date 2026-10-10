const foto = document.querySelector('.foto-container');

let mouseX = 0;
let mouseY = 0;

let rotacaoX = 0;
let rotacaoY = 0;
let escala = 1;

let escalaAlvo = 1;

foto.addEventListener('mousemove', (e) => {
    const rect = foto.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centroX = rect.width / 2;
    const centroY = rect.height / 2;

    mouseX = ((x - centroX) / centroX) * 24;
    mouseY = ((y - centroY) / centroY) * -24;

    escalaAlvo = 1.02;
});

foto.addEventListener('mouseleave', () => {
    mouseX = 0;
    mouseY = 0;
    escalaAlvo = 1;
});

function animar() {
    rotacaoX += (mouseY - rotacaoX) * 0.04;
    rotacaoY += (mouseX - rotacaoY) * 0.04;

    escala += (escalaAlvo - escala) * 0.04;

    foto.style.transform = `
        rotateX(${rotacaoX}deg)
        rotateY(${rotacaoY}deg)
        scale(${escala})
    `;

    requestAnimationFrame(animar);
}

animar();

const areas = document.querySelectorAll('.habilidade-area');

areas.forEach(area => {

    const habilidade = area.querySelector('.habilidade');

    let mouseX = 0;
    let mouseY = 0;

    let rotacaoX = 0;
    let rotacaoY = 0;

    area.addEventListener('mousemove', (e) => {

        const rect = area.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centroX = rect.width / 2;
        const centroY = rect.height / 2;

        mouseX = ((x - centroX) / centroX) * 24;
        mouseY = ((y - centroY) / centroY) * -24;

    });

    area.addEventListener('mouseleave', () => {

        mouseX = 0;
        mouseY = 0;

    });

    function animar() {

        rotacaoX += (mouseY - rotacaoX) * 0.06;
        rotacaoY += (mouseX - rotacaoY) * 0.06;

        habilidade.style.transform = `
            rotateX(${rotacaoX}deg)
            rotateY(${rotacaoY}deg)
        `;

        requestAnimationFrame(animar);

    }

    animar();

});

const body = document.querySelector('body');

let fundoX = 0;
let fundoY = 0;

let alvoX = 0;
let alvoY = 0;

document.addEventListener('mousemove', (e) => {

    alvoX = (e.clientX / window.innerWidth - 0.5) * 2;
    alvoY = (e.clientY / window.innerHeight - 0.5) * 2;

});

function animarFundo() {

    fundoX += (alvoX - fundoX) * 0.05;
    fundoY += (alvoY - fundoY) * 0.05;

    body.style.backgroundPosition = `
        ${50 + fundoX * 2}% 
        ${50 + fundoY * 2}%
    `;

    requestAnimationFrame(animarFundo);

}

animarFundo();

const sidebar = document.getElementById('sidebar');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('menu-aberto');
});

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Aplica o tema escolhido
function aplicarTema(tema) {
    const temaEscuro = tema === "dark";

    root.setAttribute("data-theme", tema);

    if (themeToggle) {
        themeToggle.setAttribute(
            "aria-pressed",
            String(temaEscuro)
        );

        themeToggle.setAttribute(
            "aria-label",
            temaEscuro
                ? "Ativar tema claro"
                : "Ativar tema escuro"
        );
    }
}

// Recupera o tema salvo no navegador
const temaSalvo = localStorage.getItem("tema");

aplicarTema(temaSalvo === "dark" ? "dark" : "light");

// Alterna o tema ao clicar no knob
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const temaAtual = root.getAttribute("data-theme");
        const novoTema = temaAtual === "dark" ? "light" : "dark";

        aplicarTema(novoTema);
        localStorage.setItem("tema", novoTema);
    });
}
