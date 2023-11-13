import pickle


# Para abrir o arquivo campos.pkl
with open('C:\\Users\\pedro\\Downloads\\formulario-animado-main (2)\\formulario-animado-main\\campos.pkl', 'rb') as arquivo_campos:
    campos = pickle.load(arquivo_campos)

# Para abrir o arquivo resp.pkl
with open('C:\\Users\\pedro\\Downloads\\formulario-animado-main (2)\\formulario-animado-main\\resp.pkl', 'rb') as arquivo_respostas:
    respostas = pickle.load(arquivo_respostas)

# Agora, você pode acessar as variáveis campos e respostas que contêm os dados desses arquivos
print("Campos:", campos)
print("Respostas:", respostas)
