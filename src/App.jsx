import './App.css'

export default function App() {

    let valor_produto = 1500; 

    (function(v){v = 1900;})(valor_produto);

    const mainContainer = <main>
        <strong>O Valor do Produto é: R$ {valor_produto},00</strong>
    </main>;

    return mainContainer

}

// Escreva sua resposta como comentários nas linhas abaixo. Por que o valor exibido é igual a R$ 1500,00 e não R$ 1900,00? Como esse exemplo difere da questão TP 1.6? A resposta deve conter as palavras escopo, valor, array, referência, javascript.

//O escopo da função não está modificando o valor da variável "valor_produto". No caso da questão anterior, a palavra reservada "push" foi utilizada para modificar o conteúdo do array. Nesse caso é realizada a referência a variável, mas nada além disso.