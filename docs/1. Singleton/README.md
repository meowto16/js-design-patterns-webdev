# [Singleton]()

> **Относится к порождающим паттернам**

**Singleton** - Это просто объект, который есть в системе в одном экземпляре, 
плюс к нему есть какая-то глобальная точка доступа.

> Из разряда паттернов перешел в **антипаттерны**

## Когда нужен

Когда в системе должен быть объект в едином экземпляре, и к которому должен быть доступ из разных
частей программы.

## Как создать

1) Создать глобальную переменную и обращаться к ней. Весь код завернуть в модуль

Пример:
```js
let instance // глобальная переменная - не очень

class Counter {
  constructor() {
    if (!instance) instance = this // Будет получать ссылку на инстанс, а не возвращать постоянно новый
    instance.count = 0
    return instance
  }
  
  getCount() {
    return instance.count
  }
  
  increaseCount() {
    return instance.count++
  }
}
```

Несмотря на то, что у нас два разных объекта, они ссылаются на один объект Singleton.
Проблема реализации заключается в том, что у нас теперь есть глобальная переменная `instance`
```js
const myCount1 = new Counter()
const myCount2 = new Counter()

myCount1.increaseCount()
myCount1.increaseCount()
myCount2.increaseCount()
myCount2.increaseCount()

console.log(myCount1.getCount()) // 4
console.log(myCount2.getCount()) // 4
```

2) Определить внутри объекта

```js
class Counter {
  contructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance
    }
    this.count = 0
    Counter.instance = this
    return this
  }
  
  getCounter() {
    return this.count
  }
  
  increaseCounter() {
    return this.count++
  }
}
```

## Резюме

**Singleton** - это простой **порождающий** паттерн, который гарантирует, что у класса есть только **один
экземпляр**.
