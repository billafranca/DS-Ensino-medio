document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home');
    const sobreLink = document.getElementById('sobre');
    const contatoLink = document.getElementById('contato');
    const loginLink = document.getElementById('loginNav')

    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '../login/page-login.html';
    });

    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Você já está na página inicial.');
    });

    sobreLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    contatoLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    const form = document.getElementById('formulario');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if (!nome || !email || !senha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const response = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha })
        });

        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            window.location.href = '../login/page-login.html';
            form.reset();
        } else {
            const data = await response.json();
            alert(data.message || 'Erro ao realizar cadastro.');
        }
    });
});

function toggleSenha() {
    const senha = document.getElementById('senha');
    const icon = document.getElementById('toggleIcon');
    if (senha.type === 'password') {
        senha.type = 'text';
        icon.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        senha.type = 'password';
        icon.classList.replace('bi-eye-slash', 'bi-eye');
    }
}
