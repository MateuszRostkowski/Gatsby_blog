---
title: 'Klasy w Javascript'
date: 2019-10-24 21:19:00
author: 'Mateusz Rostkowski'
image: ../../images/javascript-code-3.jpg
tags:
- javascript
- javascript-podstawy
- ES6
- arrays
---

## Table of contents

``` javascript
// tworzenie klasy oraz nadawanie jej nazwy
class Box {      

    // setup - funkcja ta jest odtwarzana tylko raz podczas tworzenia obiektu
    // funkcja ta może przyjmować parametry które następnie możemy przypisać do obiektu
    constructor(width, height, color) {
        // funkcja ta odrazu się wywoła kiedy utworzymy obiekt
        // jeżeli utworzymy więcej niż jeden obiekt funckja wywoła sie tyle samo razy ile utworzyliśmy obiektów dla każdego osobno

        console.log("The box is created")

        // słowo 'this' odnosi się do obecnego obiektu w którym klasa została wywołana
        // przypisujemy wartości z parametrów funkcji do własności obiektów
        this.width = width;
        this.height = height;
        this.color = color;
    }

    // metoda klasy, która jest odpowiedzialna za zwrócenie pola pudełka
    getArea() {
        return this.width * this.height;
    }
}
// tworzenie obiektu za pomocą klasy
// dodawanie parametrów do utworzenia obiektu
// za pomocą klasy możemy stworzyć nieskończenie wiele obkiektów które mają takie same właściwości o innej wartości
let myBox1 = new Box(5, 3, "blue");


```



