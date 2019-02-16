# Node.js: Código

Agora escreveremos um código bem simples, apenas para escrevermos testes em seguida e poder utilizar no GitLab CI, crie uma pasta chamada _src_, que é onde colocaremos todo o código-fonte escrito por nós para o projeto, e em seguida crie um arquivo chamado _index.js_ com o seguinte código:

```javascript
// src/index.js

function soma(n1, n2) {
    return n1 + n2;
}

function subtrai(n1, n2) {
    return n1 - n2;
}

module.exports = {
    soma,
    subtrai
}
```

Note o comando `module.exports`, nele indicamos ao Node.js quais partes desse arquivo queremos acessar em de outros arquivos.
