# Lê o valor X
X = int(input())

# Cria um vetor vazio
vetor = []

# Preenche o vetor usando um loop
for i in range(10):
    vetor.append(i * X)

# Imprime os valores no formato desejado
for i in range(10):
    print(f"N[{i}] = {vetor[i]}")
