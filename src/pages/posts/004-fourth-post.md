---
title: 'ES6 różnice między starszą wersją'
date: 2019-10-04 18:55:00
author: 'Mateusz Rostkowski'
image: ../../images/javascript-code-3.jpg
tags:
- javascript
- javascript-podstawy
- ES6
---


## Spis treści

1. [Zmienne](#zmienne)
2. [Łączenie strigów](#łączenie-stringów)
3. [Object literals](#object-literals)
4. [Dekonstrukcja obiektów](#dekonstrukcja-obiektów)
5. [Funkcje strzałkowe](#funkcje-strzałkowe)
6. [Domyślne parametry](#domyślne-parametry)
7. [Array functions](#array-functions)
8. [Constructor functions](#constructor-functions)
9. [Promises](#promises)

---
## Zmienne

#### Stary Javascript

```javascript
var names = ['Matt', 'Ala', 'Jan']      // deklarowanie zmiennej

var counter = 10;                       // deklarowanie zmiennej

var counter = 5;                        // ponowne deklarowanie zmiennej

console.log(counter)                    // 5

function sayName(){
    var name = 'mat'
    console.log(name)
}

sayName()                               // 'mat'

console.log(name)                       // error
```

#### ES6

```javascript
const todoList = ['Mleko', 'Jabłka'];//(const - constant - stała)
todoList = ['Mleko']                // zwraca error - nie można zmieniać stałej

let counter = 10;
counter = 5;                        // Ok
let counter = 5;                    // error

const list = [1,2,3,4,5];

for(let i = 0; i < list.length; i++){
    console.log(list[i])            // 1,2,3,4,5
}

console.log(i)                      // error
```
---
## Łączenie string'ów

#### Stary javascript
```javascript
var name = 'Mat'
var age = 25
console.log("Hello my name is " + name + ", and I'm " + age + " years old.")
```

#### ES6
```javascript
const name = 'Mat'
const age = 25
console.log(`Hello my name is ${name}, and I'm ${age} years old.`)
// używamy `` - znajduje się obok klawiszu 1 
```
---
## Object literals

#### Stary javascrip
```javascript
function getBook(title, author){
    return{
        title: title,
        author: author,
    }
}

var book = getBook('Harry Potter', 'JK');
console.log(book);              // { title: 'HaryPotter', author: 'JK' }
```
#### ES6
```javascript
function getBook(title, author){
    return{
        title,
        author,
    }
}

const book = getBook('Harry Potter', 'JK');
console.log(book);              // { title: 'HaryPotter', author: 'JK' }
```
---
## Dekonstrukcja obiektów

#### Stary javascrip
```javascript
var user = {
    name: 'Mat',
    age: 25
}
var myName = user.name;

console.log(myName);        // 'Mat'
```
#### ES6
```javascript
const user = {
    name: 'mat',
    age: 25
}

const { name, age } = user
console.log(name, age); // 'Mat', 25
```
---
## Funkcje strzałkowe

#### Stary javascrip
```javascript
function sayName() {
    console.log("Hello I'm Mat")
}

var sayAge = function() {
    console.log('My age is 25')
}

sayName();  // Hello I'm Mat
sayAge();   // My age is 25
```
#### ES6
```javascript
const sayName = () => {
    console.log("Hello I'm Mat")
}

sayName()   // Hello I'm Mat
```

#### Stary javascrip
```javascript
function sayHi(name){
    console.log("Hello " + name + "! How are you?")
}

sayHi("Mat")  / /Hello Mat! How are you?
```
#### ES6
```javascript
const sayHi = name => {         // Jeżeli jest tylko jeden parametr można pominąć nawiasy (jeżeli nie ma żadnego parametru, trzeba uzyć nawiasów)
    console.log(`Hello ${name}! How are you?`)
}
sayHi("mat")
```

```javascript
const sayHi = name => console.log(`Hello ${name}! How are you?`)
// Jeżeli funkcja zwraca tylko jedą linię kodu można pominąć nawiasy

sayHi("mat")
```

#### Stary javascrip
```javascript
var user = {
    name: 'Mat',
    age: 25,
    sayName: function(){
        console.log('My name is' + this.name)       // this.name oznacza obiekt w którym się znajduje czyli 'user.name'
        var that = this;
        var fullName = function() {
            console.log("My name is " + that.name + " and my age is " + that.age); 
        };
        fullName(); // My name is Mat and my age is 25
    },
}

user.sayName(); // My name is Mat
```
#### ES6
```javascript
const user = {
    name: 'Mat',
    age: 25,
    sayName: function(){ // gdybyśmy w tym momencie uzyli => to this odwoływało by się do obiektu "Window"
        console.log(`My name is ${this.name}`);
        const fullName = () => {
            console.log(`My name is ${this.name} and my age is ${this.age}`)
        }
    }
    fullName() // // My name is Mat and my age is 25
}
user.sayName(); // My name is Mat
```

#### Stary javascrip
```javascript
button.addEventListener(
    'click',
    function(){
        this        // odnosi się do "button"
    }
)

button.addEventListener(
    'click',
    function(){
        var that = this;
        var addFade = function(){
            that.style.display = "none";    // odnosi się do "button"   
        }
    }
)
```
#### ES6
```javascript
button.addEventListener(
    'click',
    function(){
        const addFade = () => {
            this.style.display = "none";        // odnosi się do button
        }
    }
)
```
---

## Domyślne parametry

#### Stary javascrip
```javascript
function multiply(x, y) {
    var a = x || 1;         // dzięki temu przy nie wprowadzeniu parametrów funkcja nie zwróci błędu
    var b = y || 1;
    console.log(a * b);
}
multiply(5, 10) // 50
multiply() // 1
```

#### ES6
```javascript
const add = (c = 1, d = 1) => {
    console.log(c + d)
}
add(20, 50) // 70
add() // 2
```
---
## Array functions 

##### forEach
```javascript
const shoppingList = ['Milk', 'Cows', 'Eggs' 'Bannana', 'Choco'];
```
```javascript
shoppingList.forEach((product) => {         // metoda ta działa bardzo podobnie do pętli for
    console.log(product + " need")
})

// Milk need
// Cows need
// Eggs need
// Bannana need
// Choco need

shoppingList.forEach((product, index) => {          
    console.log(`The index is ${index} and the product is ${product}`)
})

// The index is 0 and the product is Milk
// The index is 1 and the product is Cows
// The index is 2 and the product is Eggs
// The index is 3 and the product is Bannana
// The index is 4 and the product is Choco
```


##### Map
```javascript
const shoppingList = ['Milk', 'Cows', 'Eggs', 'Bannana', 'Choco'];
```
```javascript
const newList = shoppingList.map(item => {      // metoda map edytuje tablice
    return item + ' need';                       // każdy element tablicy zostanie zmieniony "element + ' new' "
})

const newList = shoppingList.map((item => item + ' need'); //  działa tak samo tylko zapis jest krótszy

console.log(newList); // [ 'Milk need', 'Cows need', 'Eggs need', 'Bannana need', 'Choco need' ]
```

##### Filter
```javascript
const shoppingList = ['Milk', 'Cows', 'Eggs' 'Bannana', 'Choco'];
```
```javascript
const filterList = shoppingList.filter(item => {    // metoda filter filtruje tablice
    return item === 'Eggs';                         // zwraca każdy element tablicy który zwróci "true" w danym wyrażeniu
})

const filterList = shoppingList.filter(item => return item === 'Eggs');
const notEggs = shoppingList.filter(item => return item !== 'Eggs');

console.log(filterList) // [ 'Eggs' ]
console.log(notEggs) // ['Milk', 'Cows', 'Bannana', 'Choco']
```
---
## Constructor functions 
#### Stary javascrip
```javascript
function Person(name, age, hairColor) {         // Konstruktor zazwyczaj zaczynany jest z dużej litery, żeby podkreślić że to jest właśnie to :)
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
}

Person.prototype.sayName = function(){
    console.log("My name is " + this.name);
}

var mat = new Person('Mat', 25, 'Blonde')

console.log(mat)        // { name: 'Mat', age: 25, hairColor: 'blonde' }
Mat.sayName;            // My name is Mat

function Matt(ocupation, hobbys, name, age, hairColor){
    Person.call(this, name, age, hairColor);
    this.ocupation = ocupation;
    this.hobbys = hobbys;
}

Matt.prototype = Object.create(Person.prototype)

const person = new Matt('junior dev', 'programming', 'Mat', 25, 'blonde')

console.log(person)    // Mat { ocupation: 'junior dev', hobbys: 'programming', name: 'Mat', age: 25, hairColor: 'blonde' }
person.sayName();      // My name is Mat
```

#### ES6

```javascript
class ShoppingList {
    constructor(items, number) {
        this.items = items;
        this.number = number;
    }
    sayList(){
        console.log(this.items);
    }
}

const myList = new ShoppingList(['Milk, Choco, Redbull'], 3)

console.log(myList)     // ShoppingList { items: [ 'Milk, Choco, Redbull' ], number: 3}
myList.sayList()        // [ 'Milk, Choco, Redbull' ]

class Product extends ShoppingList{
    constructor(ammount, cost, items, number){
        super(items, number);
        this.ammount = ammount;
        this.cost = cost;
    }
}

const product = new Product(['Redbull, Chocolate, Candy'], 3, 2, 20);

console.log(product);   // Product { items: ['Redbull, Chocolate, Candy'], nr: 3, ammount: 2, cost: 20 }
product.sayList();      // ['Redbull, Chocolate, Candy']
```
---
## Promises

#### Stary Javascript

```javascript

console.log('start')            // wyświetla się od razu po odpaleniu

function getData(data, callback){
    setTimeout(() => {
        console.log('reading from the database');
        callback({data: data})
    }, 2000);
}

getData(5, function(data){
    console.log(data);          // po 2 sekundach 'reading from the database' \n { data: 5 }
})

console.log('finish')           // wyświetla się od razu po odpaleniu
```
#### ES6

```javascript
const prom = new Promise((resolve, reject) => {
    // Kod asynchroniczny
    setTimeout( () => {
        resolve({ user: 'mat', pass: '6125512a236t3' });
        reject(new Error('something went wrong'))
    }, 2000)
})

prom.then(data => {
    console.log(data)           // po 2 sekundach { user: 'mat', pass: '6125512a236t3' }
})
.catch(err => {
    console.log(err);           // gdy wystąpi jakiś error wyświetli się 'something went wrong'
})
```
