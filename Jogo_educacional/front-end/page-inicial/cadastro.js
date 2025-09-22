document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home');
    const sobreLink = document.getElementById('sobre');
    const contatoLink = document.getElementById('contato');

    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Você já está na página inicial.');
       
    });

    sobreLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    contatoLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const confirmSenha = document.getElementById('confirmSenha').value;

        if (!nome || !email || !senha || !confirmSenha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (senha !== confirmSenha) {
            alert('As senhas não coincidem.');
            return;
        }

        const response = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha })
        });

        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            form.reset();
        } else {
            alert('Erro ao realizar cadastro.');
        }
    });
});

function toggleSenha() {
      const senha = document.getElementById('senha');
      const icon = document.getElementById('toggleIcon');
      if (senha.type === 'password') {
        senha.type = 'text';    
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
      } else {
        senha.type = 'password';
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
      }
    }