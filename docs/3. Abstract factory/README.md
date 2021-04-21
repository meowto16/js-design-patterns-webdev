# [Abstract factory (абстрактная фабрика)](https://www.youtube.com/watch?v=LDA4riuzgiw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=4&t=37s&ab_channel=webDev)

Абстрактная фабрика - это паттерн, который создает интерфейс, группирующий другие фабрики, которые логически связаны
друг с другом.

> Абстрактная фабрика — это порождающий паттерн проектирования, который позволяет создавать семейства связанных объектов, 
> не привязываясь к конкретным классам создаваемых объектов.

## Заметки

- У "подфабрик" должен быть одинаковый интерфейс создания объектов, чтобы им можно было управлять 
  из родительской фабрики (ну это логично)
- Мне был не совсем понятен пример из видео. На [refactoring.guru](https://refactoring.guru/ru/design-patterns/abstract-factory) 
  объясняется лучше

## Когда нужен

Когда бизнес-логика программы должна работать с разными видами связанных друг с другом продуктов, 
не завися от конкретных классов продуктов.

## Пример

Пример взял с [refactoring.guru](https://refactoring.guru/ru/design-patterns/abstract-factory/typescript/example)
```typescript
/**
 * Интерфейс Абстрактной Фабрики объявляет набор методов, которые возвращают
 * различные абстрактные продукты. Эти продукты называются семейством и связаны
 * темой или концепцией высокого уровня. Продукты одного семейства обычно могут
 * взаимодействовать между собой. Семейство продуктов может иметь несколько
 * вариаций, но продукты одной вариации несовместимы с продуктами другой.
 */
interface AbstractFactory {
    createProductA(): AbstractProductA;

    createProductB(): AbstractProductB;
}

/**
 * Конкретная Фабрика производит семейство продуктов одной вариации. Фабрика
 * гарантирует совместимость полученных продуктов. Обратите внимание, что
 * сигнатуры методов Конкретной Фабрики возвращают абстрактный продукт, в то
 * время как внутри метода создается экземпляр конкретного продукта.
 */
class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

/**
 * Каждая Конкретная Фабрика имеет соответствующую вариацию продукта.
 */
class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

/**
 * Каждый отдельный продукт семейства продуктов должен иметь базовый интерфейс.
 * Все вариации продукта должны реализовывать этот интерфейс.
 */
interface AbstractProductA {
    usefulFunctionA(): string;
}

/**
 * Эти Конкретные Продукты создаются соответствующими Конкретными Фабриками.
 */
class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A1.';
    }
}

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A2.';
    }
}

/**
 * Базовый интерфейс другого продукта. Все продукты могут взаимодействовать друг
 * с другом, но правильное взаимодействие возможно только между продуктами одной
 * и той же конкретной вариации.
 */
interface AbstractProductB {
    /**
     * Продукт B способен работать самостоятельно...
     */
    usefulFunctionB(): string;

    /**
     * ...а также взаимодействовать с Продуктами A той же вариации.
     *
     * Абстрактная Фабрика гарантирует, что все продукты, которые она создает,
     * имеют одинаковую вариацию и, следовательно, совместимы.
     */
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

/**
 * Эти Конкретные Продукты создаются соответствующими Конкретными Фабриками.
 */
class ConcreteProductB1 implements AbstractProductB {

    public usefulFunctionB(): string {
        return 'The result of the product B1.';
    }

    /**
     * Продукт B1 может корректно работать только с Продуктом A1. Тем не менее,
     * он принимает любой экземпляр Абстрактного Продукта А в качестве
     * аргумента.
     */
    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}

class ConcreteProductB2 implements AbstractProductB {

    public usefulFunctionB(): string {
        return 'The result of the product B2.';
    }

    /**
     * Продукт B2 может корректно работать только с Продуктом A2. Тем не менее,
     * он принимает любой экземпляр Абстрактного Продукта А в качестве
     * аргумента.
     */
    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}

/**
 * Клиентский код работает с фабриками и продуктами только через абстрактные
 * типы: Абстрактная Фабрика и Абстрактный Продукт. Это позволяет передавать
 * любой подкласс фабрики или продукта клиентскому коду, не нарушая его.
 */
function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

/**
 * Клиентский код может работать с любым конкретным классом фабрики.
 */
console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());
```

## Резюме

*webDev* не сказал довольно важную вещь: "Семейство продуктов может иметь несколько вариаций, но **продукты одной вариации несовместимы с продуктами другой.**".

Это означает, что в клиентском коде мы делаем выбор **конкретной фабрики**. А эта конкретная фабрика, в свою очередь,
**гарантирует совместимость полученных продуктов**

И в целом, это все.
