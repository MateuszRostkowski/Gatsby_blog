---
title: 'Jak stworzyć płynne sterowanie elementu strzałkami w Javascript'
date: 2019-10-20 22:26:00
author: 'Mateusz Rostkowski'
image: ../../images/javascript-code-3.jpg
tags:
- javascript
- javascript-podstawy
- ES6
- games
---


#### Skrypt gotowy do wrzucenia na stronę potrzebny jest tylko element, który checemy animować

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
