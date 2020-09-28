# Explicação Redux do Yaje

- No arquivo `src/store/index.js` está o ínicio de todo o Redux da aplicação.
  Neste arquivo, é criada a store, são chamados os Middleware e os reducers.

  Na criação da store, é chamado o *rootReducer* e os *rootSaga*, nos *rootReducer* estão os reducers da aplicação, que são eles:  user, tour, tourDetails e location. Se for chamado a ação de logout, o state recebe *undefined*.

  Depois, é rodada o *sagaMiddleware*, onde ele recebe o *rootSaga*, onde lá estão os sagas dos respectivos reducers da aplicação.

  Cada reducer tem seus tipos definidos no seguinte padrão:

  - Request;
  - Sucess;
  - Failure;

  Todos recebem o estado e o payload, tendo o payload uma mensagem que será retornada

Depois da store criada, ela é passada para um provider, que está por volta de toda a aplicação, sendo assim possível que qualquer outro componente dentro da aplicação receba as respostas de cada reducer, por exemplo o reducer de login, a página de login pode receber o resultado, sendo ele um request e depois sucess ou failure, e caso for sucess, é modificado o estado daquele determinado componente e de todos os outros que dependem do mesmo reducer.

Por exemplo, se o usuário está na página de login e faz o request do Login, todos os outros componentes que dependem de saber se ele está logado ou não, são modificados, se o retorno do login for *sucess* o componente de carrido se modifica conforme aquele retorno.

Vamos ao exemplo do login.

O usuário entra pela primeira vez no site (ele já possui uma conta), mas caso tente acessar a página de carrinho, ele é barrado por ainda não estar logado; Então ele vai até a página de login, entra em sua conta, ao fazer essa entrada, o redux modifica todos os outros componentes que dependem dele estar logado, agora o carrinho sabe qual é o token do usuário para poder buscar da API quais são os itens que estão em seu carrinho.

Cada operação de reducer, como por exemplo a de login, recebe `request, sucess e failure` e assim sabe-se qual é o estado daquele reducer.

No login, existe uma posição do objeto com o seguinte nome: `isLoggin` que retorna um booleano, assim que saí da função de request, esse isLoggin é retornado como falso pois o usuário não está logando, ele já está logado ou não está mais logado. Também existe outra posição chamada: `loginSucess` que também é um booleano, caso ele sabe `true`, toda a aplicação sabe que aquele usuário está logado então a aplicação consegue pegar os dados dele, como o e-mail, o token de autorização entre outros dados necessários para que faça alguma função na aplicação.
