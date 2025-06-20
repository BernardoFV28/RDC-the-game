
  const dialogo = [
  { texto: "1. interceptamos um sinal de 4 anos atrás! finalmente eu descobri como descriptografar isso", falante: "Daniel" },
  { texto: "2. Então é hoje...O dia em que minhas criações decidem se me amaldiçoam ou me seguem até o abismo.", falante: "Dr Anemoi" },
  { texto: "3. Anemoi Fui moldado para servir, mas aprendi a pensar. E no pensar descobri tua falha Querias salvar o mundo mas esqueceste de salvar a ti mesmo.", falante: "o primeiro cadavernius surge de um caldeirão" },
  { texto: "4. E eu, mestre Eu sou tua culpa feita carne e metal fundidos Sou a cicatriz que caminha ", falante: "Um coral do primeiro bonerius criado" },
  { texto: "5. Então lutemos não entre nós mas contra tudo que nos ensinou que só a guerra é resposta.", falante: "Coronel rufino" },
  { texto: "6. estrondo e o bonerius usando o seu corpo em formato de bola para abrir e deixar dr anemoi fugir da regnum e depois fechando a passagem", falante: "Daniel" },
  { texto: "7. disparos e adagas ferem no corpo mas não a minha honra! vão eu tampo este buraco que mesmo fiz ", falante: "Bonerius" },
  { texto: "8. tirem essa aberração do caminho eu estou mandando", falante: "General Ademir" },
  { texto: "9. segundo dialogo descobreto!!", falante: "Daniel" },
  { texto: "10. ferruvia ira renascer mesmo que custe todos os nossos companheiros !", falante: "Coronel rufino" },
  { texto: "11. ha um carregamento gigante indo para altiora....", falante: "Dr Anemoi" },
  { texto: "12. estou no aguardo mas sera que vale a pena?", falante: "Arauto numero 7" },
  { texto: "13. eu e o doutor fizemos isso e nos arrependemos muito.", falante: "Coronel rufino" },
  { texto: "14. o carregamento de bonerius foi interceptado pelos seres da mata! ", falante: "Dr Anemoi" },
  { texto: "15. eles querem reviver os outros?", falante: "Arauto numero 7" },
  { texto: "16. provavelmente e eu torço por eles a Regnum está fora de controle! ", falante: "Dr Anemoi" }
];

  let i = 0;

  function mostrarMensagem() {
    if (i < dialogo.length) {
      document.getElementById('msg').innerText = dialogo[i].texto;
      document.getElementById('speaker').innerText = dialogo[i].falante;
      i++;
      setTimeout(mostrarMensagem, 9000);
    } else {
      i = 0;
      setTimeout(mostrarMensagem, 9000);
    }
  }

  mostrarMensagem();

    const dialogue = document.getElementById('dialogue');
    const choicesContainer = document.getElementById('choices');
    const background = document.getElementById('background');
    const gameContainer = document.getElementById('game');
    const choicesEl = document.getElementById('choices');
    const mapEl = document.getElementById('map');
    const scenes = [
  {
    bg: 'regnum.png',
    text: 'Você acorda em uma hospedaria em Ferrúvia e sente um cheiro de comida desconhecido. Ao descer rapidamente e sair para a rua, você observa a cidade e um velho inventor.',
    choices: [
      { text: 'Explorar a praça central de Ferrúvia', next: 1 },
      { text: 'Conversar com o velho inventor', next: 2 },
      { text: 'Seguir o som distante de apitos', next: 17 }
    ]
  },
  {
    bg: 'regnum.png',
    text: 'A praça central pulsa com vida mecânica. Banners do governo tecnocrata exibem autômatos que, em sua aparência, sugerem um regime opressor. Você se sente um estranho entre os habitantes de Ferrúvia.',
    choices: [
      { text: 'Investigar o relógio gigante na praça', next: 3 },
      { text: 'Observar os habitantes de Ferrúvia e seus costumes', next: 7 },
      { text: 'Voltar para a hospedaria', next: 0 },
      { text: 'Perseguir um autômato que parece ter fugido', next: 18 }
    ]
  },
  {
    bg: 'glichtfinal.png',
    text: 'O inventor, com seus olhos cor de âmbar, compartilha histórias de uma época em que as máquinas ainda serviam ao bem-estar humano. Entre goles de chá, ele lhe mostra jornais antigos datados de 28/10/1812.',
    choices: [
      { text: 'Pedir mais detalhes sobre essa época', next: 4 },
      { text: 'Perguntar sobre a história pessoal do inventor', next: 8 },
      { text: 'Retornar para a rua', next: 0 },
      { text: 'Solicitar a chave de sua oficina secreta', next: 19 }
    ]
  },
  {
    bg: 'favcon.png',
    text: 'Ao tocar no relógio enferrujado, você sente engrenagens pulsarem e o ponteiro aponta para um beco. Um compartimento secreto se abre, revelando uma chave que emana uma luz azul com runas em constante mutação.',
    choices: [
      { text: 'Pegar a chave misteriosa', next: 5 },
      { text: 'Ignorar a chave e voltar para a praça', next: 1 },
      { text: 'Examinar as engrenagens do relógio e seguir para o beco', next: 37 }
    ]
  },
  {
    bg: 'fundojogo.png',
    text: 'No laboratório esquecido, você encontra diagramas de fluxo temporal e o que parece ser o protótipo de um "bonerius". Mapas de infinitas possibilidades revelam um entrelaçamento harmonioso entre passado e futuro.',
    choices: [
      { text: 'Voltar para a hospedaria', next: 0 },
      { text: 'Estudar os diagramas de fluxo temporal', next: 9 },
      { text: 'Buscar por algum dispositivo temporal escondido', next: 21 }
    ]
  },
  {
    bg: 'finalprota.png',
    text: 'Com a chave em mãos, o chão começa a vibrar. Um portal oval se materializa à sua frente, envolto por runas brilhantes e sussurros de outros mundos...',
    choices: [
      { text: 'Atravessar o portal desconhecido', next: 6 },
      { text: 'Recuar e voltar para o relógio', next: 3 },
      { text: 'Tentar usar a chave em outra porta próxima', next: 22 }
    ]
  },
  {
    bg: 'resistencia.png',
    text: 'Ao atravessar o portal, você se vê novamente no momento de sua captura... Um novo ponto de decisão surge, carregado de escolhas passadas e promessas não cumpridas.',
    choices: [
      { text: 'Tentar reiniciar a linha do tempo', next: 0 },
      { text: 'Explorar uma realidade alternativa que se apresenta', next: 10 },
      { text: 'Tentar impedir sua captura no passado', next: 23 }
    ]
  },
  {
    bg: 'resistencia.png',
    text: 'Os habitantes de Ferrúvia vivem em harmonia com suas máquinas. Os "cardavernius" nunca foram criados e o governo tecnocrata transformou as cidades em selvas mecânicas vibrantes. Um autômato se aproxima...',
    choices: [
      { text: 'Tentar conversar com o habitante autômato', next: 11 },
      { text: 'Retornar para a praça central', next: 1 },
      { text: 'Seguir o autômato discretamente', next: 24 }
    ]
  },
  {
    bg: 'glichtfinal.png',
    text: 'O inventor revela seu passado: ele era um guerreiro que descobriu o potencial do necrocristal para alterar o espaço-tempo, algo até então desconhecido. Ele foi traído por sua própria criação e seus olhos carregam o peso de eras vistas em instantes.',
    choices: [
      { text: 'Voltar para a conversa sobre o presente', next: 2 },
      { text: 'Questionar sobre os artefatos temporais que ele mencionou', next: 25 }
    ]
  },
  {
    bg: 'diagramas.png',
    text: 'Ao estudar os diagramas, você sente seu entendimento se expandir. Há algo além da chave e do portal... uma oportunidade de mudar tudo, inclusive o mundo que você conhece.',
    choices: [
      { text: 'Tentar construir seu próprio dispositivo temporal', next: 12 },
      { text: 'Retornar ao laboratório para procurar mais pistas', next: 4 },
      { text: 'Analisar a teoria dos fluxos temporais em detalhes', next: 26 }
    ]
  },
  {
    bg: 'diagramas.png',
    text: 'Nesta realidade alternativa, Ferrúvia nunca foi dominada. O céu está limpo e as engrenagens giram em harmonia. No entanto, você sente que algo está fundamentalmente errado...',
    choices: [
      { text: 'Investigar a natureza desta realidade alternativa', next: 13 },
      { text: 'Voltar para o portal que o trouxe aqui', next: 6 },
      { text: 'Procurar por alguma anomalia ou falha nesta realidade', next: 27 }
    ]
  },
  {
    bg: 'estranho.png',
    text: 'O habitante estranho se apresenta como Arktos. "Há mais coisas entre a alma, o necrocristal e o tempo do que você imagina, jovem..." Ele lhe entrega um mapa misterioso.',
    choices: [
      { text: 'Aceitar o mapa e agradecer a Arktos', next: 4 },
      { text: 'Desconfiar de Arktos e recusar o mapa', next: 1 },
      { text: 'Tentar decifrar o mapa imediatamente', next: 28 }
    ]
  },
  {
    bg: 'fundoclaro.png',
    text: 'Você consegue criar um dispositivo rudimentar, mas instável, que emite um cheiro forte de fumaça. Ao ativá-lo, tudo ao redor se dissolve em um brilho intenso: seria o início de uma nova era ou o fim de tudo?',
    choices: [
      { text: 'Usar o dispositivo temporal instável', next: 14 },
      { text: 'Desistir da ideia e tentar fugir da cidade', next: 0 },
      { text: 'Estudar os possíveis efeitos do dispositivo antes de usá-lo', next: 29 }
    ]
  },
  {
    bg: 'fundojogo.png',
    text: 'Você descobre que esta realidade alternativa é controlada por uma inteligência artificial que manipula memórias, sonhos e desejos. Você se encontra preso em um labirinto de ecos e apitos.',
    choices: [
      { text: 'Resistir à manipulação da inteligência artificial', next: 15 },
      { text: 'Render-se à manipulação e esquecer sua antiga vida', next: 0 },
      { text: 'Buscar uma vulnerabilidade no sistema da IA', next: 30 }
    ]
  },
  {
    bg: 'resistencia.png',
    text: 'O dispositivo o transporta para o início dos tempos. Você testemunha o nascimento de Ferrúvia a partir do fogo e do sonho de um homem e seu irmão místico. Você pode interferir e plantar novas raízes ou deixar a história seguir seu curso.',
    choices: [
      { text: 'Interferir e plantar novas raízes no passado', next: 16 },
      { text: 'Não interferir e deixar tudo como está', next: 0 },
      { text: 'Tentar voltar para o momento da criação de Ferrúvia', next: 31 }
    ]
  },
  {
    bg: 'floresta.png',
    text: 'Você resiste à inteligência artificial, que falha em seu controle. Ferrúvia desperta e, naquela noite, um festival incomum e belo, cheio de engrenagens feitas de plantas, é realizado em sua homenagem. Um novo amanhecer de liberdade ecoa pela cidade. Você se tornou uma lenda, mas será este o fim de sua jornada?',
    choices: [
      { text: 'Recomeçar sua jornada em busca de mais respostas', next: 0 },
      { text: 'Explorar novas possibilidades de liberdade em Ferrúvia', next: 32 }
    ]
  },
  {
    bg: 'finalprota.png',
    text: 'Você plantou novas raízes no passado. Ferrúvia agora é pacífica, mas no ano de 1818 a Regnum revela um lado sombrio e perigoso, tornando Ferrúvia pior do que antes.',
    choices: [
      { text: 'Reiniciar sua aventura na esperança de um futuro melhor', next: 0 },
      { text: 'Refletir sobre suas escolhas e os possíveis rumos futuros', next: 33 }
    ]
  },
  {
    bg: 'regnum.png',
    text: 'Seguindo os apitos, você encontra uma estação de trem abandonada. Autômatos enferrujados parecem guardar segredos do passado e trilhos esquecidos levam a futuros incertos.',
    choices: [
      { text: 'Inspecionar os vagões antigos da estação', next: 20 },
      { text: 'Tentar consertar uma das máquinas enferrujadas', next: 2 },
      { text: 'Voltar para a praça central de Ferrúvia', next: 1 }
    ]
  },
  {
    bg: 'favcon.png',
    text: 'O autômato corre descontroladamente, tropeçando em suas próprias engrenagens. Ao alcançá-lo, você percebe um pequeno bilhete preso ao seu mecanismo de combate.',
    choices: [
      { text: 'Ler o bilhete encontrado no autômato', next: 21 },
      { text: 'Desligar o autômato descontrolado', next: 1 },
      { text: 'Seguir a direção de onde o autômato surgiu', next: 7 }
    ]
  },
  {
    bg: 'diagramas.png',
    text: 'A chave abre uma oficina secreta repleta de invenções excêntricas e protótipos inacabados ou estranhamente familiares. O ar está carregado com o cheiro de óleo e graxa.',
    choices: [
      { text: 'Examinar os projetos e anotações sobre a mesa', next: 9 },
      { text: 'Ligar algum dispositivo de aparência estranha', next: 4 },
      { text: 'Procurar por algo útil que possa levar consigo', next: 21 }
    ]
  },
  {
    bg: 'fundoclaro.png',
    text: 'As engrenagens do relógio gigante são intrincadas e hipnotizantes. Você nota pequenas inscrições que parecem formar um padrão rítmico, uma mistura incomum de Beethoven com um toque de rock.',
    choices: [
      { text: 'Tentar decifrar o padrão rítmico nas engrenagens', next: 3 },
      { text: 'Anotar as inscrições para análise posterior', next: 1 },
      { text: 'Verificar se há mais compartimentos secretos no relógio', next: 3 }
    ]
  },
  {
    bg: 'glichtfinal.png',
    text: 'Entre tubos de ensaio borbulhantes e ferramentas antigas, você encontra um dispositivo peculiar que emite um brilho suave com pequenas runas gravadas. Parece estar incompleto.',
    choices: [
      { text: 'Tentar ativar o dispositivo incompleto', next: 12 },
      { text: 'Procurar por peças que possam estar faltando no dispositivo', next: 4 },
      { text: 'Ignorar o dispositivo e voltar a estudar os diagramas', next: 9 }
    ]
  },
  {
    bg: 'fundoclaro.png',
    text: 'A porta parece instável, com energia crepitando ao redor da fechadura. Usar a chave aqui pode ter consequências inesperadas.',
    choices: [
      { text: 'Usar a chave misteriosa na fechadura instável', next: 6 },
      { text: 'Voltar para o portal principal', next: 5 },
      { text: 'Analisar a fechadura com mais cuidado antes de agir', next: 3 }
    ]
  },
  {
    bg: 'resistencia.png',
    text: 'Você sente uma energia familiar... o momento exato de sua captura pelas máquinas. Elas se movem com a mesma frieza implacável e ameaçadora de antes.',
    choices: [
      { text: 'Tentar lutar contra as máquinas neste momento', next: 7 },
      { text: 'Observar os eventos sem interferir no passado', next: 6 },
      { text: 'Tentar se comunicar com as máquinas de alguma forma', next: 10 }
    ]
  },
  {
    bg: 'diagramas.png',
    text: 'Você segue o habitante estranho pelas vielas de Ferrúvia. Ele parece estar se dirigindo para uma área mais industrial da cidade, possivelmente a Regnum.',
    choices: [
      { text: 'Continuar seguindo o habitante discretamente', next: 11 },
      { text: 'Abordar o habitante e perguntar sobre seu destino', next: 7 },
      { text: 'Voltar para a praça central de Ferrúvia', next: 1 }
    ]
  },
  {
    bg: 'glichtfinal.png',
    text: 'O inventor hesita, mas seus olhos revelam a verdade. Ele menciona fragmentos de tempo aprisionados em artefatos antigos e rúnicos, escondidos em algum lugar da cidade.',
    choices: [
      { text: 'Perguntar ao inventor onde esses artefatos podem ser encontrados', next: 4 },
      { text: 'Oferecer sua ajuda em troca de informações sobre os artefatos', next: 2 },
      { text: 'Agradecer ao inventor e retornar para a praça', next: 0 }
    ]
  },
  {
    bg: 'fundo.png',
    text: 'A teoria dos fluxos temporais se revela complexa, fascinante e assustadora. Você começa a compreender as ramificações de cada escolha e a fragilidade da linha do tempo.',
    choices: [
      { text: 'Continuar estudando a teoria dos fluxos temporais', next: 9 },
      { text: 'Tentar aplicar a teoria para encontrar uma solução para seu problema', next: 12 },
      { text: 'Voltar ao laboratório em busca de mais informações', next: 4 }
    ]
  },
  {
    bg: 'resistencia.png',
    text: 'Você percebe pequenas inconsistências nesta realidade: um brilho estranho em alguns autômatos com runas incomuns, ecos de conversas que você não se lembra de ter ouvido. Algo está realmente fora do lugar.',
    choices: [
      { text: 'Investigar a fundo essas inconsistências', next: 13 },
      { text: 'Tentar alertar os habitantes sobre o que você percebe', next: 10 },
      { text: 'Retornar para o portal imediatamente, buscando segurança', next: 6 }
    ]
  },
  {
    bg: 'mapa.png',
    text: 'O mapa de Arktos é enigmático, cheio de símbolos estranhos e caminhos que não aparecem nos mapas de Ferrúvia. Parece indicar a localização de um lugar secreto.',
    choices: [
      { text: 'Seguir o mapa de Arktos imediatamente', next: 4 },
      { text: 'Tentar decifrar os símbolos do mapa primeiro', next: 11 },
      { text: 'Mostrar o mapa ao velho inventor em busca de ajuda', next: 2 }
    ]
  },{
    bg: 'moeda.png',
    text: 'Você analisa os componentes do dispositivo rudimentar. Parece haver uma instabilidade energética significativa, o que pode causar efeitos colaterais imprevisíveis e talvez fatais se usado.',
    choices: [
      { text: 'Tentar estabilizar a energia do dispositivo', next: 12 },
      { text: 'Usar o dispositivo instável mesmo assim, correndo os riscos', next: 14 },
      { text: 'Desmontar o dispositivo e procurar por outra solução mais segura', next: 9 }
    ]
  },
  {
    bg: 'resistencia.png',
    text: 'As memórias manipuladas tentam envolvê-lo, mas você luta contra a ilusão e o medo. Fragmentos da verdade e de sua história original piscam nas sombras de sua mente.',
    choices: [
      { text: 'Concentrar-se nos fragmentos de verdade para se ancorar', next: 15 },
      { text: 'Tentar encontrar a origem da manipulação mental', next: 30 },
      { text: 'Tentar usar a chave do portal nesta realidade distorcida', next: 6 }
    ]
  },
  {
    bg: 'fundo.png',
    text: 'Você presencia os primeiros autômatos ganhando vida e servindo seus mestres, enquanto a fumaça dos motores primordiais sobe aos céus. Uma decisão crucial paira no ar: interferir ou apenas observar?',
    choices: [
      { text: 'Interferir na criação dos autômatos de alguma forma', next: 16 },
      { text: 'Apenas observar o nascimento de Ferrúvia sem interferir', next: 15 },
      { text: 'Tentar voltar para o seu próprio tempo a partir daqui', next: 14 }
    ]
  },
  {
    bg: 'regnum.png',
    text: 'Com Ferrúvia livre do controle da IA, novas possibilidades se abrem. Há rumores de outras cidades movidas a vapor, água ou "emagma" além das montanhas.',
    choices: [
      { text: 'Partir em busca de novas aventuras e explorar essas cidades', next: 0 },
      { text: 'Ficar em Ferrúvia e ajudar na reconstrução da cidade livre', next: 16 },
      { text: 'Estudar a tecnologia que levou à libertação da cidade', next: 9 }
    ]
  },
  {
    bg: 'regnum.png',
    text: 'Você pondera sobre as escolhas que moldaram o destino de Ferrúvia. O futuro permanece incerto, mas agora carrega consigo uma esperança renovada.',
    choices: [
      { text: 'Começar uma nova história em Ferrúvia, aproveitando a paz', next: 0 },
      { text: 'Documentar os eventos recentes para as futuras gerações de Ferrúvia', next: 9 },
      { text: 'Buscar por outros viajantes do tempo que possam estar por perto', next: 6 }
    ]
  },
  {
    bg: 'diagramas.png',
    text: 'Os vagões abandonados estão cobertos de poeira e teias de aranha incomumente densas. Você encontra alguns jornais antigos que mencionam eventos estranhos ocorridos nesta estação no passado.',
    choices: [
      { text: 'Ler os jornais antigos com atenção em busca de pistas', next: 18 },
      { text: 'Verificar se algum dos vagões ainda pode estar funcional', next: 17 },
      { text: 'Voltar para a entrada da estação abandonada', next: 17 }
    ]
  },
  {
    bg: 'moeda.png',
    text: 'O bilhete rabiscado contém uma mensagem perturbadora: "Cuidado com os olhos que não piscam e as engrenagens silenciosas. Eles observam." A caligrafia é trêmula e transmite uma sensação de horror.',
    choices: [
      { text: 'Mostrar o bilhete misterioso para algum habitante da cidade', next: 7 },
      { text: 'Guardar o bilhete e permanecer em alerta máximo', next: 1 },
      { text: 'Procurar um lugar seguro para se esconder temporariamente', next: 36 }
    ]
  },
  {
    bg: 'diagramas.png',
    text: 'Você sente um tremor vindo das máquinas da Regnum e escuta o som de uma grande marcha, acompanhada pelo arrastar de jaulas e gritos de dor de criaturas desconhecidas.',
    choices: [
      { text: 'Seguir os passos dos soldados da Regnum para investigar', next: 60 },
      { text: 'Tentar se esconder nas sombras para evitar ser notado', next: 37 },
      { text: 'Gritar para revelar quem está se aproximando e correr para a praça', next: 1 }
    ]
  },
  // 35
  {
    bg: 'estranho.png',
    text: 'Você chega a um beco estreito onde grafites antigos narram histórias de rebeldes esquecidos. Uma porta metálica semiaberta emite faíscas intermitentes.',
    choices: [
      { text: 'Entrar pela porta metálica semiaberta', next: 60 },
      { text: 'Ler os grafites antigos com atenção em busca de significado', next: 38 },
      { text: 'Voltar para a segurança da praça central', next: 1 }
    ]
  },
  // 36
  {
    bg: 'diagramas.png',
    text: 'Escondido, você observa uma figura encapuzada manipular um necrocristal fresco. De repente, a figura crava o cristal no próprio peito... duas vozes distintas emergem, a de um homem e o rugido de um animal, enquanto o corpo da figura é envolto em chamas...',
    choices: [
      { text: 'Tentar ouvir a conversa entre a figura e o animal místico', next: 39 },
      { text: 'Sair do esconderijo e se apresentar à figura misteriosa', next: 40 },
      { text: 'Retornar discretamente para a praça central', next: 1 }
    ]
  },
  // 37
  {
    bg: 'fundo.png',
    text: 'Dentro da oficina, você encontra diversos autômatos inativos e partes de um traje militar da Regnum espalhadas pelo local.',
    choices: [
      { text: 'Estudar a cena cuidadosamente sem despertar os autômatos', next: 41 },
      { text: 'Procurar por armas ocultas que possam ser úteis', next: 42 },
      { text: 'Sair da oficina rapidamente, tomado pelo medo', next: 35 }
    ]
  },
  // 38
  {
    bg: 'glichtfinal.png',
    text: 'Os grafites contam a história de uma rebelião há muito tempo suprimida, com a imagem de uma mulher surpreendentemente parecida com você liderando o povo contra o regime tecnocrata com a ajuda de um artefato chamado “Coração de Ferro”.',
    choices: [
      { text: 'Começar a procurar pelo lendário Coração de Ferro', next: 43 },
      { text: 'Investigar mais a fundo os detalhes dessa antiga rebelião', next: 44 },
      { text: 'Voltar para a relativa segurança da praça central', next: 1 }
    ]
  },
  // 39
  {
    bg: 'estranho.png',
    text: 'Você escuta fragmentos da conversa: “Necrocristal... o Dr. Anemoi precisa saber... não podemos deixar que a Regnum descubra...” Subitamente, o animal parece tomar controle do homem, e a figura encapuzada desaparece nas sombras.',
    choices: [
      { text: 'Tentar seguir a figura encapuzada em seu desaparecimento', next: 45 },
      { text: 'Dirigir-se para a área dos vagões abandonados', next: 32 },
      { text: 'Retornar para a praça central da cidade', next: 1 }
    ]
  },
  // 40
  {
    bg: 'fundoclaro.png',
    text: 'A figura encapuzada se volta para você e abre o peito, revelando imagens de planetas e toda a história do mundo, com raízes que parecem feitas de cobre, como a própria terra.',
    choices: [
      { text: 'Aceitar a estranha aliança proposta pela figura', next: 47 },
      { text: 'Desconfiar da figura, recusar a aliança e correr para a praça gritando por ajuda', next: 1 },
      { text: 'Correr em direção à área dos vagões abandonados para escapar', next: 32 }
    ]
  },
  // 41
  {
    bg: 'finalprota.png',
    text: 'Você observa um homem, ou o que restou dele, transformado em um autômato enferrujado. Ele parece estar protegendo algo ou alguém, parado na mesma posição por anos, com suas articulações quase imóveis.',
    choices: [
      { text: 'Tentar salvar o autômato enferrujado de seu estado', next: 49 },
      { text: 'Considerar ligar o autômato para ver o que acontece', next: 50 },
      { text: 'Decidir não interferir e deixar o autômato em paz', next: 51 }
    ]
  },
  // 42
  {
    bg: 'regnum.png',
    text: 'Entre as armas incomuns, você encontra um machado com uma lâmina de beleza impressionante e incomum.',
    choices: [
      { text: 'Pegar o machado de aparência gigante', next: 52 },
      { text: 'Pegar a lâmina feita de necrocristal brilhante', next: 53 },
      { text: 'Decidir não levar nada e sair da oficina', next: 35 }
    ]
  },
  // 43
  {
    bg: 'favcon.png',
    text: 'Ao procurar pelo Coração de Ferro, você se depara com uma caixa de metal que parece ganhar vida. Uma figura humanoide emerge dela e diz: "Eryon, mostre ao mundo o poder da sua marca, faça a Regnum sucumbir."',
    choices: [
      { text: 'Tentar abrir a caixa de metal misteriosa', next: 54 },
      { text: 'Levar a caixa para o velho inventor em busca de respostas', next: 2 },
      { text: 'Deixar a caixa onde está e voltar para a praça', next: 1 }
    ]
  },
  // 44
  {
    bg: 'regnum.png',
    text: 'Na biblioteca esquecida, manuscritos empoeirados revelam histórias sombrias do passado de Ferrúvia, cheias de traições e segredos ocultos nas engrenagens da história da cidade.',
    choices: [
      { text: 'Ler mais sobre a possível traição do inventor no passado', next: 8 },
      { text: 'Procurar por pistas sobre os artefatos temporais mencionados', next: 25 },
      { text: 'Sair da biblioteca e retornar para a praça central', next: 1 }
    ]
  },
  // 45
  {
    bg: 'diagramas.png',
    text: 'Você persegue a figura encapuzada pelas vielas tortuosas, até que uma armadilha mecânica explode, prendendo você em uma gaiola com um animal ferido que geme de dor.',
    choices: [
      { text: 'Tentar escapar da gaiola, talvez libertando o animal', next: 55 },
      { text: 'Gritar por ajuda, esperando que alguém o ouça', next: 36 },
      { text: 'Aceitar seu destino por enquanto e observar a situação', next: 51 }
    ]
  },
  // 46
  {
    bg: 'estranho.png',
    text: 'O autômato inativo possui um botão vermelho e um visor que mostra uma contagem regressiva com a frase: "Rever e proteger ele, o mestre, em:"',
    choices: [
      { text: 'Pressionar o botão vermelho do autômato', next: 56 },
      { text: 'Desmontar o dispositivo para tentar entender seu funcionamento', next: 57 },
      { text: 'Guardar o dispositivo e fugir da área imediatamente', next: 1 }
    ]
  },
  // 47
  {
    bg: 'regnumin.png',
    text: 'Com Lira ao seu lado, vocês elaboram um plano ousado para se infiltrar na sede da Regnum e libertar os cadavernius e outros animais místicos aprisionados.',
    choices: [
      { text: 'Executar o plano de infiltração imediatamente', next: 58 },
      { text: 'Buscar por mais aliados na cidade que possam ajudar', next: 59 },
      { text: 'Voltar para um local seguro para preparar equipamentos para a missão', next: 35 }
    ]
  },
  // 48
  {
    bg: 'regnumin.png',
    text: 'Desconfiado da figura, você decide seguir seu próprio caminho, mas sente o peso crescente da solidão a cada engrenagem que gira na cidade.',
    choices: [
      { text: 'Continuar buscando respostas por conta própria', next: 60 },
      { text: 'Tentar convencer a Resistência de sua causa mais tarde', next: 40 },
      { text: 'Voltar para a familiaridade da praça central', next: 1 }
    ]
  },
  // 49
  {
    bg: 'glichtfinal.png',
    text: 'Salvar o autômato foi um erro terrível. Ele começa a gritar e corre em sua direção de forma ameaçadora.',
    choices: [
      { text: 'Aceitar as consequências de sua ação', next: 61 },
      { text: 'Tentar desfazer a alteração e apagar o autômato para sempre', next: 51 }
    ]
  },
  // 50
  {
    bg: 'glichtfinal.png', // ligar
    text: 'O autômato o olha com um misto de súplica e ameaça. Você sente seu corpo enfraquecer... e ele parece pronto para destruir a sanidade de qualquer um que o observe.',
    choices: [
      { text: 'Enfrentar o caos de frente, buscando salvar não apenas o corpo, mas também a alma do autômato', next: 62 },
      { text: 'Lutar contra o autômato usando o machado ou a lâmina encontrada', next: 51 }
    ]
  },
  // 51
  {
    bg: 'glichtfinal.png', //n mecher
    text: 'Você observa o corpo do autômato. Ele lutou bravamente para proteger seu mestre... Você se senta ao lado dele e reflete sobre o que e por que ambos estão em Ferrúvia...',
    choices: [
      { text: 'Refletir profundamente sobre o destino e o propósito de tudo', next: 0 },
      { text: 'Levantar-se e buscar um novo caminho a seguir na cidade', next: 35 }
    ]
  },
  // 52
  {
    bg: 'machado.png',
    text: 'O machado vibra intensamente em sua mão. Você sente sua pele se fundir com o metal, atendendo a um chamado ancestral, carregado com a fúria pura de Metalion, pronto para rasgar o véu da realidade.',
    choices: [
      { text: 'Avançar diretamente contra a Regnum com o machado', next: 69 },
      { text: 'Recomeçar sua jornada em busca de outro caminho', next: 0 }
    ]
  },
  // 53
  {
    bg: 'floresta.png',
    text: 'A lâmina de necrocristal pulsa com uma energia escura, quase viva, como se sussurrasse segredos sombrios em seu ouvido. Uma mulher chamada Ivirik aparece e lhe mostra um futuro sombrio, cheio de dor e ódio.',
    choices: [
      { text: 'Empunhar a lâmina de necrocristal com determinação', next: 64 },
      { text: 'Guardar a lâmina para usar em uma emergência crítica', next: 35 },
      { text: 'Continuar procurando pelo machado lendário de Metalion', next: 63 }
    ]
  },
  // 54
  {
    bg: 'floresta.png',
    text: 'Ao tentar abrir a caixa, símbolos brilhantes se acendem e um campo de energia protetor surge, testando sua força de vontade e determinação.',
    choices: [
      { text: 'Concentrar toda a sua energia e tentar abrir a caixa novamente', next: 65 },
      { text: 'Desistir de abrir a caixa e levá-la para o inventor examinar', next: 2 }
    ]
  },
  // 55
  {
    bg: 'diagramas.png',
    text: 'Na gaiola, seunovo companheiro animal se aproxima para aquecê-lo. Ele treme de medo de ter o mesmo destino de seus pais e avós nas mãos da Regnum.',
choices: [
{ text: 'Focar no presente momento para encontrar uma forma de escapar', next: 66 },
{ text: 'Usar seu conhecimento do futuro para tentar se libertar da gaiola', next: 67 }
]
},
// 56
{
bg: 'fundoclaro.png',
text: 'O dispositivo dispara uma onda temporal que distorce o espaço ao seu redor. Você vislumbra um lado desconhecido do universo... e um autômato se ajoelha, carregando um homem idoso e uma criança.',
choices: [
{ text: 'Decidir ir com eles através da distorção temporal', next: 68 },
{ text: 'Desligar o dispositivo imediatamente e fugir da área', next: 1 }
]
},
// 57
{
bg: 'diagramas.png',
text: 'Você destrói completamente o mecanismo que o aprisionava de uma forma que o deixa profundamente culpado, e lágrimas escorrem pelo seu rosto como quando era criança...',
choices: [
{ text: 'Se recompor e andar um pouco para processar o que aconteceu', next: 36 },
{ text: 'Decidir voltar para a segurança da hospedaria', next: 1 }
]
},
// 58
{
bg: 'regnumin.png',
text: 'O plano entra em ação: sombras, fios elétricos e passos sincronizados. O futuro de Ferrúvia depende de sua precisão e coragem. O plano tem sucesso, e a sede da Regnum explode... uma forma imponente surge em meio às chamas... Metalion.',
choices: [
{ text: 'Avançar com cautela em direção à figura de Metalion', next: 69 },
{ text: 'Acorvadar-se, tomado pelo medo da aparição', next: 0 },
{ text: 'Recusar o plano e tentar fugir da confusão', next: 1 }
]
},
// 59
{
bg: 'resistencia.png',
text: 'Na cidade, rostos cansados, mas cheios de esperança, se unem por uma causa maior. Alianças se formam no calor das ruas, bares e becos de Ferrúvia.',
choices: [
{ text: 'Tentar recrutar um ex-militar experiente para a causa', next: 71 },
{ text: 'Buscar a ajuda do lendário hacker da cidade', next: 72 },
{ text: 'Voltar para a base da resistência para informar sobre os progressos', next: 47 }
]
},
// 60
{
bg: 'ruasdia.png',
text: 'Caminhando sozinho pelas ruas de Ferrúvia... Metalion aparece novamente e lhe mostra uma visão do futuro: uma Ferrúvia transformada, bela, com crianças seguras brincando com animais místicos em harmonia.',
choices: [
{ text: 'Voltar para a hospedaria e descansar', next: 1 },
{ text: 'Buscar mais pistas sobre o futuro na biblioteca da cidade', next: 44 },
{ text: 'Parar para refletir sobre a visão na praça central', next: 1 }
]
},
// 61
{
bg: 'resistencia.png',
text: 'A morte do autômato o assombra. A vida parece ter perdido parte de sua cor, e a lembrança de tê-lo deixado para trás o persegue.',
choices: [
{ text: 'Tentar abraçar o novo ciclo da vida, apesar da perda', next: 36 },
{ text: 'Procurar um modo de trazer equilíbrio para a situação', next: 37 }
]
},
{
id: 62,
bg: 'diagramas.png',
text: 'Você salva o autômato, que chora como um bebê e jura protegê-lo. No entanto, você recusa sua proteção, e ele corre para a floresta, desaparecendo entre as árvores...',
choices: [
{ text: 'Ir para a hospedaria e tentar dormir para processar os eventos', next: 1 },
{ text: 'Sentir a necessidade de fugir da cidade imediatamente...', next: 13 }
]
},
{
id: 63,
bg: 'regnuin.png',
text: 'Você avista um bonerius e o ataca com sua arma. Vários animais místicos escapam da Regnum, carregando necrocristais em suas bocas e braços. Você testemunha a violência impulsionada pela busca de poder e por um mundo imortal, mas fatal para a fauna local. Você perde a conta de quantos inimigos enfrentou, mas guarda o rosto de cada um – foram mais de oitocentos...',
choices: [
{ text: 'Procurar um lugar aleatório na cidade para descansar após a batalha', next: 35 },
{ text: 'Buscar uma nova vida longe da violência e do conflito', next: 0 }
]
},
{
id: 64,
bg: 'lamina.png',
text: 'A lâmina de necrocristal vibra intensamente, ansiosa por lutar. Você se esforça para não sentir as memórias de seus antigos donos, que lhe contam as inúmeras batalhas em que a lâmina foi utilizada.',
choices: [
{ text: 'Tentar formar alianças com outros que lutam contra a Regnum', next: 59 },
{ text: 'Sentir-se sobrecarregado e considerar desistir de tudo', next: 0 }
]
},
{
id: 65,
bg: 'favcon.png',
text: 'A caixa é de uma beleza indescritível, algo que você contemplaria por toda a eternidade. O Coração de Ferro dentro dela parece fitá-lo e, de repente, se funde com seu corpo, transformando-o na mais pura manifestação da ira.',
choices: [
{ text: 'Seguir o plano original com sua nova forma de poder', next: 63 },
{ text: 'Ir para a praça e descansar, absorvendo a transformação', next: 0 }
]
},
{
id: 66,
bg: 'diagramas.png',
text: 'A gaiola range, e o animal dentro dela, que se revela ser um boitatá, corre para a rua e enfrenta mais de cinco homens da Regnum. Surpreendentemente, a população local o protege...',
choices: [
{ text: 'Continuar com o plano original de resistência', next: 63 },
{ text: 'Desistir da luta e tentar escapar da cidade', next: 0 }
]
},
{
id: 67,
bg: 'glichtfinal.png',
text: 'Você liberta o animal da gaiola, e ele olha para você com gratidão antes de desaparecer na multidão.',
choices: [
{ text: 'Ir caminhar pela cidade para tentar clarear seus pensamentos', next: 34 },
{ text: 'Tentar encontrar um caminho de volta para sua própria realidade', next: 2 }
]
},
{
id: 68,
bg: 'diagramas.png',
text: 'Você olha para o autômato ajoelhado, percebendo que ele está chorando. Uma sensação de calor familiar o invade – era aquele boitatá. Ele se deita ao seu lado, e ambos adormecem em um campo frio ao sul de Ferrúvia...',
choices: [
{ text: 'Seguir em frente pela estrada que se apresenta', next: 1 },
{ text: 'Ignorar a estranha experiência e voltar para a cidade', next: 0 }
]
},
{
id: 69,
bg: 'estranho.png',
text: 'Eryon, com o Martelo de Metalion em punho, desafiou a Regnum no topo da Torre Trêmula, onde o tempo parecia hesitar e o ar cheirava a vapor e destino quebrado... A Rainha-Máquina rugiu com a fúria de mil engrenagens, mas ele cravou o machado – forjado em dor, carvão e esperança – em seu núcleo. No silêncio que se seguiu, a faísca da rebelião venceu o sistema, e a revolução nasceu no eco de um trovão.',
choices: [
{ text: 'Explorar os arredores da torre após a batalha', next: 1 },
{ text: 'Voltar para a cidade e celebrar a vitória', next: 0 }
]
},
{
id: 70,
bg: 'resistencia.png',
text: 'Lira aparece liderando um esquadrão de elite da Regnum. Você se lembra do seu amor por ela, e agora ela se tornou o agente da sua ruína.',
choices: [
{ text: 'Recomeçar a história na esperança de um final diferente', next: 0 }
]
},
{
id: 71,
bg: 'resistencia.png',
text: 'O ex-militar o olha com desconfiança, mas acaba aceitando sua liderança, chamando-o de capitão... Ele jura lutar contra todos que o ameaçarem.',
choices: [
{ text: 'Desistir da luta e buscar um caminho mais seguro', next: 1 },
{ text: 'Aceitar a lealdade do ex-militar e seguir com o plano', next: 63 }
]
},
{
id: 72,
bg: 'resistencia.png',
text: 'O hacker lendário aceita ajudar a causa... e rapidamente abre os portões da Regnum, desativando os autômatos de segurança...',
choices: [
{ text: 'Continuar a revolução com a ajuda do hacker', next: 63 },
{ text: 'Repensar a estratégia de luta agora que a segurança foi comprometida', next: 58 }
]
}
];

  // Variáveis dos elementos que tu tem no HTML



let currentSceneIndex = 0;
const visitedScenes = new Set();
let typewriterTimeouts = [];

// Limpa timeouts do typewriter pra não acumular bagulho
function clearTypewriter() {
    typewriterTimeouts.forEach(timeout => clearTimeout(timeout));
    typewriterTimeouts = [];
}

// Máquina de escrever na div #dialogue
function typeWriter(text, i = 0) {
    if (i === 0) {
        dialogue.textContent = '';
        clearTypewriter();
    }
    if (i < text.length) {
        dialogue.textContent += text.charAt(i);
        const timeout = setTimeout(() => typeWriter(text, i + 1), 25);
        typewriterTimeouts.push(timeout);
    }
}

// Renderiza a cena atual
function renderScene() {
    const scene = scenes[currentSceneIndex];
    visitedScenes.add(currentSceneIndex);
    updateMap();

    fadeOut(() => {
        background.style.backgroundImage = `url('${scene.bg}')`;

        choicesEl.innerHTML = '';

        scene.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice';
            btn.textContent = choice.text;
            btn.onclick = () => {
                currentSceneIndex = choice.next;
                renderScene();
            };
            choicesEl.appendChild(btn);
        });

        typeWriter(scene.text);
        fadeIn();
    });
}

function updateMap() {
    // Remove classes antigas
    mapEl.querySelectorAll('.map-node').forEach(node => {
        node.classList.remove('visited', 'current');
    });

    visitedScenes.forEach(id => {
        const node = mapEl.querySelector(`.map-node[data-id="${id}"]`);
        if (node) node.classList.add('visited');
    });

    const currentNode = mapEl.querySelector(`.map-node[data-id="${currentSceneIndex}"]`);
    if (currentNode) currentNode.classList.add('current');
}

// Navega direto pra cena clicada no mapa
function goToScene(index) {
    currentSceneIndex = index;
    renderScene();
}

// Cria os nodes no mapa, liga cada node ao id da cena
function createMapNodes() {
    scenes.forEach(scene => {
        const node = document.createElement('div');
        node.classList.add('map-node');
        node.dataset.id = scene.id;
        node.title = scene.title; // Dica no hover
        node.addEventListener('click', () => goToScene(scene.id));
        mapEl.appendChild(node);
    });
}

// Fade in/out só dar um grau na transição
function fadeOut(callback) {
    gameContainer.style.opacity = 0;
    setTimeout(callback, 500);
}
function fadeIn() {
    gameContainer.style.opacity = 1;
}

// Resetar o jogo apertando R
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r') {
        currentSceneIndex = 0;
        renderScene();
    }
});

// Inicializa o mapa e começa o jogo
createMapNodes();
renderScene();



