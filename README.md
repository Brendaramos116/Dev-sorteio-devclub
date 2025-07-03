# 🎲 Sorteio

Este projeto é uma aplicação web simples de **sorteio de números aleatórios**, desenvolvida com **HTML, CSS e JavaScript puro**. O objetivo é permitir que o usuário informe um intervalo numérico e receba um número aleatório dentro desse intervalo.

---

## 🚀 Funcionalidades

- Entrada de dois números (mínimo e máximo)
- Geração de um número aleatório entre os valores informados
- Alerta com o número sorteado
- Limpeza automática dos campos de entrada após o sorteio

---

## 🛠 Tecnologias Utilizadas

- **HTML5** para estrutura da página
- **CSS3** para estilização da interface
- **JavaScript (ES6)** para lógica de sorteio e interação com o DOM

---

## 📂 Estrutura de Arquivos
````
JS-DEVSORTEIO-DEVCLUB/
├── img
    └── sort 1.png
├── index.html
├── style.css
└── script.js
````
---

---

## 📷 Layout

A interface conta com:

- Logo na parte superior
- Campos para entrada dos números (mínimo e máximo)
- Botão "Sortear" com destaque visual

---

## 📌 Lógica de Sorteio

A função `generateNumber()` realiza as seguintes ações:

1. Captura os valores mínimo e máximo dos inputs.
2. Gera um número aleatório entre os dois valores.
3. Exibe o resultado via `alert`.
4. Limpa os campos de entrada após o sorteio.

Trecho principal:
```js
function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-right").value)
    const max = Math.floor(document.querySelector(".input-left").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    alert("Seu número sorteado é: " + result)

    document.querySelector(".input-right").value = ""
    document.querySelector(".input-left").value = ""
}

```
---

## 🧠 Observações

Os valores inseridos devem ser numéricos.

A aplicação não possui validação de erro (ex: se o mínimo for maior que o máximo), mas pode ser expandida futuramente para isso.

---

## 🙋‍♀️ Autora

**Brenda da Conceição Ramos** <br>
Desenvolvedora em formação — Front-End


