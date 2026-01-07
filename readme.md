


Submetam um ficheiro README.md contendo:

Passos para executar a vossa página
Principais decisões tomadas e justificação da adequação


# Portfólio realizado por Sara Pina

# Link repositório GITHUB:
https://github.com/sararmpina-prog/Portfolio_BD_Pina.git

# Como aceder:

Usar Live Server na pasta do portfólio. 

# Passos para execução da página

Abrir (live server) primeiro ficheiro: index.html
Representa o menu de navegação para as restantes páginas. 

<img src="/img/readme/navegacaoMenuPrincipal.png" width="auto" height="200">

Daqui pode-se fazer a selecção para as respetivas páginas.
A ordem optimizada será seguir o menu de navegação:
    Sobre mim
    Percurso Profissional Enfermagem
    Percurso Profissional nos Estudos
    Skill Set
    Contacto

Contudo existem secções independentes, e as únicas que recomendo a leitura sequencial são: Percurso Profissional Enfermagem seguida de Percurso Profissional nos Estudos.

Dentro de qualquer secção, pode-se navegar para a página anterior; para a página seguinte; para o formulário de contacto (final) e/ou menu principal.

Qualquer uma destas secções abre em separador à parte, mantendo sempre a página principal (index.html/menu de navegação) disponível.


# Escolha do tema

A ideia geral que tive para o portfólio foi de contar uma história/ leitura de um livro, concretamente, de uma banda desenhada. 
Decidi incluir tanto a componente profissional (experiência profissional anterior em enfermagem e requalificação profissional) como a componente pessoal. Esta última, inclui tanto um registo de hobbies/interesses e uma secção "skill set" mais dedicada a competências que considero frutuosas profissionalmente. 

O menu principal, é a primeira página do portfólio que é no fundo o menu de navegação que permite acesso directo a cada uma destas secções (separador à parte).
O portfólio inclui quatro secções (sobre mim, percurso em enfermagem, formação actual e skill set).
Concluo com um formulário de contacto para simular um portfólio gerado com intuito de recrutamento e disponibilizando possibilidade de me contactarem.

A banda desenhada que usei foi a da Mafalda. Importa reforçar que foi usada como template para concretizar esta ideia, e que neste sentido num contexto real, implicaria mudanças devido aos direitos de autor (referência ao mesmo no rodapé da primeira página, menu de navegação). 


# Principais decisões tomadas e justificação da adequação

1. Inclusão de um parágrafo complementar por secção de banda-desenhada devido à acessibilidade.

     Validei o uso correcto da estrutura html semântica;

     Atributo alt corretamente usado nas imagens (identificação da legenda aplicada), representação descritiva da imagem e/ou da sua utilização.
     (Seguem-se três exemplos abaixo).


<img src="img/readme/acessibilidade_alt.png" width="200" height="200">




<img src="img/readme/acessibilidade_alt_menuPrincipal.png" width="200" height="200">

    Contudo, considero que continua a ser uma experiência particularmente visual e, adicionalmente, mais incompleta da história/informação que posso transmitir através de escrita.
    Assim, acabei por decidir incorporar um parágrafo descritivo, respetivamente, em cada uma das secções. 

2. Interatividade

    Optei por só aplicar JS na última página do portfólio (contacto), aquando da submissão do formulário.
    Apesar de ser apologista de criar mais momentos de interatividade com o utilizador no uso de interfaces pelo dinamismo considero que neste portfólio a sua aplicação essencial resume-se à validação da entrega. 

    <img src="img/readme/formulario_confirmacao.png" width="200" height="200">

    Considerei ainda, adicionar interatividade ao menu, mas acabei por não optra por essa possibilidade porque não achei que fosse acrescentar acessibilidade ou acréscimo à página.


3. Inclusão da referência para a página final (contacto) em todas as páginas

    Após a apresentação do portfólio, segui a sugestão de incorporação da referência para a página final (contacto) em todas as secções.
    Decidi manter essa referência alinhada com a estrutura visual da página incluida no menu de navegação do rodapé das páginas.
    Defini com um tamanho reduzido frente às referências/imagens paralelas (página anterior e página seguinte).
    A alteração ficou como representada:

     <img src="img/readme/inclusao_contactos.png" width="200" height="200">



 4. Rodapé incluido na página principal/menu de navegação com mensagem

    Optei por colocar a mensagem "Imagens usadas exclusivamente para fins educativos, sem finalidade comercial." no rodapé da página principal. 
    Inicialmente, encontrava-se na secção "sobre mim", no rodapé.

    A alteração descrita acima (ponto 3) causou ligeiras alterações no rodapé das páginas e adicionalmente, considerei que esta informação deveria estar descrita na primeira página antes de aceder a qualquer uma das outras, como melhor protecção dos dados de direitos de autor. 


5. Uso de CSS > frameworks

    Decidi usar CSS em vez de frameworks para me familiarizar mais com o mesmo e construir "manualmente".

    Os comic - imagens - foram colocados numa grid cuja responsividade foi pensada "mobile first" e assumem uma coluna só, expandindo para duas a partir de ecrãs maiores, nomeadamente 768px. 

    Explorei outras propriedades CSS para atribuir "o layout de banda desenhada", tentando uniformizar o tamanho das diferentes imagens. Um desafio que surgiu posteriormente porque me apercebi que na selecção das imagens tinha tamanho e quantidade diferentes por secção. 

    Para ajudar à uniformização usei propriedades como aspect ratio, overflow  (hidden) e object fit (contain). Este útlimo, explorei as diferentes possibilidades (fill, cover) para selecionar a que considerei que mantinha melhor qualidade de imagem sem perda de conteúdo visual.

    Todo o conteúdo da página (main) é por sua vez outra grid que quando expande, novamente, para ecrãs maiores que 768px passa a 3 colunas (sendo a primeira ocupada pelo parágrafo de apoio a cada página).


6. Cariz académico > cariz profissional

    A minha ideia foi realizar este portfólio em que quis colocar em prática a ideia ilustrativa de contar a história por meio de uma BD. Contudo, num contexto real, realizaria um portfólio com um cariz mais profissional. 

7. Mobile First






 
