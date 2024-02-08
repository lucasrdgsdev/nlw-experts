const perguntas = [
  {
    pergunta: "Qual é o principal objetivo da fisioterapia motora?",
    respostas: [
      "Aumentar a capacidade pulmonar",
      "Restaurar a função motora",
      "Melhorar a visão"
    ],
    correta: 1
  },
  {
    pergunta: "Qual técnica é comumente utilizada na fisioterapia para melhorar a amplitude de movimento?",
    respostas: [
      "Massagem cardíaca",
      "Exercícios de fortalecimento",
      "Acupuntura"
    ],
    correta: 2
  },
  {
    pergunta: "Em que condição clínica a fisioterapia motora pode ser aplicada?",
    respostas: [
      "Insônia",
      "Doença cardiovascular",
      "Alergias sazonais"
    ],
    correta: 1
  },
  {
    pergunta: "Quais são os benefícios da fisioterapia motora para pacientes com lesões neuromusculares?",
    respostas: [
      "Diminuição da mobilidade",
      "Aumento da dor",
      "Melhora na coordenação motora"
    ],
    correta: 2
  },
  {
    pergunta: "O que é a neuroplasticidade no contexto da fisioterapia motora?",
    respostas: [
      "Uma técnica de massagem",
      "A capacidade do cérebro de se adaptar e remodelar",
      "Um tipo de exercício cardiovascular"
    ],
    correta: 1
  },
  {
    pergunta: "Quais atividades podem ser incluídas em um programa de fisioterapia motora para idosos?",
    respostas: [
      "Aulas de culinária",
      "Exercícios de equilíbrio e marcha",
      "Assistir televisão"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a importância da avaliação inicial na fisioterapia motora?",
    respostas: [
      "Não é relevante",
      "Ajuda a identificar as necessidades do paciente",
      "Atrasa o processo de recuperação"
    ],
    correta: 1
  },
  {
    pergunta: "Quando a fisioterapia motora é frequentemente indicada após uma cirurgia?",
    respostas: [
      "Nunca é indicada",
      "Sempre é indicada",
      "Depende do tipo de cirurgia e das necessidades do paciente"
    ],
    correta: 2
  },
  {
    pergunta: "O que são exercícios isométricos na fisioterapia motora?",
    respostas: [
      "Exercícios que envolvem movimentos rápidos",
      "Exercícios que envolvem contração muscular sem movimento",
      "Exercícios de respiração profunda"
    ],
    correta: 1
  },
  {
    pergunta: "Quais são os sinais de alerta durante uma sessão de fisioterapia motora?",
    respostas: [
      "Desconforto leve",
      "Dor persistente e aumento da dor",
      "Fadiga moderada"
    ],
    correta: 2
  }
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