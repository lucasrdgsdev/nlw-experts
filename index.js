const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const myVar = 10;",
        "var myVar = 10;",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para imprimir mensagens no console?",
      respostas: [
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Como você verifica o tipo de uma variável em JavaScript?",
      respostas: [
        "typeOf()",
        "typeof()",
        "type()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Uma função",
        "Um tipo de dado",
        "Um operador lógico",
      ],
      correta: 1
    },
    {
      pergunta: "Como você adiciona um elemento no final de um array?",
      respostas: [
        "array.add()",
        "array.push()",
        "array.append()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um loop 'for' em JavaScript?",
      respostas: [
        "Uma estrutura condicional",
        "Um tipo de dado",
        "Uma estrutura de repetição",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de valor e tipo",
        "Atribuição de valor",
        "Comparação de valor",
      ],
      correta: 0
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "convertToNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "myFunction: function() {}",
        "const myFunction = () => {}",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
   
  for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if(estaCorreta) {
        corretas.add(item)
       }
  
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     }
  
     quizItem.querySelector('dl').appendChild(dt)
  
  }
   
   quizItem.querySelector('dl dt').remove()
   
  
    // coloca as perguntas na tela
    quiz.appendChild(quizItem)
  }