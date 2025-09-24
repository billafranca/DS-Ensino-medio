document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home');
    const sobreLink = document.getElementById('sobre');
    const contatoLink = document.getElementById('contato');
    const btn = document.getElementById('botaoJogar');

    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert('redirecionando...');
        window.location.href = '../page-inicial/pagina-inicial.html';
    });

    sobreLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    contatoLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
    btn.addEventListener('click', () => {
        const personagemImgUrl = 'images/logo-jogo.png';

        const gameContainer = document.createElement('div');
        gameContainer.id = 'gameContainer';
        gameContainer.style.position = 'fixed';
        gameContainer.style.top = '0';
        gameContainer.style.left = '0';
        gameContainer.style.width = '100vw';
        gameContainer.style.height = '100vh';
        gameContainer.style.background = 'linear-gradient(135deg, #edd9a8ff 0%, #ffffffff 100%)';
        gameContainer.style.zIndex = '9999';
        gameContainer.style.display = 'flex';
        gameContainer.style.flexDirection = 'column';
        gameContainer.style.alignItems = 'center';
        gameContainer.style.justifyContent = 'center';
        gameContainer.style.fontFamily = 'Segoe UI, Arial, sans-serif';

        document.body.appendChild(gameContainer);

        // Fases do jogo (10 perguntas)
        const fases = [
            {
                pergunta: 'Fase 1: Qual destes é um benefício da atividade física regular?',
                opcoes: ['Aumenta o estresse', 'Melhora a saúde cardiovascular', 'Reduz a energia', 'Diminui a concentração'],
                resposta: 1
            },
            {
                pergunta: 'Fase 2: Qual destes esportes é praticado com uma bola?',
                opcoes: ['Natação', 'Basquete', 'Corrida', 'Ginástica'],
                resposta: 1
            },
            {
                pergunta: 'Fase 3: O aquecimento antes do exercício serve para:',
                opcoes: ['Cansar o corpo', 'Evitar lesões', 'Dormir melhor', 'Ficar parado'],
                resposta: 1
            },
            {
                pergunta: 'Fase 4: Qual destes alimentos é mais indicado para quem pratica esportes?',
                opcoes: ['Refrigerante', 'Frutas', 'Doces', 'Batata frita'],
                resposta: 1
            },
            {
                pergunta: 'Fase 5 (Difícil): Qual é o principal músculo utilizado no agachamento?',
                opcoes: ['Bíceps', 'Quadríceps', 'Tríceps', 'Peitoral'],
                resposta: 1
            },
            {
                pergunta: 'Fase 6: Qual destes hábitos contribui para uma boa saúde mental?',
                opcoes: ['Dormir pouco', 'Praticar meditação', 'Comer muitos doces', 'Evitar amigos'],
                resposta: 1
            },
            {
                pergunta: 'Fase 7: Qual é o órgão responsável por bombear sangue pelo corpo?',
                opcoes: ['Pulmão', 'Cérebro', 'Coração', 'Fígado'],
                resposta: 2
            },
            {
                pergunta: 'Fase 8: Qual destes é um exemplo de exercício aeróbico?',
                opcoes: ['Levantamento de peso', 'Corrida', 'Alongamento', 'Yoga'],
                resposta: 1
            },
            {
                pergunta: 'Fase 9: Qual vitamina é obtida principalmente pela exposição ao sol?',
                opcoes: ['Vitamina C', 'Vitamina D', 'Vitamina B12', 'Vitamina A'],
                resposta: 1
            },
            {
                pergunta: 'Fase 10: Qual destes é um benefício de beber água regularmente?',
                opcoes: ['Desidratação', 'Melhora a digestão', 'Aumenta o cansaço', 'Diminui a concentração'],
                resposta: 1
            }
        ];

        let faseAtual = 0;

        function mostrarPersonagem() {
            const personagem = document.createElement('img');
            personagem.src = personagemImgUrl;
            personagem.alt = 'Personagem';
            personagem.style.width = '120px';
            personagem.style.height = '120px';
            personagem.style.borderRadius = '50%';
            personagem.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
            personagem.style.marginBottom = '24px';
            return personagem;
        }

        function mostrarFase() {
            gameContainer.innerHTML = '';

            // Personagem
            gameContainer.appendChild(mostrarPersonagem());

            // Barra de progresso
            const progresso = document.createElement('div');
            progresso.style.width = '80%';
            progresso.style.height = '16px';
            progresso.style.background = '#eee';
            progresso.style.borderRadius = '8px';
            progresso.style.marginBottom = '24px';
            progresso.style.overflow = 'hidden';
            const progressoInterno = document.createElement('div');
            progressoInterno.style.width = `${((faseAtual + 1) / fases.length) * 100}%`;
            progressoInterno.style.height = '100%';
            progressoInterno.style.background = '#cdae76ff';
            progressoInterno.style.transition = 'width 0.3s';
            progresso.appendChild(progressoInterno);
            gameContainer.appendChild(progresso);

            // Pergunta
            const titulo = document.createElement('h2');
            titulo.textContent = fases[faseAtual].pergunta;
            titulo.style.color = '#333';
            titulo.style.marginBottom = '20px';
            gameContainer.appendChild(titulo);

            // Opções
            const opcoesContainer = document.createElement('div');
            opcoesContainer.style.display = 'flex';
            opcoesContainer.style.flexDirection = 'column';
            opcoesContainer.style.gap = '16px';
            fases[faseAtual].opcoes.forEach((opcao, idx) => {
                const btnOpcao = document.createElement('button');
                btnOpcao.textContent = opcao;
                btnOpcao.style.padding = '12px 24px';
                btnOpcao.style.fontSize = '18px';
                btnOpcao.style.borderRadius = '8px';
                btnOpcao.style.border = 'none';
                btnOpcao.style.background = '#fff';
                btnOpcao.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                btnOpcao.style.cursor = 'pointer';
                btnOpcao.style.transition = 'background 0.2s, color 0.2s';
                btnOpcao.onmouseover = () => {
                    btnOpcao.style.background = '#d7bd81ff';
                    btnOpcao.style.color = '#fff';
                };
                btnOpcao.onmouseout = () => {
                    btnOpcao.style.background = '#fff';
                    btnOpcao.style.color = '#333';
                };
                btnOpcao.onclick = () => {
                    if (idx === fases[faseAtual].resposta) {
                        if (faseAtual < fases.length - 1) {
                            faseAtual++;
                            mostrarFase();
                        } else {
                            mostrarVitoria();
                        }
                    } else {
                        mostrarErro();
                    }
                };
                opcoesContainer.appendChild(btnOpcao);
            });
            gameContainer.appendChild(opcoesContainer);
        }

        function mostrarVitoria() {
            gameContainer.innerHTML = '';
            gameContainer.appendChild(mostrarPersonagem());

            const msg = document.createElement('h2');
            msg.textContent = 'Parabéns! Você concluiu todas as fases!';
            msg.style.color = '#27ae60';
            msg.style.marginBottom = '20px';
            gameContainer.appendChild(msg);

            const confete = document.createElement('div');
            confete.textContent = '🎉🎉🎉';
            confete.style.fontSize = '48px';
            confete.style.marginBottom = '20px';
            gameContainer.appendChild(confete);

            const btnResgatar = document.createElement('button');
            btnResgatar.textContent = 'Resgatar Prêmio';
            btnResgatar.style.padding = '12px 32px';
            btnResgatar.style.fontSize = '18px';
            btnResgatar.style.borderRadius = '8px';
            btnResgatar.style.border = 'none';
            btnResgatar.style.background = '#d3ac6cff';
            btnResgatar.style.color = '#fff';
            btnResgatar.style.cursor = 'pointer';
            btnResgatar.style.marginTop = '20px';
            btnResgatar.onclick = () => {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
            };
            gameContainer.appendChild(btnResgatar);

            const btnSair = document.createElement('button');
            btnSair.textContent = 'Sair';
            btnSair.style.padding = '12px 32px';
            btnSair.style.fontSize = '18px';
            btnSair.style.borderRadius = '8px';
            btnSair.style.border = 'none';
            btnSair.style.background = '#ff7675';
            btnSair.style.color = '#fff';
            btnSair.style.cursor = 'pointer';
            btnSair.style.marginTop = '20px';
            btnSair.onclick = () => {
                document.body.removeChild(gameContainer);
            };
            gameContainer.appendChild(btnSair);
        }

        function mostrarErro() {
            gameContainer.innerHTML = '';
            gameContainer.appendChild(mostrarPersonagem());

            const msg = document.createElement('h2');
            msg.textContent = 'Resposta incorreta! Tente novamente.';
            msg.style.color = '#e17055';
            msg.style.marginBottom = '20px';
            gameContainer.appendChild(msg);

            const btnTentar = document.createElement('button');
            btnTentar.textContent = 'Tentar novamente';
            btnTentar.style.padding = '12px 32px';
            btnTentar.style.fontSize = '18px';
            btnTentar.style.borderRadius = '8px';
            btnTentar.style.border = 'none';
            btnTentar.style.background = '#dbb577ff';
            btnTentar.style.color = '#fff';
            btnTentar.style.cursor = 'pointer';
            btnTentar.style.marginTop = '20px';
            btnTentar.onclick = () => {
                mostrarFase();
            };
            gameContainer.appendChild(btnTentar);
        }

        mostrarFase();
    });
});

