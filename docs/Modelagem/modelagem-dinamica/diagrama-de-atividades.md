# **Diagrama de Atividades**

## **Introdução**

O presente documento descreve o diagrama de atividades referente ao fluxo de acesso e gerenciamento de festividades e eventos. Este diagrama foi desenvolvido com o objetivo de ilustrar os principais processos e interações entre os usuários e o sistema em diferentes cenários, tais como acessar festividades, eventos e gerenciar informações na área do usuário.

---

## **Metodologia**

Para a elaboração do diagrama de atividades, foram utilizadas técnicas de modelagem de processos, destacando os principais fluxos de navegação do usuário no sistema. A representação gráfica segue os padrões de notação UML, abrangendo as seguintes funcionalidades:

1. **Acessar festividade**: fluxo básico de interação inicial para visualizar uma festividade.
2. **Acessar evento**: interação para filtrar, acessar e gerenciar eventos.
3. **Área de usuário**: funcionalidades de personalização e visualização de preferências.
4. **Criar evento**: fluxo de criação, edição e exclusão de eventos.

Os principais elementos do diagrama incluem estados, decisões condicionais e atividades realizadas durante a interação.

---

## **Desenvolvimento**

O diagrama de atividades está segmentado em diferentes fluxos funcionais, cada um representando um conjunto de ações específicas realizadas pelo usuário no sistema:

### **Fluxo 1: Acessar Festividade**
- O usuário inicia na tela inicial do sistema.
- Navega até uma festividade específica.
- Encerramento do processo ao visualizar a festividade.

### **Fluxo 2: Acessar Evento**
- O usuário acessa o painel de eventos a partir da tela inicial.
- Pode optar por **filtrar eventos** ou **acessar um evento diretamente**.
- Após acessar um evento, é possível:
  - **Favoritar o evento.**
  - **Adicionar comentários sobre o evento.**

### **Fluxo 3: Área de Usuário**
- O usuário acessa sua área pessoal após a tela inicial.
- As ações disponíveis incluem:
  - **Ver eventos favoritados.**
  - **Editar perfil do usuário.**
- É possível retornar à tela inicial a qualquer momento.

### **Fluxo 4: Criar Evento**
- O processo inicia com o acesso à área do usuário.
- Na aba de eventos criados, o usuário pode:
  - **Criar um novo evento.**
  - **Editar um evento existente.**
  - **Deletar um evento.**

---

**Figura 1: Diagrama de Atividades**

![Diagrama de Atividades](docs/assets/diagrama-de-atividades/diagrama-de-atividades.jpg)

**Fonte**: [Samuel Alves][SamuelGH], 2024.

---

**Tabela 1: Resumo das Atividades**

| **Fluxo**         | **Atividade Principal**         | **Descrição**                                                                 |
| :----------------: | ------------------------------- | ----------------------------------------------------------------------------- |
| Acessar Festividade | Visualização de festividades    | O usuário acessa informações sobre uma festividade específica.                |
| Acessar Evento      | Gerenciamento de eventos       | Filtrar, acessar, favoritar ou comentar eventos.                              |
| Área de Usuário     | Personalização e preferências  | Ver eventos favoritados ou editar o perfil.                                   |
| Criar Evento        | Criação e edição de eventos    | Criar, editar ou deletar eventos na área do usuário.                          |

**Fonte**: [Samuel Alves][SamuelGH], 2024.

---

## **Bibliografia**

> IBM. Activity diagrams. Disponível em: https://www.ibm.com/docs/pt-br/rational-soft-arch/9.7.0?topic=diagrams-activity. Acesso em: 20 nov. 2024.
---

## **Histórico de Versões**

| **Versão** | **Data**       | **Descrição**               | **Autor(es)**       | **Revisor(es)** | **Detalhes da Revisão** |
| :--------: | -------------- | --------------------------- | ------------------- | --------------- | ----------------------- |
| `1.0`      | 21/11/2024     | Criação do documento        | [Samuel Alves][SamuelGH],[Joel Rangel][JoelGH],[Kathlyn Lara][KathlynGH] |  |  |

[AnaGH]: https://github.com/analufernanndess  
[CainaGH]: https://github.com/freitasc  
[PabloGH]: https://github.com/pabloheika
[AnaGH]: https://github.com/analufernanndess
[CainaGH]: https://github.com/freitasc
[ClaudioGH]: https://github.com/claudiohsc
[EliasGH]: https://github.com/EliasOliver21
[GuilhermeGH]: https://github.com/gmeister18
[JoelGH]: https://github.com/JoelSRangel
[KathlynGH]: https://github.com/klmurussi
[PabloGH]: https://github.com/pabloheika
[PedroRGH]: https://github.com/pedro-rodiguero
[PedroPGH]: https://github.com/Pedrin0030
[SamuelGH]: https://github.com/samuelalvess
[TalesGH]: https://github.com/TalesRG
