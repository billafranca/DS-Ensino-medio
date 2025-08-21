
total = 0
while True:
    num = int(input("insira um valor (0 para parar)"))
    if num == 0:
        break
    total += num
print("Total sum:", total)


aparelhos = ["celular", "computador", "ps5", "notebook", "tablet", "smartwatch", "impressora",]
i = 0
while i < len(aparelhos):
    print(f"Aparelho {i+1}: {aparelhos[i]}")
    i += 1