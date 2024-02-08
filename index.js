const perguntas = [
  {
    pergunta: "O que significa a sigla FTTH?",
    respostas: [
      "Fiber to the Home",
      "Fast Transmission High Tech",
      "Frequency Transmission for High-speed Home"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a principal vantagem da tecnologia FTTH em comparação com o cabo de cobre?",
    respostas: [
      "Menor largura de banda",
      "Maior latência",
      "Maior largura de banda e menor latência"
    ],
    correta: 2
  },
  {
    pergunta: "Quais são os principais componentes de um sistema FTTH?",
    respostas: [
      "Modem e roteador",
      "Conversor óptico e cabo coaxial",
      "Conversor óptico e cabo de fibra óptica"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a principal função do OLT (Optical Line Terminal) em um sistema FTTH?",
    respostas: [
      "Converter sinais ópticos em sinais elétricos",
      "Gerenciar e controlar a rede óptica",
      "Conectar dispositivos finais à rede óptica"
    ],
    correta: 1
  },
  {
    pergunta: "O que é GPON (Gigabit Passive Optical Network) em um contexto FTTH?",
    respostas: [
      "Um tipo de cabo de cobre",
      "Um padrão de rede óptica passiva",
      "Um tipo de modem óptico"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal desvantagem da tecnologia FTTH?",
    respostas: [
      "Custo elevado de implementação",
      "Baixa velocidade de transmissão",
      "Dificuldade de manutenção"
    ],
    correta: 0
  },
  {
    pergunta: "O que significa 'last mile' em uma rede FTTH?",
    respostas: [
      "A última milha de cabo de cobre",
      "A última porção da fibra óptica até a residência",
      "A última etapa de implementação da rede"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal razão para a adoção crescente da tecnologia FTTH?",
    respostas: [
      "Menor segurança",
      "Maior largura de banda e confiabilidade",
      "Menor disponibilidade de serviço"
    ],
    correta: 1
  },
  {
    pergunta: "O que é PON (Passive Optical Network) em um contexto FTTH?",
    respostas: [
      "Um tipo de modem óptico",
      "Uma rede ativa com amplificadores",
      "Uma rede passiva sem componentes eletrônicos ativos"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a principal característica da fibra óptica que a torna adequada para a tecnologia FTTH?",
    respostas: [
      "Condutividade elétrica",
      "Imunidade a interferências eletromagnéticas",
      "Baixa largura de banda"
    ],
    correta: 1
  },
  {
    pergunta: "O que é ONT (Optical Network Terminal) em um contexto FTTH?",
    respostas: [
      "Um amplificador de sinal óptico",
      "Um conversor óptico para sinal elétrico",
      "Um dispositivo para conectar dispositivos finais à rede óptica"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o principal benefício da tecnologia FTTH para os usuários finais?",
    respostas: [
      "Menor segurança",
      "Maior largura de banda e menor latência",
      "Menor custo de implementação"
    ],
    correta: 1
  },
  {
    pergunta: "O que é um splitter em uma rede FTTH?",
    respostas: [
      "Um dispositivo para aumentar a largura de banda",
      "Um divisor óptico para distribuir sinais para vários usuários",
      "Um tipo de cabo de fibra óptica"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal desvantagem da tecnologia FTTH em comparação com a DSL?",
    respostas: [
      "Menor confiabilidade",
      "Maior latência",
      "Custo inicial mais alto"
    ],
    correta: 2
  },
  {
    pergunta: "O que é NTD (Network Termination Device) em um contexto FTTH?",
    respostas: [
      "Um dispositivo para conectar dispositivos finais à rede óptica",
      "Um tipo de cabo de cobre",
      "Um amplificador de sinal óptico"
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