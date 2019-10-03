---
title: 'Javascript Cheatsheet [część 2]'
date: 2019-10-02 18:30:00
author: 'Mateusz Rostkowski'
image: ../../images/javascript-code.jpg
tags:
- javascript
- javascript-cheatsheet
- podstawy
---

Witajcie w drugiej części ściągi do javascriptu, mam nadzieje że się przyda :)

### Spis treści

1. [If Else](#if-else)
2. [Switch statement](#switch-statement)
3. [Obiekt Math](#obiekt-math)
4. [Obiekt Daty - Date](#obiekt-daty---date)
5. [String](#string)
6. [Liczby](#liczby)
7. [Tablice - Arrays](#tablice---arrays)

### [Część 1](/javascript-cheatsheet-cz-1)

### If Else

```javascript
var age = 15
let status = ""

if((age >= 14) && (age < 19)){      // wyrażenie logiczne
    status = "Eligible";            // wykonywany kod gdy wyrażenie jest prawdziwe
}else {                             // 
    status = "Not eligible";        // wykonywany kod gdy wyrażenie jest fałyszywe
}

console.log(status)                 // "Eligible" 
```

### Switch statement

```javascript
let weekDay = ""
let day = new Date().getDay()

switch(day) {
    case 6:
        weekDay = "Saturday";          // if (day == 6)
        break;
    case 0:
        weekDay = "Sunday";            // if (day == 0)
        break;
    default:
        weekDay = "Whatever"           // else
}

console.log(day)                       // 6 albo inny dzień
console.log(weekDay)                   // "Saturday"
```

### Obiekt Math

```javascript
var Pi = Math.PI                    // 3.141592653589793
Math.round(2.3)                     // 2 - zaokrąglenie
Math.round(2.5)                     // 3
Math.pow(2, 5)                      // 32 - 2 do potęgi 5
Math.sqrt(36)                       // 6 - pierwiastek kwadratowy
Math.abs(-3.14)                     // 3.14 - wartość absolutna, dodatnia
Math.ceil(3.1)                      // 4 - zaokrąglone w góre
Math.floor(3.8)                     // 3 - zaokrąglone w dół
Math.sin(0)                         // 0 - sinus z 0, itd.. cos, tan, atan, sain, acos,
Math.min(1, -1, 2, -2, 3, 4)        // -2 - najmniejsza wprowadzona wartość
Math.max(1, -1, 2, -2, 3, 4)        // 4 - największa wprowadzona wartość
Math.log(1)                         // 0 logartym naturalny
Math.exp(x)                         // Zwraca e^x (E.x, e = 2.7182)
Math.random()                       // randomowa liczba pomiędzy 0 i 1
Math.floor(Math.random() * 10) + 1; // randomowa cyfra pomiędzy 1 a 10
```

### Obiekt Daty - Date

```javascript
var d = new Date()              // deklaracja aktualnej daty do zmiennej d
d.getFullYear()                 // zwraca rok
d.getMonth()                    // zwraca miesiąc 0 - 11
d.getDate()                     // zwraca dzień miesiąca 1 - 31
d.getHours()                    // zwraca godzinę 0 - 23
d.getMinutes()                  // zwraca minuty 0 - 59
d.getSeconds()                  // zwraca sekundy 0 - 59
d.getMilliseconds()             // zwraca milisekundy 0 - 99
d.getTime()                     // zwraca miliskeundy od 1970 1 styczneń 00 : 00
```

### String

```javascript
var enter = 'I don\'t \n know'      // \n - nowa linia
var len = enter.length              // długość stringa
enter.indexOf("know")               // zwraca pozycje, -1 jeżeli nie występuje
enter.lastIndexOf("know")           // zwraca pozycje ostatniego znaku, -1 jeżeli nie występuje
enter.slice(6,9)                    // usuwa od 6 do 9 znaku w stringu, ujemne wartośći ucinają od tyłu
enter.replace("don\'t'", "do")      // znajduje i zamienia
enter.toUpperCase()                 // konwertuje cały string na duże litery
enter.toLowerCase()                 // konwertuje cały string na małe litery
enter.concat(" ", str2)             // enter + " " + str2
enter.charAt(2)                     // zwraca znak który występuje na 2 miejscu (licznoe od 0)
enter.charCodeAt(2)                 // zwraca kod znaku który występuje na 2 miejscu
enter.split(",")                    // rozdziela string po każdym przecinku, zwraca array
enter.split("")                     // rozdziela string na każdym wyrazie, zwraca array
128.toString(16)                    // konwertuje numer do hex(16), octal(8) albo binary(2)
```

### Liczby

```javascript
var pi = 3.141
pi.toFixed(0)                   // => 3
pi.toFixed(2)                   // => 3.14
p.valueOf()                     // => zwraca wartość
Number(true)                    // konwertuje do liczby (true = 1, false = 0)
Number(new Date())              // liczba milisekund od 1970 1 stycznia 00:00
parseInt("3 months")            // zwraca pierwszą liczbe: 3
parseFloat("3.5 months")        // zwraca pierwszą liczbe razem po przecinku : 3.5
```

### Tablice - Arrays

```javascript
var dogs = new Array("Bulldog", "Beagle", "Labrador")       // deklaracja

dogs[0]                         // zwraca wartość na pierwszym miejscu
dogs[0] = "Bull Terier"         // zmienia wartość na pierwszym miejscu

for(var i = 0; i < dogs.length; i++) {      // zwraca wszystkie wartości tablicy, w konsoli
    console.log(dogs[i])                
}

dogs.toString()                         // "Bulldog, Beagle, Labrador"
dogs.join (" * ")                       // "Buldog * Beagle * Labrador"
dogs.pop()                              // usuwa ostatni element
dogs.push("Golden Retriever")           // dodaje nowy element na końcu
dogs[dogs.length] = "Golden Retriever"  // to samo co push
dogs.shift()                            // usuwa pierwszy element
dogs.unshift()                          // dodaje nowy element na początku
delete dogs[0]                          // zmienia pierwszy element na undefinded (nie zalecane)
dogs.splice(2, 0, "Boxer", "Pug")       // dodaje element (gdzie, jak dużo usunąć, elementy)
var animals = dogs.concat(cats, birds)  // połączenie tablic
dogs.slice(1,4)                         // wydobywa elementy tablicy, nie zmieniając jej
dogs.sort()                             // sortuje tablice alfabetycznie
dogs.reverse()                          // sortuje tablice malejąco alfabetycznie 

x.sort((a, b) => {                      // sortowanie po numerach od najmniejszego do największego
    return a - b
})

lowest = x[0]                           // najmniejsza wartość

x.reverse((a, b) => {                   // sortowanie po numerach od największego do najmniejszego
    return a - b
})

x.sort((a, b) => {                      // sortowanie po numerach od największego do najmniejszego
    return b - a
})

highest = x[0];                         // highest item in sorted array

x.sort((a, b) => {                      // randomowe sortowanie tablicy
    return 0.5 - Math.random()
})

dogs[Math.floor(Math.random() * dogs.length)]            // randomowy element tablicy
```

