---
title: 'Redux da Aplicação Yaje'
description: Esta é a explicação de como funciona o Redux da aplicação Yaje.
---

Este é um simples documento com a explicação de como funciona o Redux da aplicação Yaje, projeto ao qual estou trabalhando como freelancer.

## Início do Redux.

- No arquivo `./src/store/index.js` está o ínicio de todo o Redux da aplicação.
  Neste arquivo, é criada a store, são chamados os Middleware e os reducers da aplicação.

  Na criação da store, é chamado o *rootReducer* e os *rootSaga*, nos *rootReducer* estão os reducers da aplicação, que são eles:  user, tour, tourDetails e location. Se for chamado a ação de logout, o state recebe *undefined*.

  Depois, é rodada o *sagaMiddleware*, onde ele recebe o *rootSaga*, onde lá estão os sagas dos respectivos reducers da aplicação.

## Como cada reducer funciona

Em cada arquivo de reducer, por exemplo o do usuário, são importadas as funções necessárias, que podem ser diversas, como nesse exemplo, signUp, Logout, Login e etc, depois é criada a função que fará um Switch case que verificará qual é o tipo da requisição e retornará o que for necessário.

Os tipos, irei chamar de operações, cada operação têm suas respostas definidas no seguinte padrão:

- Request;
- Sucess;
- Failure;

Ou seja, o tipo de logout por exemplo, têm, **logoutRequest**, **logoutSucess** e **logoutFailure**.

Todos recebem o estado e o payload, tendo o payload uma mensagem que será retornada, os request sempre recebem o estado inicial, para caso vá para failure, ele conseguirá saber qual era o estado da aplicação antes dessa requisição, já no failure, ele retorna qual a mensagem de erro imposta no payload.

No signUp, existe uma posição do objeto com o seguinte nome: `isSigningUpPartner` que retorna um booleano, assim que saí da função de request, esse isSigningUpPartner é retornado como falso pois o usuário não está tentando se registrar, ele já está registrado ou não está mais registrando (caso erro). Também existe outra posição chamada: `signUpSuccess` que também é um booleano, caso ele receba `true`, toda a aplicação sabe que aquele usuário está registrado.

## 