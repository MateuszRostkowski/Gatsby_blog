---
title: 'Array methods - Podstawowe metody tablic w jednym miejscu'
date: 2019-10-24 20:19:00
author: 'Mateusz Rostkowski'
image: ../../images/javascript-code-3.jpg
tags:
- javascript
- javascript-podstawy
- ES6
- arrays
---

## Table of contents

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
11. [splice(in1, in2)](#splice) - wycina fragment z tablicy który znajduje się między in1 a in2
12. [map](#map) - tworzy nową tablicę zawierającą wyniki pętli wywołanej dla każdego elementu
13. [find](#find) - zwraca pierwszy element tablicy który spełnia warunek
14. [filter](#filter) - tworzy nową tablice z elementami które spełniają warunek
15. [reduce](#reduce) - iteruje po całej tablicy kumulując wartości do jednej zmiennej (przydatne do sumy elementów tablicy)
16. [forEach](#foreach) - działa podobnie do pętli for, iteruje po wszystkich elementach tablicy
17. [flat](#flat) - tworzy nową tablice ze wszystkich elementów, które są podtablicami

**Mutowanie tablic** - zmiana stanu tablicy

## Pop
#### Usuwa ostatni element tablicy oraz go zwraca (mutuje tablice)
```javascript
const array = [1, 2, 3, 4, 5];

const last = array.pop() ;       // usuwa ostatni element tablicy i go zwraca

console.log(array);               // [1, 2, 3, 4]
console.log(last);                // 5
```

## Push
#### "wpycha" element na koniec tablicy (mutuje tablice)

```javascript
const array = [1, 2, 3, 4, 5];

array.push(6, 7);                 // dodaje elementy na końcu tablicy

console.log(array);               // [1, 2, 3, 4, 5, 6, 7]
```

## shift
#### usuwa pierwszy element (mutuje tablice)

```javascript
const array = [1, 2, 3, 4, 5];

const first = array.shif();       // usuwa pierwszy element tablicy i go zwraca

console.log(array)                // [2, 3, 4, 5]
console.log(first)                // 1
```

## unshift
#### dodaje element/elementy na początku tablicy (mutuje tablice)

```javascript
const array = [1, 2, 3, 4, 5];

array.unshift(0);                 // dodaje element na początku tablicy

console.log(array)                // [0, 1, 2, 3, 4, 5]
```

## join
#### łączy elementy tablicy w stringa z rodzieleniem(separator)

```javascript
const array = [1, 2, 3, 4, 5];

const string = array.join('/');   // łączy tablice w stringa pomiędzy elementami wstawia '/'

console.log(string);              // '1/2/3/4/5'
```


## split
#### dzieli stringa na tablice rozdzielając w miejscu separatora

```javascript
const string "1/2/3/4/5"

const array = string.split('/')   // dzieli string na tablice w miejscach separatora

console.log(array)                // ["1", "2", "3", "4", "5"]
```


## includes
#### sprawdza czy element odpowiada argumentom metody

```javascript

```


## indexOf
#### wyszukuje pierwszy element kóry odpowiada argumentowi

```javascript

```


## concat
#### łączy dwa elementy w jedną tablice

```javascript

```


## slice
#### wydobywa fragment tablicy który znajduje się między in1 a in2

```javascript

```


## splice
#### wycina fragment z tablicy który znajduje się między in1 a in2

```javascript

```

## map
#### tworzy nową tablicę zawierającą wyniki pętli wywołanej dla każdego elementu

```javascript

```

## find
#### zwraca pierwszy element tablicy który spełnia warunek

```javascript

```

## filter
#### tworzy nową tablice z elementami które spełniają warunek

```javascript

```

## reduce
#### iteruje po całej tablicy kumulując wartości do jednej zmiennej (przydatne do sumy elementów tablicy)

```javascript

```

## forEach
#### działa podobnie do pętli for, iteruje po wszystkich elementach tablicy

```javascript

```

## flat
#### tworzy nową tablice ze wszystkich elementów, które są podtablicami

```javascript

```



