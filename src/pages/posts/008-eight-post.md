---
title: "Działania na danych(tablica obiektów)"
date: 2019-11-28 21:19:00
author: "Mateusz Rostkowski"
image: ../../images/javascript-code-3.jpg
tags:
  - javascript
  - ES6
  - arrays
  - tablice
---

#### sumowanie wybranych kluczy

```javascript
const list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
]

function countLanguages(list) {
  return list.reduce((result, element) => {
    result[element.language] = (result[element.language] || 0) + 1
    return result
  }, {})
}

countLanguages(list1) // { C: 2, JavaScript: 1, Ruby: 1 }
```

#### sprawdzanie czy wartości danego klucza są takie same

```javascript
var list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript",
  },
]

function isSameLanguage(list) {
  let firstLan = list[0].language
  return list.every(dev => dev.language === firstLan)
}

isSameLanguage(list1) // true
```

#### znajdywanie najwyższej wartości w danym kluczu

```javascript
var list1 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
]

function findSenior(list) {
  const highestAge = list.reduce((oldest, next) => {
    return oldest.age > next.age ? oldest : next
  }).age

  return list.filter(dev => dev.age === highestAge)
}

findSenior(list1)

// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];
```

#### sprawdzenie czy dla podanego zbioru występują wszystkie wartości danego klucza

```javascript
var list1 = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
]

function allContinents(list) {
  const allContinents = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

  return allContinents.every(item =>
    list.some(element => element.continent === item)
  )
}

allContinents(list1) //

// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];
```

#### sprawdzenie czy dla danych przedziałów znajdują się wartości z danego klucza

```javascript
const list1 = [
  {
    firstName: "Harry",
    lastName: "K.",
    country: "Brazil",
    continent: "Americas",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Noa",
    lastName: "A.",
    country: "Israel",
    continent: "Asia",
    age: 40,
    language: "Ruby",
  },
  {
    firstName: "Andrei",
    lastName: "E.",
    country: "Romania",
    continent: "Europe",
    age: 59,
    language: "C",
  },
  {
    firstName: "Maria",
    lastName: "S.",
    country: "Peru",
    continent: "Americas",
    age: 60,
    language: "C",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 75,
    language: "Python",
  },
  {
    firstName: "Chloe",
    lastName: "K.",
    country: "Guernsey",
    continent: "Europe",
    age: 88,
    language: "Ruby",
  },
  {
    firstName: "Viktoria",
    lastName: "W.",
    country: "Bulgaria",
    continent: "Europe",
    age: 98,
    language: "PHP",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "JavaScript",
  },
]

function isAgeDiverse(list) {
  return [...Array(10)].every((v, index) => {
    return list.find(({ age }) => {
      return index === 9 ? age >= 100 : Math.floor(age / 10) === index + 1
    })
  })
}

allContinents(list1) //

// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];
```

```javascript
function addUsername(list) {
  return list.map(dev => {
  const number = 2027 - dev.age
  const username = dev.firstName.toLowerCase() + dev.lastName[0].toLowerCase() + number
    return {
      ...dev,
      username
    }
  })
}
```
