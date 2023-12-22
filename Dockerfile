# Use a imagem oficial do Node.js como base
FROM node:14

# Cria e define o diretório de trabalho
WORKDIR /usr/src/app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código-fonte para o diretório de trabalho
COPY . .

# Expõe a porta que o aplicativo vai rodar
EXPOSE 3000

# Comando para executar o aplicativo quando o contêiner for iniciado
CMD ["npm", "start"]
