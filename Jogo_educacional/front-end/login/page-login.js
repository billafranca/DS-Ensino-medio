document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home');
    const sobreLink = document.getElementById('sobre');
    const contatoLink = document.getElementById('contato');
    const cadastroLink = document.getElementById('cadastroNav');

    cadastroLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = '../page-inicial/pagina-inicial.html';
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
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if (!email || !senha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                alert('Login realizado com sucesso!');
                window.location.href = '../page-jogar/index.html';
                form.reset();
            } else {
                alert(data.message || 'Erro ao realizar login.');
            }
        } catch (err) {
            console.error(err);
            alert('Erro na conexão com o servidor.');
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
