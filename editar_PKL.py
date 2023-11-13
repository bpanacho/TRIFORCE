import pickle


# Passo 1: Carregue os dados do arquivo pickle existente
with open('campos.pkl', 'rb') as arquivo_pkl:
    dados = pickle.load(arquivo_pkl)

    with open('resp.pkl', 'rb') as arquivo_pkl:
        dados = pickle.load(arquivo_pkl)

# Passo 2: Adicione informações da questão 6 e alternativas
dados['Campos'].append((x_6, y_6, w_6, h_6))  # Substitua pelos valores reais
dados['Respostas'].extend(['6-A', '6-B', '6-C', '6-D']) 

dados['Campos'].append((x_7, y_7, w_7, h_7))  # Substitua pelos valores reais
dados['Respostas'].extend(['7-A', '7-B', '7-C', '7-D'])

dados['Campos'].append((x_8, y_8, w_8, h_8))  # Substitua pelos valores reais
dados['Respostas'].extend(['8-A', '8-B', '8-C', '8-D'])

dados['Campos'].append((x_9, y_9, w_9, h_9))  # Substitua pelos valores reais
dados['Respostas'].extend(['9-A', '9-B', '9-C', '9-D'])

dados['Campos'].append((x_10, y_10, w_10, h_10))  # Substitua pelos valores reais
dados['Respostas'].extend(['10-A', '10-B', '10-C', '10-D']) # Substitua pelas alternativas reais

# Passo 3: Salve os dados de volta no arquivo pickle
with open('resp.pkl', 'wb') as arquivo_pkl:
    pickle.dump(dados, arquivo_pkl)

    with open('campos.pkl', 'wb') as arquivo_pkl:
        pickle.dump(dados, arquivo_pkl)
