# Análise documental

## Introdução

A análise de documentos na elicitação de requisitos é uma técnica que envolve a revisão sistemática de documentação existente, tanto impressa quanto digital, identificando as necessidades de um projeto. Este método analítico requer a examinação e interpretação dos dados para derivar significados, compreensões e desenvolvimento de conhecimento empírico.

O processo começa com uma análise preliminar para selecionar os documentos mais relevantes. Entre os tipos de documentos comumente analisados estão: Documentação já existente do sistema; Documentos de outros projetos relacionados; Legislação aplicável; Editais; Planos de negócios; Contratos (Retraining Requirements Enginereeing, 2024).

## Metodologia

A partir da análise documental do projeto realizado pelo Grupo 05 da disciplina de Arquitetura e Desenho de Software, foram identificadas funcionalidades (Verificar festividades, listar eventos, manutenção de eventos, gerenciamento de perfil e sistema de alertas) que serão implementadas no Web-App utilizando os documentos ([Brainstorming][Brainstorming], [Mapa mental][Mapa_mental], [5W2H][5W2H], [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito], [Rich Picture][Rich_Picture], [Léxicos][Léxicos], [Storyboards][Storyboards], [Protótipo de baixa fidelidade][baixaf], [Protótipo de alta fidelidade][altaf], [Guia de Estilo][estilo], [Lei nº 13.146, Art. 74](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm)). 

Com isso, foram elicitados requisitos relacionados às respectivas funcionalidades, seguindo a estrutura proposta por Vazquez et. al (2016), em que, presente na Tabela 02, temos uma pergunta que queremos responder, uma resposta à ela, o requisito proveniente dessa resposta e também adicionamos o ID desse requisito dentro desse artefato, o seu tipo e versão. Ao final da página, também temos as Tabela 3 que agrupa os requisitos funcionais e não-funcionais elicitados, em suas versões mais atuais.

Na Tabela 1 abaixo, temos os documentos analisados junto a suas versões e as datas dessas versões.

<font size="2"><p style="text-align: center"><b>Tabela 1</b>: Documentos analisados. </p></font>

<center>

| Artefato | Versão | Data |
| -------- | :----: | :--: |
| [Brainstorming][Brainstorming]  | `1.0` | 02/11/2024 |
| [Mapa mental][Mapa_mental]    | `1.0` | 02/11/2024 |
| [5W2H][5W2H] | `1.0` | 02/11/2024 |
| [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito] | `1.0` | 02/11/2024 |
| [Rich Picture][Rich_Picture] | `1.0` | 03/11/2024 |
| [Léxicos][Léxicos] | `1.0` | 03/11/2024 |
| [Storyboards][Storyboards] | `1.0` | 03/11/2024 |
| [Protótipo de baixa fidelidade][baixaf] | `1.0` | 02/11/2024 |
| [Protótipo de alta fidelidade][altaf] | `1.0` | 02/11/2024 |
| [Guia de Estilo][estilo] | `1.0` | 03/11/2024 |
| [Lei nº 13.146, Art. 74](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm) | Não se aplica | 06/07/2015 |

</center>

<font size="2"><p style="text-align: center">Fonte: [Joel][JoelGH] e [Pablo][PabloGH], 2024 </p></font>

## Requisitos Elicitados

Legenda para as Tabelas:

- RF: Requisito Funcional
- RNF: Requisito Não-Funcional
- ADxx: Requisito nºx elicitado pela questão.


<font size="2"><p style="text-align: center"><b>Tabela 2</b>: Modelo de estrutura. </p></font>

<center>

| Pergunta | Respondida | Requisito elicitado | ID | Tipo | Versão | Rastreabilidade |
| -------- | ---------- | ------------------- | -- | ---- | ------ | --- |
| Pergunta levantada para o requisito. | A pergunta foi respondida? Sim/Não | Expecificação do requisito. | Identificação do requisito. | Tipo do requisito. | Versão Atual | Documento de origem |

</center>

<font size="2"><p style="text-align: center">Fonte: [Joel][JoelGH] e [Pablo][PabloGH], 2024 </p></font>


### Requisitos

<font size="2"><p style="text-align: center"><b>Tabela 3</b>: Requisitos Funcionais e Não-funcionais. </p></font>

<center>

| Pergunta | Respondida | Requisito elicitado | ID | Tipo | Versão | Rastreabilidade |
| --- | --- | --- | --- | --- | --- | --- |
| O usuario gostaria de saber das atrações ao seu redor? | Sim | O sistema deve ser capas de usar a localização do usuario para mostrar as atrações proximas. | AD01 | RF | `1.0` | [Brainstorm][Brainstorming]  |
| Quais sistemas operacinais é planejado para que o usuário utilize para acessar a aplicação? | Sim | O usuário deverá ser capaz de acessar a aplicação através dos principais sistemas operacionais (Windows, macOS, Linux, Android e iOS) | AD02 | RNF | `1.0` | [Brainstorm][Brainstorming]  |
| Como o usuário irá acessar a aplicação? | Sim | O usuário deverá acessar a aplicação através do navegador | AD03 | RNF | `1.0` | [Brainstorm][Brainstorming]  |
| O usuário gostaria de se informar dos eventos por localidade? | Sim | A aplicação deve ser capaz apresentar eventos filtrados por localidade ao usuário | AD04 | RF | `1.0` | [Brainstorm][Brainstorming], [Rich Picture][Rich_Picture] |
| O usuário mestre de cerimônias gostaria de cadastrar eventos? | Sim | A aplicação deve ser capaz de permitir que um tipo de usuário cadastre eventos | AD05 | RF | `1.0` | [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture]|
| O usuário gostaria de verificar as datas na qual o evento estará disponível? | Sim | A aplicação deve ser capaz de apresentar as datas de disponibilidade dos eventos cadastrados | AD06 | RF | `1.0` | [Mapa mental][Mapa_mental]  |
| O usuário gostaria de se informar sobre as culturas das festividades do país? | Sim | A aplicação deve ser capaz de fornecer informações descritivas sobre as culturas das festividades | AD07 | RF | `1.0` | [Mapa mental][Mapa_mental]  |
| O usuário gostaria de ser notificado sobre possíveis alterações nos eventos? | Sim | A aplcação deve ser capaz de notificar o usuário sobre as alterações nos eventos em que ele está interessado | AD08 | RF | `1.0` | [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture]  |
| O usuário gostaria de marcar os eventos na qual há interesse em participar? | Sim | A aplicação deverá ser capaz de prover ao usuário a opção de favoritar os eventos na qual há o interesse de participação | AD09 | RF | `1.0` | [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture] |
| O usuário gostaria de se informar do custo dos ingressos do evento? | Sim | A aplicação deverá ser capaz de informar ao usuário o valor dos ingressos dos eventos | AD10 | RF | `1.0` | [Mapa mental][Mapa_mental]  |
| O usuário gostaria de se informar do custo do cardápio do evento? | Sim | A aplicação deverá ser capaz de informar ao usuário o valor dos alimentos dos eventos | AD11 | RF | `1.0` | [Mapa mental][Mapa_mental]  |
| O usuário gostaria de se informar do custo das atrações do evento? | Sim | A aplicação deverá ser capaz de informar ao usuário o valor da entrada das atrações presentes nos eventos | AD12 | RF | `1.0` | [Mapa mental][Mapa_mental]  |
| O usuário gostaria de se informar sobre as comidas e bebidas que farão parte do cardápio do evento? | Sim | A aplicação deve ser capaz de fornecer informações sobre asocomiidas e bebidas que farão aprte do cardápio dos eventos | AD13 | RF | `1.0` |  [Mapa mental][Mapa_mental] |
| O usuário gostaria de ver os comentários sobre as festividades? | Sim | O usuario deve ser capaz de comentar nos eventos e ver os comentarios anteriores. | AD14 | RF | `1.0` | [Brainstorm][Brainstorming]  |
| O usuário gostaria de se informar os estilos musicais e danças de cada festividade? | Sim | A aplicação deverá ser capaz de informar ao usuário sobre os estilos musicas e danças de cada festividade registrada | AD15 | RF | `1.0` | [Mapa mental][Mapa_mental]  |
| O usuário gostaria de se informar sobre as roupas e apresentações típicas de cada festividade? | Sim | A aplicação deverá ser capaz de informar ao usuário sobre as vestimentas e apresentações típicas das festividades registradas | AD16 | RF | `1.0` | [Mapa mental][Mapa_mental] |
| O usuário gostaria de cadastrar suas informações na aplicação? | Sim | O sistema deverá ser capaz de fornecer a opção do usuário se cadastrar na aplicação | AD17 RF |   | `1.0` | [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture] |
| O usuário gostaria de ver as notas dos eventos? | Sim | O usuário deve ser capaz de avaliar e ver as avaliações dos eventos. | AD18 | RF | `1.0` | [Brainstorm][Brainstorming], [Rich Picture][Rich_Picture]  |
| O usuário gostaria de acessar as informações que ele cadastrou? | Sim | O sistema deverá ser capaz de fornecer ao usuário a possibilidade de realizar login | AD19 | RF | `1.0` | [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture] |
| O usuário gostaria que suas informações estejam seguras? | Sim | O sistema deve seguir as legislações governamentais do Pais instaurado. | AD20 | RNF | `1.0` | [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito]  |
| O usuário gostaria de acessar as informações que ele cadastrou? | Sim | O sistema deverá ser capaz de salvar as informações cadastradas pelo usuário | AD21 | RNF | `1.0` |  [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture] |
| O usuário mestre de cerimônias gostaria de cadastrar eventos? | Sim | O sistema deverá ser capaz de distiguir os tipos de usuários cadastrados, fornecendo permissões específicas a cada um | AD22 | RF | `1.0` | [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture]  |
| O usuário gostaria de usar um sitema visualmente harmonioso? | Sim | O sistema deve seguir uma padronização minimalista. | AD33 | RNF | `1.0` | [Brainstorm][Brainstorming], [Guia de Estilo][estilo]  |
| O usuário precisa de prontidão nas informações? | Sim  | As informações devem ser atualizadas em tempo abaixo de 300ms | AD24 | RNF | `1.0` | [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito]  |
| O usuário gostaria de ser protegido em operações criticas? | Sim | O usuário deve ser perguntado sobre a confirmação de operações importantes | AD25 | RNF | `1.0` | [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito]  |
| O ususario gostaria de usar o sistema em diversos tamanhos de tela diferentes? | Sim | O sistema deve ser responsivo. | AD26 | RF | `1.0` | [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito], [Guia de Estilo][estilo]  |
| O usuário gostaria de encontrar os eventos através de suas nomeclaturas? | Sim | A aplicação deverá ser capaz de apresentar ao usuário a possibilidade de pesquisar pelo nome dos eventos | AD27 |  RF  | `1.0` | [Protótipo de alta fidelidade][altaf], [Rich Picture][Rich_Picture]  |
| O usuario gostária de segurança dos seus dados? | Sim | O aplicativo deve criptografar todos os dados do usuário durante o armazenamento e transmissão. | AD28 | RNF | `1.0` | [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito]  |
| O usuário gostaria de saber sobre a classificação indicativa dos eventos? | Sim  | A aplicação deverá ser capaz de informar ao usuário a classificação indicativa dos eventos cadastrados  | AD29 |  RF | `1.0` | [Protótipo de alta fidelidade][altaf]  |
| O usuário gostaria de acessar um mapa para conferir a localização dos eventos?  | Sim |  A aplcação deverá ser capaz de redirecionar o usuário à um mapa que apresenta o endereço do evento | AD30 | RF | `1.0` | [Brainstorm][Brainstorming], [Protótipo de alta fidelidade][altaf], [Protótipo de baixa fidelidade][baixaf] |
| O usuário gostaria de se informar dos eventos por tema?  | Sim |  A aplicação deve ser capaz apresentar eventos filtrados por tema ao usuário  | AD31 | RF | `1.0` |  [Storyboards][Storyboards] |
| O usuário gostaria de compartilhar as informações dos eventos?  | Sim | A aplicação odeverá ser capaz de gerar um link de compartilhamento para o usuário | AD32 | RF | `1.0` | [Storyboards][Storyboards] |
| O usuário gostaria de ser informado sobre a acessibilidade do evento?  | Sim  | A aplicação deverá ser capaz de fornecer ao usuário as informações osbre a acessibilidade dos eventos  | AD33 | RF  | `1.0` | [Lei nº 13.146, Art. 74](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm)  | 
| O usuário gostaria de ter uma aplicação com acessibilidade?  | Sim  | A aplicação deverá ser capaz de fornecer ao usuário opções de acessibilidade  | AD34 | RF  | `1.0` | [Lei nº 13.146, Art. 74](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm)  | 

</center>

<font size="2"><p style="text-align: center">Fonte: [Joel][JoelGH], [Pablo][PabloGH] e [Pedro Rodiguero][PedroRGH], 2024 </p></font>


### Requisitos Funcionais

<font size="2"><p style="text-align: center"><b>Tabela 4</b>: Requisitos Funcionais. </p></font>

<center>

| ID  | Requisito elicitado | Implementado | Versão | Rastreabilidade |
| --- | ------------------- | ------------ | ------ | --------------- |
| AD01 | O sistema deve ser capas de usar a localização do usuario para mostrar as atrações proximas. | Não | `1.0` | [Brainstorm][Brainstorming]  |
| AD04 | A aplicação deve ser capaz apresentar eventos filtrados por localidade ao usuário | Não | `1.0` | [Brainstorm][Brainstorming], [Rich Picture][Rich_Picture] |
| AD05 | A aplicação deve ser capaz de permitir que um tipo de usuário cadastre eventos | Não | `1.0` | [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture]|
| AD06 | A aplicação deve ser capaz de apresentar as datas de disponibilidade dos eventos cadastrados | Não | `1.0` | [Mapa mental][Mapa_mental]  |
| AD07 | A aplicação deve ser capaz de fornecer informações descritivas sobre as culturas das festividades | Não | `1.0` | [Mapa mental][Mapa_mental]  |
| AD08 | A aplcação deve ser capaz de notificar o usuário sobre as alterações nos eventos em que ele está interessado | Não | `1.0` | [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture]  |
| AD09 | A aplicação deverá ser capaz de prover ao usuário a opção de favoritar os eventos na qual há o interesse de participação | Não | `1.0` | [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture] |
| AD10 | A aplicação deverá ser capaz de informar ao usuário o valor dos ingressos dos eventos | Não | `1.0` | [Mapa mental][Mapa_mental]  |
| AD11 | A aplicação deverá ser capaz de informar ao usuário o valor dos alimentos dos eventos | Não | `1.0` | [Mapa mental][Mapa_mental]  |
| AD12 | A aplicação deverá ser capaz de informar ao usuário o valor da entrada das atrações presentes nos eventos | Não | `1.0` | [Mapa mental][Mapa_mental]  |
| AD13 | A aplicação deve ser capaz de fornecer informações sobre as comiidas e bebidas que farão aprte do cardápio dos eventos | Não | `1.0` |  [Mapa mental][Mapa_mental] |
| AD14 | O usuario deve ser capaz de comentar nos eventos e ver os comentarios anteriores. | Não | `1.0` | [Brainstorm][Brainstorming]  |
| AD15 | A aplicação deverá ser capaz de informar ao usuário sobre os estilos musicas e danças de cada festividade registrada | Não | `1.0` | [Mapa mental][Mapa_mental]  |
| AD16 | A aplicação deverá ser capaz de informar ao usuário sobre as vestimentas e apresentações típicas das festividades registradas | Não | `1.0` | [Mapa mental][Mapa_mental] |
| AD17 | O sistema deverá ser capaz de fornecer a opção do usuário se cadastrar na aplicação | Não | `1.0` | [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture] |
| AD18 | O usuário deve ser capaz de avaliar e ver as avaliações dos eventos. | Não | `1.0` | [Brainstorm][Brainstorming], [Rich Picture][Rich_Picture]  |
| AD19 | O sistema deverá ser capaz de fornecer ao usuário a possibilidade de realizar login | Não | `1.0` | [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture] |
| AD22 | O sistema deverá ser capaz de distiguir os tipos de usuários cadastrados, fornecendo permissões específicas a cada um | Não | `1.0` | [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture]  |
| AD26 | O sistema deve ser responsivo. | Não | `1.0` | [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito], [Guia de Estilo][estilo]  |
| AD27 | A aplicação deverá ser capaz de apresentar ao usuário a possibilidade de pesquisar pelo nome dos eventos | Não | `1.0` | [Protótipo de alta fidelidade][altaf], [Rich Picture][Rich_Picture]  |
| AD29 | A aplicação deverá ser capaz de informar ao usuário a classificação indicativa dos eventos cadastrados  | Não | `1.0` | [Protótipo de alta fidelidade][altaf]  |
| AD30 | A aplcação deverá ser capaz de redirecionar o usuário à um mapa que apresenta o endereço do evento | Não | `1.0` | [Brainstorm][Brainstorming], [Protótipo de alta fidelidade][altaf], [Protótipo de baixa fidelidade][baixaf] |
| AD31 | A aplicação deve ser capaz apresentar eventos filtrados por tema ao usuário  | Não | `1.0` |  [Storyboards][Storyboards] |
| AD32 | A aplicação odeverá ser capaz de gerar um link de compartilhamento para o usuário | Não | `1.0` | [Storyboards][Storyboards] |
| AD33 | A aplicação deverá ser capaz de fornecer ao usuário as informações osbre a acessibilidade dos eventos  | Não | `1.0` | [Lei nº 13.146, Art. 74](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm)  | 
| AD34 | A aplicação deverá ser capaz de fornecer ao usuário opções de acessibilidade  | Não | `1.0` | [Lei nº 13.146, Art. 74](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm)  | 

</center>

<font size="2"><p style="text-align: center">Fonte: [Joel][JoelGH], [Pablo][PabloGH] e [Pedro Rodiguero][PedroRGH], 2024 </p></font>


## Requisitos Não-funcionais

<font size="2"><p style="text-align: center"><b>Tabela 5</b>: Requisitos Não-funcionais. </p></font>

<center>

| ID  | Requisito Ilicitado | Implementado | Versão | Rastreabilidade |
| --- | ------------------- | ------------ | ------ | --------------- |
| AD02 | O usuário deverá ser capaz de acessar a aplicação através dos principais sistemas operacionais (Windows, macOS, Linux, Android e iOS) | Não | `1.0` | [Brainstorm][Brainstorming]  |
| AD03 | O usuário deverá acessar a aplicação através do navegador | Não | `1.0` | [Brainstorm][Brainstorming]  |
| AD20 | O sistema deve seguir as legislações governamentais do Pais instaurado. | Não | `1.0` | [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito]  |
| AD21 | O sistema deverá ser capaz de salvar as informações cadastradas pelo usuário | Não | `1.0` |  [Mapa mental][Mapa_mental], [Rich Picture][Rich_Picture] |
| AD24 | As informações devem ser atualizadas em tempo abaixo de 300ms | Não | `1.0` | [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito]  |
| AD25 | O usuário deve ser perguntado sobre a confirmação de operações importantes | Não | `1.0` | [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito]  |
| AD28 | O aplicativo deve criptografar todos os dados do usuário durante o armazenamento e transmissão. | Não | `1.0` | [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito]  |
| AD33 | O sistema deve seguir uma padronização minimalista. | Não | `1.0` | [Brainstorm][Brainstorming], [Guia de Estilo][estilo]  |

</center>

<font size="2"><p style="text-align: center">Fonte: [Joel][JoelGH], [Pablo][PabloGH] e [Pedro Rodiguero][PedroRGH], 2024 </p></font>


## Referências Bibliográficas

> 1. Retraining Requirements Enginereeing. Análise de Documentos, 2024. Disponível em: https://retraining.inf.ufsc.br/guia/app/classificacoes/tecnicas-de-elicitacao-de-requisitos/entidades/tecnicas-de-elicitacao-de-requisitos-analise-de-documentos. Acesso em: 03 de nov. de 2024.
>
> 2. Vazquez, Carlos. Simões, Guilherme. Engenharia de Requisitos. Brasport, 2016. Disponível em: .Acesso em: 03 de nov. de 2024.
>
> 3. BRASIL. Lei nº 13.146, de 6 de novembro de 2015. Estatuto da Pessoa com Deficiência. Diário Oficial da União, Brasília, DF, 9 nov. 2015. Seção 1, p. 1-2. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm. Acesso em: 3 nov. 2024.
>
> 4. Brainstorming do grupo 05 de Arquitetura e Desenho de Software 2024.2. Projeto Turismo. Disponível em: [Brainstorming][Brainstorming]. Acesso em: 03 de nov. de 2024
>
> 5. Mapa mental do grupo 05 de Arquitetura e Desenho de Software 2024.2. Projeto Turismo. Disponível em: [Mapa mental][Mapa_mental]. Acesso em: 03 de nov. de 2024
>
> 6. 5W2H do grupo 05 de Arquitetura e Desenho de Software 2024.2. Projeto Turismo. Disponível em: [5W2H][5W2H]. Acesso em: 03 de nov. de 2024
>
> 7. Diagrama de causa e efeito do grupo 05 de Arquitetura e Desenho de Software 2024.2. Projeto Turismo. Disponível em: [Diagrama de causa e efeito][Diagrama_de_causa_e_efeito]. Acesso em: 03 de nov. de 2024
>
> 8. Rich Picture do grupo 05 de Arquitetura e Desenho de Software 2024.2. Projeto Turismo. Disponível em: [Rich Picture][Rich_Picture]. Acesso em: 03 de nov. de 2024
>
> 9. Léxicos do grupo 05 de Arquitetura e Desenho de Software 2024.2. Projeto Turismo. Disponível em: [Léxicos][Léxicos]. Acesso em: 03 de nov. de 2024
>
> 10. Storyboards do grupo 05 de Arquitetura e Desenho de Software 2024.2. Projeto Turismo. Disponível em: [Storyboards][Storyboards]. Acesso em: 03 de nov. de 2024
>
> 11. Protótipo de baixa fidelidade do grupo 05 de Arquitetura e Desenho de Software 2024.2. Projeto Turismo. Disponível em: [Protótipo de baixa fidelidade][baixaf]. Acesso em: 03 de nov. de 2024
>
> 12. Protótipo de alta fidelidade do grupo 05 de Arquitetura e Desenho de Software 2024.2. Projeto Turismo. Disponível em: [Protótipo de alta fidelidade][altaf]. Acesso em: 03 de nov. de 2024
>
> 13. Guia de Estilo do grupo 05 de Arquitetura e Desenho de Software 2024.2. Projeto Turismo. Disponível em: [Guia de Estilo][estilo]. Acesso em: 03 de nov. de 2024
>

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) | Detalhes da revisão |
| :----: | :--: | --------- | ----------- | ------ | :---: |
| `1.0`  | 03/11/2024 | Criação do documento | [Joel][JoelGH], [Pablo][PabloGH] e [Pedro Rodrigues][PedroRGH] | [Pedro Paulo][PedroPGH] | Corrigido e revisado. |


[AnaGH]: https://github.com/analufernanndess
[CainaGH]: https://github.com/freitasc
[ClaudioGH]: https://github.com/claudiohsc
[EliasGH]: https://github.com/EliasOliver21
[GuilhermeGH]: https://github.com/gmeister18
[IgorGH]: https://github.com/Igor-Thiago
[JoelGH]: https://github.com/JoelSRangel
[KathlynGH]: https://github.com/klmurussi
[PabloGH]: https://github.com/pabloheika
[PedroRGH]: https://github.com/pedro-rodiguero
[PedroPGH]: https://github.com/Pedrin0030
[SamuelGH]: https://github.com/samuelalvess
[TalesGH]: https://github.com/TalesRG

[Brainstorming]: Base/Brainstorm.md
[Mapa_mental]: Base/1.1.2.Mapa-mental.md
[5W2H]: Base/SW2H.md
[Diagrama_de_causa_e_efeito]: Base/causaefeito.md
[Rich_Picture]: Base/1.2.5.Richpicture.md
[Léxicos]: Base/1.2.1.Léxicos.md
[Storyboards]: Base/1.2.6.Storyboards.md
[baixaf]: Base/elicitacao/analise_documental.md
[altaf]: Base/elicitacao/analise_documental.md
[estilo]: Base/1.5.2.guia-de-estilo.md