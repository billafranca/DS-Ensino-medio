
print("---CALCULAR ÁREAS---")

escolha = int(input("Escolha a forma geométrica (1-Quadrado, 2-Retângulo, 3-Círculo): "))

if escolha == 1:
    lado = float(input("Digite o lado do quadrado: "))
    area = lado ** 2
    print("A área do quadrado é:", area)
if escolha == 2:
    base = float(input("Digite a base do retângulo: "))
    altura = float(input("Digite a altura do retângulo: "))
    area = base * altura
    print("A área do retângulo é:", area)
if escolha == 3:
    raio = float(input("Digite o raio do círculo: "))
    area = 3.14 * raio ** 2
    print("A área do círculo é:", area)
