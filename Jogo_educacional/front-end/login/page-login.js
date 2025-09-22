document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;

    if (!email || !senha) {
        return alert("Preencha todos os campos!");
    }

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);

                // salva os dados do usuário
                localStorage.setItem('user', JSON.stringify(data.user));

                // redireciona para a página inicial
                window.location.href = '../page_icones/src/page_icones.html';
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao tentar logar usuário!');
        });
});

// Navegação do menu
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '../../front-end/page_entrada/page_entrada.html';
    });

    document.getElementById('sobre').addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

});

    document.getElementById('contato').addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });