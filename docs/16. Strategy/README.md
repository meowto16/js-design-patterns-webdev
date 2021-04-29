# [Strategy (Стратегия)](https://www.youtube.com/watch?v=te-teUr0N_w&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=17&ab_channel=webDev)

**Strategy** - это поведенческий паттерн проектирования, который определяет схожие алгоритмы и помещает их
в каждый отдельный класс.

После этого, между этими алгоритмами можно автоматически переключаться в ходе выполнения программы.

## Когда нужен

- Когда вам нужно использовать разные вариации какого-то алгоритма внутри одного объекта.
- Когда у вас есть множество похожих классов, отличающихся только некоторым поведением.
- Когда вы не хотите обнажать детали реализации алгоритмов для других классов.
- Когда различные вариации алгоритмов реализованы в виде развесистого условного оператора. 
  Каждая ветка такого оператора представляет собой вариацию алгоритма.

## Пример

```typescript
function baseStrategy(amount) {
  return amount
}

function premiumStrategy(amount) {
  return amount * 0.85
}

function platinumStrategy(amount) {
  return amount * 0.65
}

class AutoCart {
  constructor(discount) {
    this.discount = discount
    this.amount = 0
  }
  
  checkout() {
    return this.discount(this.amount)
  }
  
  setAmount(amount) {
    this.amount = amount
  }
}

const baseCustomer = new AutoCart(baseStrategy)
const premiumCustomer = new AutoCart(premiumStrategy)
const platinumCustomer = new AutoCart(platinumStrategy)

baseCustomer.setAmount(50000)
console.log(baseCustomer.checkout()) // 50000

premiumCustomer.setAmount(50000)
console.log(premiumCustomer.checkout()) // 42500

platinumCustomer.setAmount(50000)
console.log(platinumCustomer.checkout()) // 32500
```

## Резюме

Данный паттерн удобен, когда необходимо менять алгоритм выполнения "на лету", не затрагивая основной класс программы.

Вместо наследования тут делегирование.

Реализует принцип открытости/закрытости
