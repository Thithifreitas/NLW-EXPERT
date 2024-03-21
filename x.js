/*const mensagem = "bom dia! Esta sendo um prazer te ver de novo"
alert (mensagem + (10 * 100) + "abraços")*/
const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "vari x = 10;",
            "let x = 10;",
            "const x = 10;"
        ],
        correta: 1 // A resposta correta é a opção 2 (let x = 10;)
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "console.log()",
            "print()",
            "log()"
        ],
        correta: 0 // A resposta correta é a opção 1 (console.log())
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "!="
        ],
        correta: 1 // A resposta correta é a opção 2 (===)
    },
    {
        pergunta: "Qual método é usado para converter uma string em número em JavaScript?",
        respostas: [
            "parseInt()",
            "toString()",
            "parseFloat()"
        ],
        correta: 0 // A resposta correta é a opção 1 (parseInt())
    },
    {
        pergunta: "Qual é o resultado da expressão '5' + 2 em JavaScript?",
        respostas: [
            "7",
            "52",
            "5 + 2"
        ],
        correta: 1 // A resposta correta é a opção 2 ("52")
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        respostas: [
            "function myFunction() {}",
            "myFunction = function() {}",
            "let myFunction = {}"
        ],
        correta: 0 // A resposta correta é a opção 1 (function myFunction() {})
    },
    {
        pergunta: "Qual é o resultado da expressão 10 % 3 em JavaScript?",
        respostas: [
            "3",
            "1",
            "0.3"
        ],
        correta: 1 // A resposta correta é a opção 2 ("1")
    },
    {
        pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Comentário de uma linha",
            "<!-- Comentário de uma linha -->",
            "/* Comentário de uma linha */"
        ],
        correta: 0 // A resposta correta é a opção 1 (// Comentário de uma linha)
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "append()",
            "add()"
        ],
        correta: 0 // A resposta correta é a opção 1 (push())
    },
    {
        pergunta: "Qual é o resultado da expressão typeof 'hello' em JavaScript?",
        respostas: [
            "string",
            "number",
            "object"
        ],
        correta: 0 // A resposta correta é a opção 1 ("string")
    }
];
setTimeout(() => {
    const quiz = document.querySelector('#quiz');
    const template = document.querySelector('#quiz-template');
    const corretas = new Set(); // Conjunto para armazenar as perguntas corretas
    const totaldeperguntas = perguntas.length;
    const mostrartotal = document.querySelector('#acertos span');

    for (let i = 0; i < perguntas.length; i++) { 
        const item = perguntas[i];
        const quizItem = template.content.cloneNode(true);
        quizItem.querySelector('h3').textContent = item.pergunta;

        for (let j = 0; j < item.respostas.length; j++) {
            const resposta = item.respostas[j];
            const dt = quizItem.querySelector('dl dt').cloneNode(true);
            dt.querySelector('span').textContent = resposta;
            dt.querySelector('input').setAttribute('name', `pergunta-${i}`);
            dt.querySelector('input').value = j; 
            dt.querySelector('input').onchange = (event) => {
                const estaCorreta = parseInt(event.target.value) === item.correta;

                if (estaCorreta) {
                    corretas.add(item.pergunta); // Adiciona a pergunta correta ao conjunto
                } else {
                    corretas.delete(item.pergunta); // Remove a pergunta correta do conjunto
                }
                mostrartotal.textContent = `${corretas.size} de ${totaldeperguntas}`;
            }
            quizItem.querySelector('dl').appendChild(dt);   
        }
        quizItem.querySelector('dl dt').remove();
        quiz.appendChild(quizItem);
    }
}, 500);
