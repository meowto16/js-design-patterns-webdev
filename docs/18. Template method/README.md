# [Template method (шаблонный метод)](https://www.youtube.com/watch?v=kFDEyshivVc&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=19&ab_channel=webDev)

**Template method** - это поведенческий паттерн проектирования, который определяет базовые шаги исполнения алгоритма.
А выполнение каждого шага делегирует соответствующим методам или подклассам.

## Когда нужен

## Пример
```typescript
abstract class Builder {
  build() {
    this.addEngine()
    this.installChassis()
    this.addElectronic()
    this.collectAccessories()
  }
}

class TeslaBuilder extends Builder {
  addEngine() {
    console.log('Add Electronic Engine')
  }
  
  installChassis() {
    console.log('Install Tesla chassis')
  }
  
  addElectronic() {
    console.log('Add special electronic')
  }
  
  collectAccessories() {
    console.log('Collect Accessories')
  }
}

class BmwBuilder extends Builder {
  addEngine() {
    console.log('Add BMW Engine')
  }
  
  installChassis() {
    console.log('Install BMW chassis')
  }
  
  addElectronic() {
    console.log('Add electronic')
  }
  
  collectAccessories() {
    console.log('Collect Accessories')
  }
}

const teslaBuilder = new TeslaBuilder()
const bmwBuilder = new BmwBuilder()

teslaBuilder.build()
/**
 * "Add Electronic Engine"
 * "Install Tesla chassis"
 * "Add special electronic"
 * "Collect Accessories"
 */

bmwBuilder.build()
/**
 * "Add BMW Engine"
 * "Install BMW chassis"
 * "Add electronic"
 * "Collect Accessories"
 */
```

## Резюме

Шаблонный метод определяет последовательность выполнения алгоритмов, имеющих одинаковый интерфейс
взаимодействия, но различную внутреннюю имплементацию
