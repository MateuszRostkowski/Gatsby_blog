---
title: 'Javascript Cheatsheet [część 2]'
date: 2019-10-02 18:30:00
author: 'Mateusz Rostkowski'
image: ../../images/javascript-code.jpg
tags:
- code
- About-me
---


### Spis treści

1. [](#)
2. [](#)
3. [](#)
4. [](#)
5. [](#)
6. [](#)
7. [](#)
8. [](#)
9. [](#)
10. [](#)

### If Else

```javascript
var age = 15
let status = ""

if((age >= 14) && (age < 19)){      // logical condition
    status = "Eligible";            // executed if condition is true
}else {                             // else block is optional
    status = "Not eligible";        // executed if condition is false
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

console.log(day)                       // 6 or whatever the day is
console.log(weekDay)                   // "Saturday"
```

### Math object

```javascript
var Pi = Math.PI                    // 3.141592653589793
Math.round(2.3)                     // 2 - rounded
Math.round(2.5)                     // 3
Math.pow(2, 5)                      // 32 - 2 to the power of 5
Math.sqrt(36)                       // 6 - square root
Math.abs(-3.14)                     // 3.14 - absolute, positive value
Math.ceil(3.1)                      // 4 - rounded up
Math.floor(3.8)                     // 3 - rounded down
Math.sin(0)                         // 0 - sinus of 0, etc.. cos, tan, atan, sain, acos,
Math.min(1, -1, 2, -2, 3, 4)        // -2 - the lowes value
Math.max(1, -1, 2, -2, 3, 4)        // 4 - the highest value
Math.log(1)                         // 0 natural logarithm
Math.exp(1)                         // 2.7182 pow (E.x)
Math.random()                       // random number between 0 and 1
Math.floor(Math.random() * 10) + 1; // random integer, between 1 and 10
```

### Date object

```javascript
var d = new Date()              // assig Date current Date object to d variable
d.getFullYear()                 // get year from date
d.getMonth()                    // get month of the year 0 - 11
d.getDate()                     // get day of the month 1 - 31
d.getHours()                    // get hours of the day 0 - 23
d.getMinutes()                  // get minutes 0 - 59
d.getSeconds()                  // get seconds of the minute 0 - 59
d.getMilliseconds()             // get Milliseconds of the minute 0 - 99
d.getTime()                     // Milliseconds since 1970 1 january 00 : 00
```

### Strings

```javascript
var enter = 'I don\'t \n know'            // \n new line
var len = enter.length              // string length
enter.indexOf("know")               // return position, -1 if doesn't contain
enter.lastIndexOf("know")           // return end position, -1 if doesn't contain
enter.slice(6,9)                    // cuts out from 6 to 9 letters in string, negative value count from behind
enter.replace("don\'t'", "do")      // finds and replace, takes regualr expression
enter.toUpperCase()                 // convert to upper case
enter.toLowerCase()                 // convert to lower case
enter.concat(" ", str2)             // abc + " " + str2
enter.charAt(2)                     // character at index (from 0)
enter.charCodeAt(2)                 // character code at index 
enter.split(",")                    // split string on commas, returns array
enter.split("")                     // split on characters
128.toString(16)                    // number to hex(16), octal(8) or binary(2)
```

### Numbers and Math

```javascript
var pi = 3.141
pi.toFixed(0)                   // => 3
pi.toFixed(2)                   // => 3.14
p.valueOf()                     // => returns value
Number(true)                    // converts to number (true = 1, false = 0)
Number(new Date())              // number of Milliseconds since 1970
parseInt("3 months")            // returns the first number: 3
parseFloat("3.5 months")        // returns the first float number: 3.5
```

### Arrays

```javascript
console.log(dogs[Math.floor(Math.random() * dogs.length)])
var dogs = new Array("Bulldog", "Beagle", "Labrador")       // declaration

dogs[0]                         // acces value at index 0
dogs[0] = "Bull Terier"         // change value at index 0

for(var i = 0; i < dogs.length; i++) {      // parsing with array.length
    console.log(dogs[i])                
}

dogs.toString()                         // "Bulldog, Beagle, Labrador"
dogs.join (" * ")                       // "Buldog * Beagle * Labrador"
dogs.pop()                              // removes last item
dogs.push("Golden Retriever")           // adds new element to the end
dogs[dogs.length] = "Golden Retriever"  // the same as push
dogs.shift()                            // remove first element
dogs.unshift()                          // add new element to the begining
delete dogs[0]                          // change element to undefined (not recomended)
dogs.splice(2, 0, "Boxer", "Pug")       // add elements (where, how many to remove, element list)
var animals = dogs.concat(cats, birds)  // join to arrays
dogs.slice(1,4)                         // elements from [1] to [4 - 1]
dogs.sort()                             // sort array alphoabethicaly
dogs.reverse()                          // sort array in descending order

x.sort((a, b) => {                      // numeric sort
    return a - b
})
lowest = x[0]                           // lowest item in sorted array

x.sort((a, b) => {                      // numeric descending sort
    return b - a
})
highest = x[0];                         // highest item in sorted array

x.sort((a, b) => {                      // random order sort
    return 0.5 - Math.random()
})

dogs[Math.floor(Math.random() * dogs.length)]            // random item from array
```

### 

```javascript

```

### 

```javascript

```

### 

```javascript

```

### 

```javascript

```

