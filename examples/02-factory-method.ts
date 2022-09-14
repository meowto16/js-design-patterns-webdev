/**
 * Фабричный метод (Factory method)
 *
 * - Все возвращаемые объекты должны иметь общий интерфейс
 *
 * Структура:
 * 1. Продукт определяет общий интерфейс объектов, которые может произвести создатель и его подклассы.
 * 2. Конкретные продукты содержат код различных продуктов. (Отличаются реализацией, но интерфейс общий)
 * 3. Создатель объявляет фабричный метод, который должен возвращать новые объекты продуктов.
 * 4. Конкретные создатели по-своему реализуют фабричный метод, производя те или иные конкретные продукты.
 *
 * Применимость:
 * 1. Когда заранее неизвестны типы и зависимости объектов, с которыми должен работать ваш код.
 * 2. Когда вы хотите дать возможность пользователям расширять части вашего фреймворка или библиотеки.
 * 3. Когда вы хотите экономить системные ресурсы, повторно используя уже созданные объекты, вместо порождения новых.
 */

interface Button {
  render: () => void
}

abstract class Modal {
  protected abstract createButton(): Button

  public render(): void {
    const button = this.createButton()
    button.render()
  }
}

class AndroidButton implements Button {
  render() {
    console.log(`Android button rendered`)
  }
}

class IosButton implements Button {
  render() {
    console.log(`Ios button rendered`)
  }
}

class WebButton implements Button {
  render() {
    console.log(`Web button rendered`)
  }
}

class AndroidModal extends Modal {
  createButton() {
    return new AndroidButton()
  }
}

class IosModal extends Modal {
  createButton() {
    return new IosButton()
  }
}

class WebModal extends Modal {
  createButton() {
    return new WebButton()
  }
}

type SUPPORTED_ENVIRONMENTS = 'web' | 'ios' | 'android'

const environment: SUPPORTED_ENVIRONMENTS = 'android'

const getModal = (environment: SUPPORTED_ENVIRONMENTS) => {
  switch (environment) {
    case 'web': return new WebModal()
    case 'android': return new AndroidModal()
    case 'ios': return new IosModal()
    default:
      throw new Error(`Not supported environment "${environment}"`)
  }
}

const modal = getModal(environment)

modal.render()