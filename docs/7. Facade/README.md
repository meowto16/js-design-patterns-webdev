# [Facade (Фасад)](https://www.youtube.com/watch?v=AWXBbIK-KMo&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=8&t=7s&ab_channel=webDev)

**Facade** - его задача скрыть сложную логику за простым фасадом. Собрать различные сложные структуры, объединить их
и выдать простой способ манипуляции.

>  Фасад может иметь урезанный интерфейс, **не имеющий 100% функциональности**, которой можно достичь, используя сложную подсистему напрямую. 
> Но он предоставляет именно те фичи, которые нужны клиенту, и скрывает все остальные.

## Когда нужен

- Когда нужно спрятать большую и непонятную реализацию внутри себя, а наружу выдавать понятный интерфейс взаимодействия.

Поэтому если в коде есть громоздкие реализации, то все это можно смело заворачивать в класс фасада.

> Фасад полезен, если вы используете какую-то сложную библиотеку 
> со множеством подвижных частей, но вам нужна **только часть её возможностей.**

- Когда вы хотите разложить подсистему на отдельные слои.

> Используйте фасады для определения точек входа на каждый уровень подсистемы. 
> Если подсистемы зависят друг от друга, то зависимость можно упростить, разрешив подсистемам обмениваться информацией только через фасады.

## Пример

```typescript
class Conveyor {
  setBody() {
    console.log('Body set!')
  }

  getEngine() {
    console.log('Dismantle Engine!')
  }

  setEngine() {
    console.log('Engine set!')
  }

  setInterior() {
    console.log('Exterior added!')
  }

  getInterior() {
    console.log('Update interior!')
  }

  setExterior() {
    console.log('Added interior!')
  }

  setWheels() {
    console.log('Wheels!')
  }

  addElectronics() {
    console.log('Added electronics!')
  }

  paint() {
    console.log('Car painted!')
  }
}

class ConveyorFacade {
  constructor(car) {
    this.car = car
  }
  
  // У нас есть один удобный метод реализации, реализация которого спрятана за фасадом
  assembleCar() {
    this.car.setBody()
    this.car.setEngine()
    this.car.setInterior()
    this.car.setExterior()
    this.car.setWheels()
    this.car.addElectronics()
    this.car.paint()
  }
  
  // Демонтаж старого и установка нового
  changeEngine() {
    this.car.getEngine()
    this.car.setEngine()
  }
  
  changeInterior() {
    this.car.getInterior()
    this.car.setInterior()
  }
}

const conveyor = new ConveyorFacade(new Conveyor())

const car = conveyor.assembleCar()
car = conveyor.changeEngine()
car = conveyor.changeInterior()
```
