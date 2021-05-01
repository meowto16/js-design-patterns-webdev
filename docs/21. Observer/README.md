# [Observer (Наблюдатель)](https://www.youtube.com/watch?v=LgfWY2bDAtA&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=23&ab_channel=webDev)

**Observer** - это поведенческий паттерн проектирования, который создает механизм подписки, позволяющий
одним объектам следить за изменениями других объектов.

## Когда нужен

- Когда после изменения состояния одного объекта требуется что-то сделать в других, 
  но вы не знаете наперёд, какие именно объекты должны отреагировать.
- Когда одни объекты должны наблюдать за другими, но только в определённых случаях.

## Пример

```typescript
class AutoNews {
  constructor() {
    this.news = ''
    this.actions = []
  }
  
  setNews(text) {
    this.news = text
    this.notifyAll()
  }
  
  notifyAll() {
    return this.actions.forEach(subs => subs.inform(this))
  }
  
  register(observer) {
    this.actions.push(observer)
  }
  
  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer))
  }
}

class Jack {
  inform (message) {
    console.log(`Jack has been informed about: ${message.news}`)
  }
}

class Max {
  inform (message) {
    console.log(`Max has been informed about: ${message.news}`)
  }
}

const autoNews = new AutoNews()

autoNews.register(new Jack())
autoNews.register(new Max())

autoNews.setNews('New Tesla price is 40 000')

/*
  "Jack has been informed about: New Tesla price is 40 000"
  "Max has been informed about: New Tesla price is 40 000"
*/
```

## Резюме

Наблюдатель — это механизм слежения одного объекта за изменениями другого, и реагирование на эти изменения.

В целом, паттерн довольно понятный, относится к парадигме программирования "реактивное программирование".
