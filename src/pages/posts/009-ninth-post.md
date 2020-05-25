---
title: "Typescript for newbies"
date: 2020-05-25 21:19:00
author: "Mateusz Rostkowski"
image: ../../images/javascript-code.jpg
tags:
  - javascript
  - typescript
  - ES6
  - arrays
  - tablice
---

[Typescript playground](https://www.typescriptlang.org/play)

#### Tablice

```javascript
// both equals
type numArray = Array<number>
type numArray = number[]

const returnLast = (arr: number[]) => {
  return arr[arr.length - 1]
}

const last = returnLast([1, 2, 3]) // OK

// Type 'string' is not assignable to type 'number'
const lastString = returnLast(["1", "2"]) // Error
```
