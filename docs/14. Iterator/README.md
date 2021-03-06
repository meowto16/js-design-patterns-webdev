# [Iterator (Итератор)](https://www.youtube.com/watch?v=bjH4NHItd3U&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=15&ab_channel=webDev)

**Iterator** - поведенческий паттерн проектирования, который дает возможность последовательно обходить элементы
составных объектов, не раскрывая их внутреннее представление.

> Ключевая идея паттерна: вынести поведения обхода коллекции из самой коллекции в отдельный класс
> Умный перебор коллекции, без раскрытия внутреннего поведения элементов

## Когда нужен
- Когда у вас есть сложная структура данных, и вы хотите скрыть от клиента детали её реализации
  (из-за сложности или вопросов безопасности).
- Когда вам нужно иметь несколько вариантов обхода одной и той же структуры данных.
- Когда вам хочется иметь единый интерфейс обхода различных структур данных.

## Пример

```typescript
class Iterator {
  constructor(el) {
    this.index = 0
    this.elements = el
  }
  
  next() {
    return this.elements[this.index++]
  }
  
  hasNext() {
    return this.index < this.elements.length
  }
}

const collection = new Iterator(['Audi', 'BMW', 'Tesla', 'Mercedes'])

while(collection.hasNext()) {
  console.log(collection.next())
}
```

## Резюме

С этим паттерном я встречался ранее. Используется например в 1C-Bitrix при переборе строк выборки из `GetList`.

Предоставляем инструмент доступа к объектам, без возможности как-то повлиять на эти объекты.
