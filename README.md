# Ticker Press

Este repositório guarda o backend do projeto Ticker Press, responsável por toda lógica e interação.

## Tabela de Conteúdos

1. [**Visão Geral**](#visão-geral)
3. [**Pré-requisitos**](#pré-requisitos)
4. [**Instalação**](#instalação)
5. [**Gestão de Senhas**](#gestão-de-senhas)

## Visão Geral

O projeto é desenvolvido com:
- Nodejs v16
- Typescript
- Express


## Pré-requisitos

Lista de pré-requisitos necessários para configurar e executar o projeto localmente.

- NodeJS [Recomendado Baixar pelo NVM] na Versão 20
- Docker
- Utilizar a branch `main` como principal

## Instalação

Acesse o guia de instalação no Confluence [Configuração de Ambiente](https://boxti.atlassian.net/wiki/spaces/desenvolvimento/pages/1920204884/Configura+o+do+ambiente+TickerPress)



## Gestão de Senhas (atualizar)

As senhas e acessos necessários para este projeto estão armazenados de forma segura no Bitwarden da empresa. Para acessá-los, siga as seguintes etapas:

1. **Acesso ao Bitwarden**: Utilize suas credenciais corporativas para fazer login no Bitwarden da empresa. Certifique-se de que está autorizado a acessar este repositório.
2. **Localização das Credenciais**: As informações relevantes para este projeto estão categorizadas e etiquetadas como "[Nome do Projeto]". Procure por essa etiqueta para encontrar as credenciais específicas.

3. **Práticas de Segurança**: Por favor, lembre-se de seguir todas as práticas de segurança recomendadas ao lidar com senhas e informações confidenciais. Evite compartilhar as credenciais com pessoas não autorizadas e nunca armazene senhas em locais não seguros, como mensagens de texto ou e-mails não criptografados.

4. **Problemas de Acesso**: Em caso de qualquer problema com o acesso às credenciais ou dúvidas sobre a segurança das informações, entre em contato com a equipe responsável pela gestão de acesso ou a equipe de segurança da informação.


## Estrutura de pastas

**api/src/:**
contém toda a lógica da api

**api/src/application:**
Contém a lógica de aplicação, incluindo casos de uso, serviços e qualquer lógica de negócios.

**api/src/domain:**
Conceitos de domínio e as regras de negócio. Pode incluir entidades, objetos de valor, repositórios de dados e outras abstrações de domínio.

**api/src/infra:**
Detalhes de implementação, como código de acesso a banco de dados, implementações de frameworks, configurações de middleware e outras questões de infraestrutura.

**api/src/main:**
Inicialização da aplicação, configuração de injeção de dependência, scripts de inicialização e outros elementos relacionados ao ponto de entrada da aplicação.



### Outras informações

## Routes

/v1/status - Return current timestamp


# Path routes
src/presentation/http/Routes.ts



# Migrations

To create a new migration, you can use:
npm run typeorm migration:create -n src/infrastructure/database/postgresql/migrations/create-table-my-table

To use seed:
npm run typeorm:seed

