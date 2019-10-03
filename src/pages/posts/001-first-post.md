---
title: 'Javascript Cheatsheet [część 1]'
date: 2019-09-29 21:00:00
author: 'Mateusz Rostkowski'
image: ../../images/javascript-code.jpg
tags:
- javascript
- javascript-cheatsheet
- podstawy
---


### Spis treści

1. [Podstawy](#podstawy)
2. [Stric mode](#stric-mode)
3. [Zmienne](#zmienne)
4. [Typy danych oraz operatorów](#typy-danych-oraz-operatorów)
5. [Obiekty](#obiekty)
6. [Do while loop](#do-while-loop)
7. [While loop](#while-loop)
8. [For loop](#for-loop)
9. [For loop with break keyword](#for-loop-with-break-keyword)
10. [For loop with continue keyword](#for-loop-with-continue-keyword)

### [Część 2](javascript-cheatsheet-cz-2)

### Podstawy

```javascript
setTimeout(function () {
                            // funkcja napisana tutaj będzie miała jedno sekundowe opóźnienie
}, 1000);

console.log(a);             // wyświetla tekst w konsoli
document.write(a);          // nadpisuje cały dokument
alert(a);                   // wyświetla jako tekst w oknie alarmu
confirm("Really?");         // możliwość wybory tak/nie, zwraca true/false
prompt("Your age?","0");    // możliwość wpisania wartości, drugi argument jest wartością domyślną
```

### Stric mode

```javascript
"use strict";      // Włącza tryb rygorystyczny, który zapenia bardziej bezpieczne pisanie. 
x = 1              // Zwraca błąd ponieważ brakuje deklaracji zmiennej (var, let, const)
```

### Zmienne

```javascript
var variable;                   // zmienna
var hello = "Hello World";      // deklarowanie zmiennej jako string
var hi = "Hi" + " " + "Joe";    // = "Hi Joe"
var sum = 1 + 2 + "3";          // d = "33"
var a = [1, 2, 3, 48];          // deklarowanie zmiennej jako tablica(array)
var b = false;                  // boolean (true or false)
var r = /()/;                   // Wyrażenie regularne (RegEx - regualr expresions)
const PI = 3.14;                // stała zmienna - nie można jej zmieniać w dalszej części kodu
const f = function() {};        // obiekt funkcji
var first = 12,
    second = 13,
    third = 14;                 // deklarowanie zmiennych, może odbywać się po przecinku(dla lepszej czytelności stosuje się rozdzielanie wierszy)
let z = "zzz";                  // zmienna lokalna, zmienna ta jest deklarowana gdy będzie zmieniana w dalszej częsci kodu
```

### Typy danych oraz operatorów

```javascript
var age = 18;                       // Liczba
var name = "Jane"                   // String
var person = {
    firstName: "Jane",
    lastName: "Doe"                 // Obiekt
}
var truth = false;                  // Boolean
var sheets = ["HTML", "CSS", "JS"]  // Tablica
var a;
typeof a;                           // Undefined
var empty = null                    // wartość null

a && b                              // operator logiczny 'i' (and)
a || b                              // operator loginczy 'albo' (or)
a == b                              // a równe b
a != b                              // a nierówne b
a === b                             // a ściśle równe b (porównóje również czy obie zmienne mają ten sam typ danych)
a !=== b                            // a ściśle nie równe b
a += b                              // a = a + b (stosowane również z: *, -, /, %)
a++, a--                            // a = a + 1, a = a - 1
```

### Obiekty

```javascript
var student = {                                     // object name
    firstName: "Jane",                              // list of properties and values
    lastName: "Doe",
    age: 18,
    height: 180,
    fullName: function(){                           //object function
        return this.firstName + " " + this.lastName
    }
}

student.age = 19;                                   // setting "student" object age property to 19
student.age++;                                      // increamenting value by one
var name = student.fullName();                      // calling object function

console.log(student.age)                            // 20
console.log(name)                                   // "Jane Doe"
```

### Do while loop

```javascript
let i = 1;
let numbers = ""

do {
    i *= 2;
    numbers += i + ", "
} while (i < 10)

console.log(numbers) // "2, 4, 8, 16, ";
```

### While loop

```javascript
let i = 0;
let numbers = ""

while (i < 10) {
    i++;
    numbers += i + ", "
}

console.log(numbers)  // "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "
```

### For loop

```javascript
let i = 0;
let numbers = ""

for (i; i <= 10; i++) {
    numbers += i + ", "
}

console.log(numbers)  // "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "
```

### For loop with break keyword

```javascript
let i = 0;
let numbers = "";

for (i; i <= 10; i++) {
    if (i === 5) {
        console.log("i is: " + i + " and loop stop here");
        break;
    }
    numbers += i + ", "
}

console.log(numbers)  // "0, 1, 2, 3, 4, "
```

### For loop with continue keyword

```javascript
let i = 0;
let numbers = "";

for(i; i <= 10; i++) {
    if (i === 5) {
        console.log("i is: " + i + " and loop skips when i == 5");
        continue;
    }
    numbers += i + ", ";
}

console.log(numbers)  // "0, 1, 2, 3, 4, 6, 7, 8, 9, 10, "
```