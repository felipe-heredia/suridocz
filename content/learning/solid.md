---
title: 'Princípios SOLID'
description: 'Neste documento, vamos aprender sobre os princípios do SOLID.'
sidebar: 'learning'
prev: '/learning/introducao-a-computacao/'
next: '/summary/'
---

# Princípios SOLID

## O que cada letra do SOLID significa?

- _S_ refere-se á Single Responsability Principle, ou seja Princípio da responsabilidade única;
- _O_ refere-se á Open-Closed Principle, ou seja Princípio aberto e fechado;
- _L_ refere-se á Liskov Substitution Principle, ou seja Princípio da substituição de Liskov;
- _I_ refere-se á Interface Segregation Principle, ou seja Princípio da segregação da interface;
- _D_ refere-se á Dependency Inversion Principle, ou seja Princípio da Inversão da dependência;

### Single Responsability Principle

Este princípio nos diz que uma classe deve ser especializada em apenas um assunto e possuir apenas uma responsabilidade.

Quando fazemos uma classe que possui diversas responsabilidades, ao precisar modificar apenas uma, podemos acabar quebrando todas as outras responsabilidades, causando assim um efeito dominó e que resultará na quebra da classe e necessidade de modificar toda aquela classe, pelo simples motivo de precisar modificar uma função.

```ts
class Order {
    public function calculateTotalSum() {/*...*/}
    public function getItems() {/*...*/}
    public function getItemCount() {/*...*/}
    public function addItem(item: object) {/*...*/}
    public function deleteItem(item: object) {/*...*/}

    public function printOrder() {/*...*/}
    public function showOrder() {/*...*/}

    public function load() {/*...*/}
    public function save() {/*...*/}
    public function update() {/*...*/}
    public function delete() {/*...*/}
}
```

Esta class está de forma totalmente errada conforme o _S_ do princípio SOLID, pois ela realiza três tipos diferentes de tarefas, ela precisa lidar com informações, exibição e manipulação dos dados.

A violação deste princípio gerará alguns problemas no seu software:

- Falta de coesão;
- Alto acoplamento;
- Dificuldades de implementar testes automatizados;
- Dificuldade de reaproveitamento;

Vamos ver então como essa classe deveria ser:

```ts
class Order {
    public function calculateTotalSum() {/*...*/}
    public function getItems() {/*...*/}
    public function getItemCount() {/*...*/}
    public function addItem(item: object) {/*...*/}
    public function deleteItem(item: object) {/*...*/}
}

class OrderRepository {
    public function load(orderId: string) {/*...*/}
    public function save(order: object) {/*...*/}
    public function update(order: object) {/*...*/}
    public function delete(order: object) {/*...*/}
}

class OrderViewer {
    public function printOrder(order: object) {/*...*/}
    public function showOrder(order: object) {/*...*/}
}
```

Este principio não se limita a classes, ele deve ser aplicado em tudo que é responsável por executar uma ação.

Apenas com esse princípio, seu código será mais limpo e com uma fácil manutenção.

### Open-Closed Principle

Este princípio nos diz que objetos ou entidades devem estar abertos para extensão mas fechados para manutenção.

Quando recursos precisam ser adicionados, devemos estender e não alterar o código original.

```ts
class ContratoClt {
    public function salario() {/*...*/}
}

class Estagio {
    public function bolsaAuxilio() {/*...*/}
}

class FolhaDePagamento {
    private saldo;

    public function calcular(contrato) {
        if (contrato instanceof ContratoClt) {
            this.saldo = contrato.salario();
        } else if (contrato instanceof Estagio) {
            this.saldo = contrato.bolsaAuxilio()
        }
    }
}
```

Ao alterar uma classe existente para adicionar um novo comportamento, podemos introduzir bugs em nosso software que já funcionava.

Para adicionar um novo método de pagamento (PJ) devemos fazer de seguinte forma:

```ts
interface Remuneravel {
    public function remuneracao();
}

class ContratoClt implements Remuneravel {
    public function remuneracao() {/*...*/}
}

class ContratoPj implements Remuneravel {
    public function remuneracao() {/*...*/}
}

class Estagio implements Remuneravel {
    public function remuneracao() {/*...*/}
}

class FolhaDePagamento {
    private saldo;

    public function calcular(contrato: Remuneravel) {
        this.saldo = contrato.remuneracao();
    }
}
```

Desta forma, isolamos o comportamento que pode ser extensível através de uma interface, assim adicionar novos contratos seria uma forma fácil e não quebraria nossa aplicação.

### Liskov Substitution Principle

Este princípio diz que uma classe derivada deve ser substitutível por sua classe base.

Vamos entender direto com código, visto que a explicação é um pouco confusa:

```ts
class A {
    public function getNome() {
        console.log('Meu nome é A');
    }
}

class B extends A {
    public function getNome() {
        console.log('Meu nome é B')
    }
}

let objeto1 = new A;
let objeto2 = new B;

function imprimeNome(objeto: A) {
    return objeto.getNome();
}

imprimeNome(objeto1); // Meu Nome é A
imprimeNome(objeto2); // Meu nome é B
```

Para não violar esse princípio, precisamos usar injeção de dependências e utilizar outros princípios SOLID.

### Interface Segregation Principle

Neste princípio, uma classe não deve ser forçada a entregar métodos que não serão utilizados.

É melhor criar interfaces mais específicas para ele do que ter interfaces genéricas, vamos ao código:

```ts
interface Aves {
    public function setLocalizacao(longitude: string, latitude: string);
    public function setAltitude(altitude: string);
    public function renderizar();
}

class Papagaio implements Aves {
    public function setLocalizacao(longitude: string, latitude: string) {/*...*/}
    public function setAltitude(altitude: string) {/*...*/}
    public function renderizar() {/*...*/}
}

class Pinguim implements Aves {
    public function setLocalizacao(longitude: string, latitude: string) {/*...*/}
    public function setAltitude(altitude: string) {
        // Não faz nada... Pinguins não voam!
    }
    public function renderizar() {/*...*/}
}
```

Com este código, a função "setAltitude" tornou-se sem sentido na classe Pinguim, visto que eles não voam.

Vamos então ajeitar esse problema da seguinte forma:

```ts
interface Aves {
    public function setLocalizacao(longitude: string, latitude: string);
    public function renderizar();
}

interface AvesQueVoam extends Aves {
    public function setAltitude(altitude: string);
}

class Papagaio implements AvesQueVoam {
    public function setLocalizacao(longitude: string, latitude: string) {/*...*/}
    public function setAltitude(altitude: string) {/*...*/}
    public function renderizar() {/*...*/}
}

class Pinguim implements Aves {
    public function setLocalizacao(longitude: string, latitude: string) {/*...*/}
    public function renderizar() {/*...*/}
}
```

Desta forma, com uma mudança simples, podemos fazer com que os comportamentos das AvesQueVoam seja separados, e se tiverem mais aves que não voam, não será preciso deixar uma função sem ser utilizada nesta classe.

### Dependency Inversion Principle

Este princípio diz que devemos depender de abstrações e não de implementações.

Vamos para o código para que seja entendido:

```ts
use MySQLConnection;

class PasswordReminder {
    private dbConnection;

    public function __construct() {
        this.dbConnection = new MySQLConnection();
    }

    {/*...*/}
}
```

Neste exemplo, a classe PasswordReminder têm a responsabilidade de criar uma instância da classe `MySQLConnection` e caso for necessário usar a classe PasswordReminder para outro local, seria necessário levar a MySQLConnection junto, deixando assim com um acoplamento forte.

Então, vamos ajeitar este prolema da seguinte forma:

```ts
interface DBConnectionInterface {
    public function connect();
}

class MySQLConnection implements DBConnectionInterface {
    public function connect() {/*...*/}
}

class OracleConnection implements DBConnectionInterface {
    public function connect() {/*...*/}
}

class PasswordReminder {
    private dbConnection;

    public function __construct( dbConnection: DBConnectionInterface ) {
        this.dbConnection = dbConnection;
    }

    // Faz alguma coisa
}
```

Com este novo código, a criação do MySQLConnection deixa de ser responsabilidade da classe e passa ser uma dependência que deve ser injetada como um método construtor.

Desta forma, também nos ajeitamos para dentro de outros princípios, assim fazendo com que a classe PasswordReminder não saiba qual é o banco de dados que estamos utilizando.

Desta forma, podemos trocar o banco de dados sem com que quebre a nossa conexão com o banco de dados.
