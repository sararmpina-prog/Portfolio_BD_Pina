
# Portfólio realizado por Sara Pina

# Link repositório GITHUB:
https://github.com/sararmpina-prog/Portfolio_BD_Pina.git

Para aceder: Usar Live Server na pasta do portfólio. 
        
# Passos para execução da página

Abrir primeiramente index.html. Representa o menu de navegação para as restantes páginas. 

<img src="/img/readme/navegacaoMenuPrincipal.png" width="200" height="200">

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


# Principais decisões tomadas e justificação da adequação

1. Escolha do tema e tópicos

    Decidi criar um portfólio profissional visto que foi o meu primeiro projeto com HTML e CSS. A ideia base que tive para este projeto foi como se tratasse da leitura de um livro, em concreto, de uma banda desenhada. 

    Decidi incluir tanto a componente profissional (experiência profissional anterior em enfermagem e requalificação profissional) como a componente pessoal. 
    
    Esta última, porque considero pertinente, num contexto de recrutamente haver uma área dedicada aos tanto aos interesses e hobbies como adicionalmente às soft skills.

    Usei a banda-desenhada da "Mafalda" que acaba por servir como uma template da concretização desta ideia. 

    Em contexto que não académico, teria que realizar uma opção diferente devido aos direitos de autor.

2. Cariz académico > cariz profissional

    A minha ideia foi realizar este portfólio em que quis colocar em prática a ideia ilustrativa de contar a história por meio de uma BD. Contudo, num contexto real, realizaria um portfólio com um cariz mais profissional. 

3. Uso de CSS > frameworks e Mobile First

    Decidi usar CSS em vez de frameworks para me familiarizar mais com o mesmo e construir "manualmente".

    Os comic - imagens - foram colocados numa grid cuja responsividade foi pensada "mobile first" e assumem uma coluna só, expandindo para duas a partir de ecrãs maiores, nomeadamente 768px. 
    Para ecrãs com 1024px ou maiores, todo o main (parágrafo descritivo e grid de comics), que por sua vez representa outra grid, passa a ocupar um total de 3 colunas.

    Explorei outras propriedades CSS para atribuir "o layout de banda desenhada", tentando uniformizar o tamanho das diferentes imagens.  

    Para ajudar à uniformização usei propriedades como aspect ratio, overflow e object fit. Neste último, optei por usar a atribuição de "contain" por manter melhor qualidade de imagem sem perda de conteúdo visual.


3. Inclusão de um parágrafo complementar por secção de banda-desenhada devido à acessibilidade.

     Fiz as seguintes validações para garantir a acessibilidade do site: 
      - Uso correcto da estrutura html semântica;

      - Atributo alt corretamente usado nas imagens (identificação da legenda aplicada), representação descritiva da imagem e/ou da sua utilização.
     (Seguem-se três exemplos abaixo).


<img src="img/readme/acessibilidade_alt.png" width="600" height="400">




<img src="img/readme/acessibilidade_alt_menuPrincipal.png" width="500" height="400">

    Contudo, considero que continua a ser uma experiência particularmente visual e, adicionalmente, mais incompleta da história/informação que posso transmitir através de escrita.
    Assim, acabei por decidir incorporar um parágrafo descritivo, respetivamente, em cada uma das secções. 

2. Interatividade

    Optei por só aplicar JS na última página do portfólio (contacto), aquando da submissão do formulário.
    Apesar de ser apologista de criar mais momentos de interatividade com o utilizador no uso de interfaces pelo dinamismo gerado, considero que neste portfólio a sua aplicação essencial resume-se à validação da entrega. 

    <img src="img/readme/formulario_confirmacao.png" width="1030" height="900">

    De facto, considerei inclusive adicionar interatividade ao menu de navegação (index.html), mas considero que não iria trazer vantagem na experiência e até acessibilidade dessa página. 


3. Inclusão da referência para a página final (contacto) em todas as páginas

    Após a apresentação do portfólio, segui a sugestão de incorporação da referência para a página final (contacto) em todas as secções.
    Decidi manter essa referência alinhada com a estrutura visual da página incluida no menu de navegação do rodapé das páginas.
    Defini com um tamanho reduzido frente às referências/imagens paralelas (página anterior e página seguinte).
    A alteração ficou como representada:

     <img src="img/readme/inclusao_contactos.png" width="200" height="200">



 4. Rodapé incluido na página principal/menu de navegação com mensagem

    Optei por colocar a mensagem "Imagens usadas exclusivamente para fins educativos, sem finalidade comercial." no rodapé da página principal. 
    Inicialmente, encontrava-se na secção "sobre mim", no rodapé.

    A alteração descrita acima (ponto 3) causou ligeiras alterações no rodapé das páginas e adicionalmente, considerei que esta informação deveria estar descrita na primeira página antes de aceder a qualquer uma das outras, como melhor protecção da privacidade dos direitos de autor. 



    Boa leitura!


Extras css:

/* footer.primPag {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: flex-end;
}

footer.primPag div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px; 
}

footer.primPag p {
    font-size: 12px;
    color: #777; 
} */

/* footer img {
    border: 1px solid #e5e5e5;  
    box-shadow: 5px;
    border-radius: 10px;
    width: auto;

} */


.finsEducativos {
    font-size: 6px;
}




 