nome = input("seu nome: ")
escolha_produto = int(input(f"qual produto? {nome} escolha 1 ou 2: "))


preco_produto1 = 1500
preco_produto2 = 3500


def calcular_imposto(valor):
    if valor < 1000:
        return valor * 0.1
    elif valor < 2000:
        return valor * 0.13
    else:
        return valor * 0.2


imposto_produto1 = calcular_imposto(preco_produto1)
imposto_produto2 = calcular_imposto(preco_produto2)

if escolha_produto == 1:
    print(f"boa escolha, o preço é {imposto_produto1}")
else:
    print(f"boa escolha, o preço é {imposto_produto2}")