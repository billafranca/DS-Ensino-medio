import pandas as pd

# Criando um DataFrame inicial com alguns produtos fictícios
dados = {
    'Codigo': [101, 102, 103, 104],
    'Descricao': ['Caneta Azul', 'Caderno 100 folhas', 'Lápis HB', 'Borracha'],
    'Quantidade': [50, 20, 100, 35],
    'Fornecedor': ['Papelaria ABC', 'Papelaria XYZ', 'Papelaria ABC', 'Papelaria XYZ'],
    'Data_Entrada': ['2025-09-10', '2025-09-12', '2025-09-15', '2025-09-18']
}

estoque = pd.DataFrame(dados)

# Função para exibir o estoque
def mostrar_estoque():
    print("\n===== ESTOQUE ATUAL =====")
    print(estoque)

# Função para adicionar produto ao estoque
def adicionar_produto(codigo, descricao, quantidade, fornecedor, data_entrada):
    global estoque
    novo = pd.DataFrame({
        'Codigo': [codigo],
        'Descricao': [descricao],
        'Quantidade': [quantidade],
        'Fornecedor': [fornecedor],
        'Data_Entrada': [data_entrada]
    })
    estoque = pd.concat([estoque, novo], ignore_index=True)
    print(f"Produto {descricao} adicionado com sucesso!")

# Função para dar baixa em produto (saida)
def baixa_produto(codigo, quantidade):
    global estoque
    if codigo in estoque['Codigo'].values:
        idx = estoque.index[estoque['Codigo'] == codigo][0]
        if estoque.at[idx, 'Quantidade'] >= quantidade:
            estoque.at[idx, 'Quantidade'] -= quantidade
            print(f"Baixa de {quantidade} unidade(s) do produto {estoque.at[idx, 'Descricao']} realizada com sucesso.")
        else:
            print("Quantidade insuficiente em estoque.")
    else:
        print("Produto não encontrado.")

# Função para pesquisar produto por descrição
def pesquisar_produto(nome):
    resultado = estoque[estoque['Descricao'].str.contains(nome, case=False, na=False)]
    if not resultado.empty:
        print("\n===== RESULTADO DA PESQUISA =====")
        print(resultado)
    else:
        print("Produto não encontrado.")

# Função para salvar o estoque em CSV ou Excel
def salvar_estoque(formato='csv', arquivo='estoque'):
    if formato == 'csv':
        estoque.to_csv(f"{arquivo}.csv", index=False)
        print(f"Estoque salvo em {arquivo}.csv")
    elif formato == 'excel':
        estoque.to_excel(f"{arquivo}.xlsx", index=False)
        print(f"Estoque salvo em {arquivo}.xlsx")
    else:
        print("Formato não suportado. Use 'csv' ou 'excel'.")

# Função para carregar estoque de arquivo CSV ou Excel
def carregar_estoque(formato='csv', arquivo='estoque'):
    global estoque
    if formato == 'csv':
        estoque = pd.read_csv(f"{arquivo}.csv")
        print(f"Estoque carregado de {arquivo}.csv")
    elif formato == 'excel':
        estoque = pd.read_excel(f"{arquivo}.xlsx")
        print(f"Estoque carregado de {arquivo}.xlsx")
    else:
        print("Formato não suportado. Use 'csv' ou 'excel'.")

# Demonstração do uso
mostrar_estoque()
adicionar_produto(105, 'Marcador Permanente', 15, 'Papelaria ABC', '2025-09-25')
mostrar_estoque()
baixa_produto(101, 10)
mostrar_estoque()
pesquisar_produto('caderno')

# Salvar estoque em CSV e Excel
salvar_estoque('csv', 'estoque_demo')
salvar_estoque('excel', 'estoque_demo')
