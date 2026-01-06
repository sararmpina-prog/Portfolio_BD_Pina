# Portfólio Sara Pina

# Link repositório GITHB:


# Como aceder:
Através do download da pasta portfólio_final e usando live server para visualizar e testar o portfólio. 


# Escolha do tema

A ideia geral que tive para o portfólio foi de contar uma história/ leitura de um livro, com uma perspetiva sequencial. Concretamente, de uma banda desenhada. 
Decidi incluir tanto a componente profissional (experiência profissional anterior em enfermagem e requalificação profissional) como a componente pessoal. Esta última, inclui tanto um registo de hobbies/interesses e uma secção "skill set" mais dedicada a competências que considero frutuosas profissionalmente. 

O menu principal, é a primeira página do portfólio que é no fundo o menu de navegação que permite acesso directo a cada uma destas secções (separador à parte).
O portfólio inclui quatro secções (sobre mim, percurso em enfermagem, formação actual e skill set).
Concluo com um formulário de contacto para simular um portfólio gerado com intuito de recrutamento e disponibilizando possibilidade de me contactarem.

A banda desenhada que usei foi a da Mafalda. Importa reforçar que foi usada como template para concretizar esta ideia, e que neste sentido num contexto real, implicaria mudanças devido aos direitos de autor (referência ao mesmo no rodapé da página "sobre mim"). 

Adicionalmente, à ideia original, decidi incluir um parágrafo sobre cada secção por duas razões.
A primeira, a questão de acessibilidade. Apesar de ter incluido em cada imagem o atributo "alt" com o valor da legenda e em imagens sem legendas, a descrição da imagem, considero que continua a ser uma experiência muito visual. Além do mais, não consegue reproduzir toda a informação que faço por via deste parágrafo que acaba por ser um complemento. 

# Desafios

Os principais desafios foi a nível do layout da página dos comics. 
Fiz a escolha de criar a estrutura por CSS em vez de frameworks (como tailwind) para me familiarizar com a mesma e construir "manualmente".

Os comic - imagens - foram colocados numa grid cuja responsividade foi pensada "mobile first" e assumem uma coluna só, expandindo para duas a partir de ecrãs maiores, nomeadamente 768px. 

Explorei outras propriedades CSS para atribuir "o layout de banda desenhada", tentando uniformizar o tamanho das diferentes imagens. Um desafio que surgiu posteriormente porque me apercebi que na selecção das imagens tinha tamanho e quantidade diferentes por secção. 

Para ajudar à uniformização usei propriedades como aspect ratio, overflow  (hidden) e object fit (contain). Este útlimo, explorei as diferentes possibilidades (fill, cover) para selecionar a que considerei que mantinha melhor qualidade de imagem sem perda de conteúdo visual.

Todo o conteúdo da página (main) é por sua vez outra grid que quando expande, novamente, para ecrãs maiores que 768px passa a 3 colunas (sendo a primeira ocupada pelo parágrafo de apoio a cada página).


# Interatividade

A interatividade que usei no portfólio foi no registo da última página aquando da submissão do formulário de contacto.
Ao ser submitido o formulário devolve uma mensagem de sucesso na submissão do mesmo (atribui cor ver - classe CSS) com o nome colocado na caixa de texto pelo utilizador (usado event para extrair valor do nome). 

# Coisas a melhorar

1. Menu principal. Podia carecer de adição de outros elementos ou diferente estrutura. 
Considerei adicionar interatividade ao menu, mas acabei por não optra por essa possibilidade porque não achei que fosse acrescentar acessibilidade ou acréscimo à página.

2. A minha ideia aqui foi realizar este portfólio num contexto académico em que quis colocar em prática a ideia ilustrativa de contar a história por meio de uma BD. Contudo, num contexto real, realizaria um portfólio com um cariz mais profissional. 

3. Copyright/direitos de autor significaria mudanças significativas na forma de utilização da banda desenhada que usei ou inclusive (originalmente pensado) criar eu uma banda desenhada/personagem original.

4. Retomando ao ponto 2, penso que criar mais interactividade podia ser benéfico, num portfólio diferente de forma a criar dinamismo entre o utilizador e o site.

5. Perfil de redes (como linkedin) atualizados. O meu neste momento não se encontra ainda, contudo, criei um link de ligação ao mesmo (na última página do portfólio) como template. 


Dúvidas:
1. Página contactar - o <a> inclui a img



 <!-- <div aria-label="informação extra de rodapé" class="rodape">
          <p>Imagens usadas exclusivamente para fins educativos, sem finalidade
              comercial.</p>
          <!-- <a
              href="/html/contactoFormulario.html"
              target="_blank"
              class="sobreporElem"
              >Contactar
              <img src="/img/form/contactarExtra.png" alt="Contactar (abre numa nova aba)" height="60" class="imgExtrarodape"
            ></a> -->
        </div> -->



        <p class="finsEducativos"> 
              Imagens usadas exclusivamente para fins educativos, sem finalidade
              comercial.
            </p>



 <footer class="primPag">
      <nav aria-label="Navegação entre páginas">
        <ul class="listaNavegacaoRodape">
           <li>
            <a
              href="/html/percursoEnf.html"
              target="_blank"
              class="sobreporElem"
              >Percurso em Enfermagem<img
                src="/img/comum/pagSeg.png"
                alt="Percurso em Enfermagem (abre numa nova aba)"
                height="60"
            /></a>
          </li>
          <li>
            <a
              href="/html/percursoEnf.html"
              target="_blank"
              class="sobreporElem"
              >Percurso em Enfermagem<img
                src="/img/comum/pagSeg.png"
                alt="Percurso em Enfermagem (abre numa nova aba)"
                height="60"
            /></a>
          </li>
        </ul>
      </nav>
      <a
        href="/html/contactoFormulario.html"
        target="_blank"
        class="sobreporElem"
        >Contactar
        <img
          src="/img/form/contactarExtra.png"
          alt="Contactar (abre numa nova aba)"
          height="60"
          class="imgExtrarodape"
      /></a>
    </footer>