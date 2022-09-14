/**
 * Одиночка (Singleton) - порождающий паттерн проектирования
 * Нарушает принцип единой ответственности, так как решает сразу две проблемы:
 * 1. Гарантирует наличие единственного экземпляра класса
 * 2. Предоставляет глобальную точку доступа
 *
 * Применимость:
 * 1. Когда в программе должен быть единственный экземпляр какого-то класса, доступный
 * всем клиентам (вроде общего доступа к базе данных)
 * 2. В отличие от глобальных переменных, Singleton гарантирует, что никакой код не заменит
 * созданный экземпляр класса
 */

class Singleton {
  static instance: Singleton

  private randomNumber = Math.random()

  public constructor() {}

  public foo(): void {
    console.log(`Foo called. Random number: ${this.randomNumber}`)
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

const singleton1 = Singleton.getInstance()
const singleton2 = Singleton.getInstance()

singleton1.foo()
singleton2.foo()