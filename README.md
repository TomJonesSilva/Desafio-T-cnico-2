Backend - Desafio Técnico 2

Objetivo:
Desenvolver uma API RESTful para autenticação de usuários, que permita operações de cadastro (sign up),
autenticação (sign in) e recuperação de informações do usuário.

Especificações Técnicas:

1. Formato de Comunicação:

● Todos os endpoints devem aceitar e retornar apenas dados no formato JSON.
● Retorno JSON para situações de endpoint não encontrado.

2. Persistência de Dados:

● Armazenamento persistente de dados do usuário.

3. Respostas de Erro:
● Formato padrão:
{ &quot;mensagem&quot;: &quot;mensagem de erro&quot; } |

Endpoints:

1. Sign Up (Criação de Cadastro):
● Input:

● Output (sucesso):

● Erro:
○ E-mail já cadastrado: { &quot;mensagem&quot;: &quot;E-mail já existente&quot; } |
○
2. Sign In (Autenticação):
● Input:

● Output:

● Erros:
○ E-mail não cadastrado ou senha incorreta:
■ { &quot;mensagem&quot;: &quot;Usuário e/ou senha inválidos&quot; } |
○ Senha incorreta: status 401 com:
■ { &quot;mensagem&quot;: &quot;Usuário e/ou senha inválidos&quot; } |

3. Buscar Usuário:

● Requisição: Header Authentication com valor &quot;Bearer {token}&quot;
● Erros:
○ Token inválido: { &quot;mensagem&quot;: &quot;Não autorizado&quot; } |
○ Token expirado (mais de 30 minutos): { &quot;mensagem&quot;: &quot;Sessão inválida&quot; } |

Requisitos:
● Persistência de dados.
● Sistema de build com gerenciamento de dependências.
● Task runner para build.
● Padronização de estilo (ex: jsHint/jsLint).
● Framework: Express, Hapi, ou similar.
Requisitos Desejáveis:
● JWT como token.
● Testes unitários.
● Criptografia hash na senha e token.
