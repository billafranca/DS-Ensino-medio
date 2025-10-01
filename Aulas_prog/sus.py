import webbrowser
import random


numero_secreto = random.randint(1, 10)


palpite = input("Tente adivinhar o número de 1 a 10: ")

if not palpite.isdigit():
    print("Digite apenas números!")
else:
    palpite = int(palpite)
    if palpite == numero_secreto:
        print(f"Parabéns! Você acertou o número {numero_secreto}!")
    else:
        print(f"Errado! O número correto era {numero_secreto}. Você será rickrolleado! 😎")
        # Abre o vídeo do Rick Astley
        webbrowser.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
