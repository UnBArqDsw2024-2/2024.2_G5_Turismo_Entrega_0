## Introdução

O diagrama de sequência é um diagrama UML que é composto pela representação de objetos dando ênfase na sequência que acontece as interações entre os objetos. Cada objeto um possui sua linha de vida e apresenta os momentos em que o objeto foi ativado entrando em comunicação com outro objeto. Os objetos podem comunicar-se entre si por meio de diferentes tipos de mensagens, também é representado no diagrama estruturas de controle entre os objetos.

## Metodologia

Para realizar os diagramas de sequência foram escolhidos casos de uso e criado um diagrama de sequência para cada. Os casos de uso foram criados a partir do [diagrama de classes]() realizado anteriormente pelo grupo. Para criar os diagramas seguimos as diretrizes apresentadas abaixo, logo mais abaixo estarão uma tabela com os dados referidos as diretrizes relacionados a cada caso de uso e após os diagramas em si.

- 1. Selecionar um caso de uso;
- 2. Escrever uma descrição detalhada das ações do caso de uso;
- 3. Identificar ações que os objetos trocam entre si;
- 4. Identificar atores e objetos que interagem;
- 5. Determinar sequência de mensagens;
- 6. Determinar condições especiais;
- 7. Desenhar o Diagrama.

## Tabela com as diretrizes para 

|**Conhecer festividades por região**|2. Descrição do UseCase| |
|:----|:----|:----|
| |3. Identificar o atores| |
| |4. Identificar as mensagens| |
| |5.Determinar Sequência| |
| |6. Condições especiais| |
|**Ver eventos por região**|2. Descrição do UseCase| |
| |3. Identificar o atores| |
| |4. Identificar as mensagens| |
| |5.Determinar Sequência| |
| |6. Condições especiais| |
|**Criar Evento**|2. Descrição do UseCase|Usuário Anfitrião/Organizador acessa a seção de "adicionar evento", seleciona a opção de "criar evento" , preenche as informações e clica em "Criar"|
| |3. Identificar o atores|Usuário Anfitrião/Organizador - Sistema EvenTour - Banco de Dados|
| |4. Identificar as mensagens|1. Seta aberta para "adicionar evento". 2. Seta aberta para "criar evento" 3. Seta tracejada aberta para criação da instância de um evento com os dados. 4. seta de retorno do Banco de dados|
| |5.Determinar Sequência| |
| |6. Condições especiais| |
|**Favoritar Eventos**|2. Descrição do UseCase|Usuário acessa a seção de "eventos", seleciona algum evento e clica para favoritar o evento.|
| |3. Identificar o atores|Usuário - Sistema - Banco de Dados|
| |4. Identificar as mensagens|1. Seta fechada para entrar na seção de "eventos". 2. Seta fechada para selecionar evento. 3. Seta fechada para favoritar evento|
| |5.Determinar Sequência|1 a 3|
| |6. Condições especiais|-|
|**Comentar eventos**|2. Descrição do UseCase| |
| |3. Identificar o atores| |
| |4. Identificar as mensagens| |
| |5.Determinar Sequência| |
| |6. Condições especiais| |
|**Alertas**|2. Descrição do UseCase| |
| |3. Identificar o atores| |
| |4. Identificar as mensagens| |
| |5.Determinar Sequência| |
| |6. Condições especiais| |
|**Filtrar eventos**|2. Descrição do UseCase|O usuário navega até a seção "eventos", seleciona o tipo de filtro que deseja e clica no botão filtrar.|
| |3. Identificar o atores|Usuário final - Sistema - Banco de Dados|
| |4. Identificar as mensagens|1. -> Seta aberta para evento. 2. -> Seta aberta para selecionar tipo de filtro. 3 -> Seta fechada para filtrar(Apresentar condição para retornar eventos filtrados). 4. Seta pontilhada  para resposta da ação filtrar.|
| |5.Determinar Sequência| |
| |6. Condições especiais| |
|**Avaliar eventos**|2. Descrição do UseCase|O Usuário navega até a opção de eventos salvos em seu perfil e clicando na opção avaliar seleciona a quantidade de estrelas relacionadas a qualidade do evento, logo abaixo tem a possibilidade de deixar o seu feedback sobre o evento caso queira.|
| |3. Identificar o atores|Usuário - Sistema - Banco de Dados|
| |4. Identificar as mensagens|1. Assíncrona(Usuário navega até a pagina dos eventos) 2.Síncrona(É chamado método para procurar os eventos pela localização da controller) 3.Síncrona(É chamado método para procurar os eventos pela localização da EventService) 4.Síncrona(São requisitados os os dados no banco de dados pelo método na EventService) 5.Assíncrona(O Usuário visualiza e navega até o evento pretendido) 6.Síncrona(Usuário avalia o evento) 7.Síncrona(É chamado o método rateEvent(Evento) da controller) 8.Síncrona(É chamado o método rateEvent na FavoritedEventsService) 9.Síncrona(É persistida a avaliação do usuário no banco de dados.)|5.Determinar Sequência|1 a 9|
| |6. Condições especiais|-|
|**Editar eventos**|2. Descrição do UseCase|Usuário Anfitrião/Organizador acessa a seção de "adicionar evento", seleciona a opção de "criar evento" , preenche as informações e clica em "Criar"|
| |3. Identificar o atores|Usuário Anfitrião/Organizador - Sistema EvenTour - Banco de Dados|
| |4. Identificar as mensagens|1. Seta aberta para "meus eventos". 2. Seta aberta para "editar evento" 3. Seta fechada para edição de um evento com os dados. 4. seta de retorno do Banco de dados com confirmação da alteração|
| |5.Determinar Sequência|1 a 4|
| |6. Condições especiais|-|
|**Logar**|2. Descrição do UseCase|O usuário irá realizar o login, navegando até a opção "Login", inserindo o seu e-mail e senha e clicando em "Login"|
| |3. Identificar o atores|Usuário - Sistema - Banco de dados|
| |4. Identificar as mensagens|1. Assíncrona(Navega até a opção login) 2.Assíncrona(Insere o e-mail e senha) 3.Síncrona(Clica em logar) 4. Síncrona(Método login() é chamado na controller) 5. Síncrona(O método authenticate() é chamado) 6. Síncrona(É realizada a autenticação)|
| |5.Determinar Sequência|1 a 6|
| |6. Condições especiais|O Usuário esquece a senha cadastrada.|
|**Cadastrar-se**|2. Descrição do UseCase|O usuário navega até a opção cadastrar-se; Insere os dados informando suas características e confirma o cadastro.|
| |3. Identificar o atores|Usuário - Sistema - Banco de dados|
| |4. Identificar as mensagens|1. Síncrona (Seleciona a opção de cadastro) 2.Síncrona(O Usuário insere seus dados) 3. Assíncrona(Usuário clica em cadastrar-se) 4. Assíncrona(É chamado o método register da controler.) 5. Assíncrona(É chamado o método create da UserService.) 5.1 Resposta (É criado um objeto do tipo User passando as informações inseridas) 6.Create(É persistido pela entidade no banco de dados).|5.Determinar Sequência|1 a 6.|
| |6. Condições especiais|1. Em caso dos dados inseridos não estiverem de acordo com o padrão exigido ou estiverem faltando preenchimento de campos obrigatórios, o cadastro será rejeitado.|



## Diagramas

#### Criar Evento

![CriarEvento](../../assets/diagrama-de-sequencia/Criar%20Evento.png)

#### Favoritar Evento

![FavoritarEvento](../../assets/diagrama-de-sequencia/Favoritar%20Evento.png)

#### Avaliar Evento

![AvaliarEvento](../../assets/diagrama-de-sequencia/avaliar.png)

#### Editar Evento

![EditarEvento](../../assets/diagrama-de-sequencia/Editar%20Evento.png)

#### Logar

![Logar](../../assets/diagrama-de-sequencia/login.png)

#### Cadastrar-se

![CadastrarEvento](../../assets/diagrama-de-sequencia/cadastro.png)

## Gravação da reunião

<div style="max-width:450px">
<iframe width="560" height="315" src="https://www.youtube.com/embed/GJ-dy9eMRv4?si=1Dm1Gdsq96J1jNjS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Bibliografia

- > UML Sequence Diagrams. Disponível em: [Link](https://www.uml-diagrams.org/sequence-diagrams.html). Acessado em: 18/11/2024.
- > IBM - Processo de Desenvolvimento e Diagramas de Seqüência. Disponínel em: [Link](https://www.ibm.com/docs/pt-br/rsm/7.5.0?topic=uml-sequence-diagrams). Acessado em: 18/11/2024.

## Histórico de Versão

| Versão | Data | Descrição | Autor | Revisor
|:-:|:-:|:-:|:-:|:-:|
|`1.0`| 19/11/2024 | Criação do documento| [Cláudio Henrique][ClaudioGH], [Elias Oliveira][EliasGH] e [Pablo][PabloGH]| |

[AnaGH]: https://github.com/analufernanndess
[CainaGH]: https://github.com/freitasc
[ClaudioGH]: https://github.com/claudiohsc
[EliasGH]: https://github.com/EliasOliver21
[GuilhermeGH]: https://github.com/gmeister18
[JoelGH]: https://github.com/JoelSRangel
[KathlynGH]: https://github.com/klmurussi
[PabloGH]: https://github.com/pabloheika
[PedroRH]: https://github.com/pedro-rodiguero
[PedroPGH]: https://github.com/Pedrin0030
[SamuelGH]: https://github.com/samuelalvess
[TalesGH]: https://github.com/TalesRG