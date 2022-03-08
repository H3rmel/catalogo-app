# Executando o Webapp 🚀

Para executar este webapp é bem simples, primeiramente clone o repositório para sua máquina local...

```
git clone https://github.com/IsaacHermel/catalogo-app.git
```
Você deve utilizar algum terminal como o Git Bash para isso.

Depois disso, acessa a pasta `/client` por meio de um CLI (como o CMD, no meu caso é o Terminal do Windows) e execute o seguinte comando:

```
npm install
```

Se tudo correr bem e não houver quaisquer erros, execute logo em seguida o seguinte comando:

```
npm start
```

Se estiver tudo certinho, seu navegador irá abrir com o app já rodando e receberá a seguinte mensagem em seu CLI:

```
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.1.1.165:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Mas bem, agora vamos falar de algumas outras coisas...

## Outras tecnologias utilizadas 🛠

Para este projeto, utilizei algumas tecnologias além do ReactJS, sendo elas as seguintes:

- Umbootstrap 🐨
  
O Umbootstrap é o Design System da Umbler, ele foi no caso o styleguide obrigatório a ser utilizado nesse desafio. Como eu já venho utilizado ele quase que diariamente para gerenciar o *KoalaSchools* e também já era familiarizado anteriormente com o Bootstrap (O qual foi utilizado como base para o Umbootstrap), eu não tive muitos problemas utilizando o mesmo.

- React Router 🔀

O React Router é uma biblioteca desenvolvida especificamente para o ReactJS para criação e gerenciamento das rotas de um webapp, permitindo assim a criação de SPAs (Single Page Applications), utilizei pois o mesmo ele é bastante intuitivo e prático em sua criação de rotas, onde a forma como você declara e manipula elas lembra bastante a forma como você faz em NodeJS utilizando o Express (inclusive, é possível que por baixo dos panos do Router seja até isso que você esteja fazendo 🤔), mas bem, o motivo pelo qual decidi utilizar o Router foi por isso, praticidade e facilidade.

- Axios 🌐

O Axios é uma biblioteca que te permite manipular APIs tanto em NodeJS e navegadores comuns (Chrome, Edge, etc...), utilizei o mesmo por 2 motivos: O primeiro seria de que ele te permite rodar requisições HTTP tanto pelo NodeJS (onde ele utiliza o modulo http) quanto pelos navegadores comuns (onde ele usa o XMLHttpRequests) com o mesmo código, tornando ele assim mais versátil e adaptativo.

Já o segundo motivo seria de que ele realiza alguns procedimentos automáticos, como por exemplo o de transformar em objetos os dados que uma API me retorna quando uso um endpoint via GET, algo que utilizando o `fetch API` eu teria que fazer manualmente, utilizando comandos como o `JSON.stringify()` e afins.

- LocalStorage 📦

O LocalStorage na verdade é algo presente em qualquer navegador da internet atualmente, e utilizei ele apenas porque diferente do `sessionStorage`, os dados que são alocados nele não expiram, a não ser que sejam excluídos de forma manual e/ou a página tenha seu cache/cookies limpados (via `CTRL + R` por exemplo).

Mas bem, acho que expliquei todas as tecnologias que utilize, caso tenha faltado alguma ou tenham ficado dúvidas, só me perguntar que eu responderei sem problemas! 😉

### Considerações finais 💙

Este teste fora muito desafiante, divertido e trabalhoso, sinto que evolui bastante nele como desenvolvedor, seja utilizando novas tecnologias que não havia utilizado anteriormente, bem como com outras boas práticas (comentar código e afins).

Estou muito feliz com o resultado, mas claro, qualquer ponto de melhora, comentário, sugestões e afins, estarei totalmente aberto para ouvir e tentar aprimorar no código.

É isto, muito obrigado por esta oportunidade.
