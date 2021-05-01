# [Command (Команда)](https://www.youtube.com/watch?v=jWsyfeOkv9Q&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=22&ab_channel=webDev)

**Command** - это поведенческий паттерн проектирования, который помогает инкапсулировать некоторые действия 
и необходимые для них данные, и таким образом помогает отделить клиента от получателя.

Он превращает запросы в объекты, что позволяет передавать их как аргументы в методы.

## Когда нужен

- Когда вы хотите параметризовать объекты выполняемым действием.
- Когда вы хотите ставить операции в очередь, выполнять их по расписанию или передавать по сети.
- Когда вам нужна операция отмены.

## Пример

```typescript
class Driver {
  constructor(command) {
    this.command = command
  }

  execute() {
    this.command.execute()
  }
}

class Engine {
  constructor() {
    this.state = false
  }

  on() {
    this.state = true
  }

  off() {
    this.state = false
  }
}

class OnStartCommand {
  constructor(engine) {
    this.engine = engine
  }

  execute() {
    this.engine.on()
  }
}

class OnSwitchOffCommand {
  constructor(engine) {
    this.engine = engine
  }
  
  execute() {
    this.engine.off()
  }
}

// Check Engine status
const engine = new Engine()

console.log(engine)
/*
Object {
  state: false
}
 */

// Start Engine
const onStartCommand = OnStartCommand(engine)
const driver = new Driver(onStartCommand)
driver.execute()

console.log(engine)
/*
Object {
  state: true
}
 */
```

## Резюме

Пример не особо понятен.

Но вообще, этот паттерн напоминает redux, можно даже сопоставить:

1) The Store = The Receiver
2) The Action = The Command
3) Dispatch = Executor

