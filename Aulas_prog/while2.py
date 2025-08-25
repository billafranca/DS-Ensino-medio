aparelhos = []

while True:
    print("\nMenu:")
    print("1 - Adicionar aparelho")
    print("2 - Remover aparelho")
    print("3 - Listar aparelhos")
    print("0 - Sair")
    escolha = int(input("Digite sua escolha: "))

    if escolha == 1:
        novo_aparelho = input("Digite o nome do novo aparelho: ")
        aparelhos.append(novo_aparelho)
        print(f"{novo_aparelho} foi adicionado.")
    elif escolha == 2:
        aparelho_remover = input("Digite o nome do aparelho a ser removido: ")
        if aparelho_remover in aparelhos:
            aparelhos.remove(aparelho_remover)
            print(f"{aparelho_remover} foi removido.")
        else:
            print("Aparelho não encontrado.")
    elif escolha == 3:
        print("Lista de aparelhos:")
        for i, aparelho in enumerate(aparelhos, start=1):
            print(f"{i}. {aparelho}")
    elif escolha == 0:
        print("Redirecionando...")
        break
    else:
        print("Opção inválida.")
