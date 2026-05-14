# Análise estratégica de pre ecológica consultoria ambiental

Projeto Integrador desenvolvido para o curso de Engenharia de Software, com o objetivo de propor uma solução digital para auxiliar a organização de processos seletivos, triagem de candidatos e acompanhamento de etapas de recrutamento para uma consultoria ambiental.

## Sobre o projeto

Este projeto tem como base a análise estratégica de uma empresa/consultoria ambiental que apresenta dificuldades relacionadas à organização, padronização e acompanhamento de informações durante processos internos.

A proposta do sistema é criar uma plataforma web com duas áreas principais:

- Área do candidato;
- Área do recrutador.

Na área do candidato, o usuário poderá realizar cadastro, enviar currículo, preencher dados iniciais, responder testes técnicos e acompanhar a fase final de entrevista.

Na área do recrutador, será possível visualizar candidatos, analisar currículos, acompanhar testes, verificar taxas de acertos e erros, monitorar o andamento das vagas e organizar entrevistas.

## Objetivo geral

Desenvolver uma solução web para apoiar o processo de recrutamento e seleção da PRE Ecológica Consultoria Ambiental, centralizando dados de candidatos, currículos, testes técnicos, etapas de avaliação e agendamento de entrevistas.

## Objetivos específicos

- Criar uma interface inicial para apresentação do sistema;
- Desenvolver telas para cadastro e login de candidatos;
- Permitir o envio de currículo em formato PDF ou DOC;
- Coletar dados importantes para a triagem inicial;
- Criar uma etapa de teste técnico com critérios de aprovação;
- Definir aprovação mínima de 65% nos testes;
- Criar uma etapa final para agendamento de entrevista;
- Desenvolver uma área para o recrutador acompanhar candidatos e vagas;
- Apresentar indicadores como currículos novos, taxa de acertos, taxa de erros e andamento das vagas;
- Organizar o projeto para futura integração com banco de dados e armazenamento de arquivos.

## Escopo inicial do sistema

### Área do candidato

- Página inicial;
- Cadastro do candidato;
- Login do candidato;
- Envio de currículo;
- Preenchimento de dados pessoais e profissionais;
- Teste técnico;
- Resultado do teste;
- Fase final de entrevista;
- Escolha de entrevista on-line ou presencial.

### Área do recrutador

- Login do recrutador;
- Dashboard de monitoramento;
- Análise de currículos;
- Acompanhamento de candidatos;
- Visualização de testes;
- Indicadores de desempenho;
- Controle do andamento das vagas;
- Organização de entrevistas.

## Regras principais do processo seletivo

### 1. Currículo

O candidato só poderá avançar para a próxima fase se:

- O currículo e os dados preenchidos forem compatíveis com os requisitos da vaga;
- O recrutador analisar o currículo e aprovar a continuidade do candidato no processo.

### 2. Teste técnico

O teste poderá ser composto por uma ou duas avaliações, de acordo com a vaga.

Para avançar, o candidato deverá alcançar pelo menos 65% de aprovação.

Caso a nota seja inferior a 65%, o candidato será reprovado automaticamente.

### 3. Entrevista

Se o candidato for aprovado nas etapas de currículo e teste técnico, o recrutador poderá entrar em contato para agendar a entrevista.

A entrevista poderá ser:

- On-line;
- Presencial.

## Tecnologias utilizadas

- Next.js;
- React;
- TypeScript;
- Tailwind CSS;
- Git;
- GitHub;
- Vercel.

## Tecnologias planejadas

As tecnologias abaixo poderão ser utilizadas em etapas futuras do desenvolvimento:

- Supabase para banco de dados;
- Supabase Storage para armazenamento de currículos;
- Sistema de autenticação;
- Dashboard com gráficos;
- Calendário de entrevistas;
- Registro de respostas dos testes.

## Por que hospedar na Vercel?

A Vercel foi escolhida como plataforma de hospedagem por possuir integração direta com projetos desenvolvidos em Next.js.

Além disso, ela permite deploy automático a partir do GitHub, facilitando a publicação das alterações feitas no projeto.

Como o sistema possui várias telas e poderá evoluir para funcionalidades com backend, a Vercel oferece uma estrutura mais adequada do que uma hospedagem apenas estática.

## Links do projeto

> Os links abaixo serão adicionados conforme o desenvolvimento avançar.

- Protótipo no Figma: **[INSERIR LINK DO FIGMA]**
- Deploy na Vercel: **[INSERIR LINK DA VERCEL]**
- Repositório no GitHub: **[LINK DO GITHUB](https://github.com/Ana-CAS-Machado/Projeto_integrador_ENGSOF.git)**
- Artigo SN: **[INSERIR LINK OU CAMINHO DO ARQUIVO]**
- Banner CONTEEX: **[INSERIR LINK OU CAMINHO DO ARQUIVO]**

## Documentação acadêmica

Este projeto faz parte do Projeto Integrador desenvolvido para o CONTEEX/FAM.

Arquivos que serão adicionados posteriormente:

- Artigo SN;
- Banner impresso;
- Imagens das telas;
- Protótipo do Figma;
- Diagramas do sistema;
- Código-fonte;
- Vídeos ou capturas de tela da aplicação, se necessário.

## Status do projeto

Em desenvolvimento.

Etapas iniciais:

- [x] Criação do projeto Next.js;
- [x] Criação da página inicial;
- [ ] Criação das telas do candidato;
- [ ] Criação das telas do recrutador;
- [x] Criação do protótipo no Figma;
- [x] Publicação na Vercel;
- [ ] Finalização do artigo SN;
- [ ] Finalização do banner.

## Autores

| Nome | RA | Função no projeto |
|---|---|---|
| Vinicius Bispo Freitas| SP365335 | Desenvolvimento / Artigo |
| Yasmin Ribeiro Ferreira Santana | SP365023  | Banner / Pesquisa / Artigo |
| Sabrina Silva Santos| SP364244 | Documentação / Metodologia / Testes |
| Kemilly Beatriz da Silva Cezar | SP364660 | Revisão / Organização / Artigo |
| Layslla Souza Tavares | SP365473 | Apoio geral/ Artigo / Apresentação |
| Ana Carolina Alves da Silva Machado  | E0477924 | Desenvolvimento / Figma |

## Professor orientador

Prof. Wagner Ballak

## Curso

Engenharia de Software

## Instituição

Centro Universitário das Américas - FAM

## Período

1º semestre - 2026

## Observação

Este projeto possui finalidade acadêmica e foi desenvolvido como parte das atividades do Projeto Integrador. As informações, telas e fluxos poderão ser ajustados conforme orientação do professor e evolução do trabalho.
