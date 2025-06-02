document.addEventListener("DOMContentLoaded", function () {
    var cnt = document.getElementById("contato");

    cnt.addEventListener("click", function () {
        alert("O contato é:\n Telefone: (11) 3782-0781 \n Email: pei.guiomar.rocha@gmail.com \n Horários: Segunda a Sexta, das 7h às 16h");
    })
})



document.addEventListener('DOMContentLoaded', function () {

    const elementsToReveal = document.querySelectorAll('.hidden, .ds, .adm, .secao4, .secao5, .secao6, .ensinoMedio, .secao7, .secao8, .secao9');

    elementsToReveal.forEach(element => {
        if (!element.classList.contains('hidden')) {
            element.classList.add('hidden');
        }
    });

    const observerOptions = {
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(element => {
        observer.observe(element);
    });

    const sections = document.querySelectorAll('.secao5, .secao6, .secao7, .secao8');
    sections.forEach((section, index) => {
        section.style.transitionDelay = `${index * 0.2}s`;
    });

    const cursos = document.querySelectorAll('.ds, .adm');
    cursos.forEach((curso, index) => {
        curso.style.transitionDelay = `${index * 0.3}s`;
    });
});

const endereco = document.getElementById("endereco");

endereco.addEventListener("click", function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
        block: 'end'
    });
});     
