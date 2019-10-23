---
title: 'Array methods - wszystkie metody tablic w jednym miejscu'
date: 2019-10-20 22:26:00
author: 'Mateusz Rostkowski'
image: ../../images/javascript-code-3.jpg
tags:
- javascript
- javascript-podstawy
- ES6
- games
---


1. [pop](#pop) - usuwa ostatni element tablicy
2. [push](#push) - "wpycha" element na koniec tablicy
3. [shift](#shif) - usuwa pierwszy element 
4. [unshift](#unshift) - dodaje element na początku tablicy
5. [join(separator)](#join) - łączy elementy tablicy w stringa z rodzieleniem(separator)
6. [split(separator)](#split) - dzieli stringa na tablice rozdzielając w miejscu separatora
7. [includes(el, index)](#includes) - sprawdza czy element odpowiada argumentom metody
8. [indexOf(el)](#indexof) - wyszukuje pierwszy element kóry odpowiada argumentowi
9. [concat](#concat) - łączy dwa elementy w jedną tablice
10. [slice(in1, in2)](#slice) - wydobywa fragment tablicy który znajduje się między in1 a in2
11. [forEach](#foreach) - działa podobnie do pętli for, iteruje po wszystkich elementach tablicy





```javascript
const ball = document.querySelector(".ball");

let ballX = 0;
let ballY = 0;

let moveSpeed = 10;

// tworzymy tablicę która będzie przechowywać klawisze które zostały wciśnięte
// dzięki temu będzie można przechowywać wiele przycisków wciśniętych na raz
let keys = [];

// funkcja ta ustawia na ustalonej pozycji w tablicy wartość true podczas wciśniętego przycisku
function keyPressed(event) {
  keys[event.keyCode] = true;
}

// funkcja zmienia wartość true na wartość false podczas puszczenia przycisku
function keyReleased(event) {
  keys[event.keyCode] = false;
}

// funckja ta zmienia wartość położenia elementu
function animate() {
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  if (keys[37]) {
    ballX -= moveSpeed;
  }
  if (keys[38]) {
    ballY -= moveSpeed;
  }
  if (keys[39]) {
    ballX += moveSpeed;
  }
  if (keys[40]) {
    ballY += moveSpeed;
  }
  
  // dzięki temu ekran jest ciągle odświeżany i można uzyskać efekt płynnego przejścia
  requestAnimationFrame(animate);
}

// wywołanie funkcji animacji podczas załadowania skryptu
animate();


document.addEventListener("keydown", keyPressed);
document.addEventListener("keyup", keyReleased);
```
