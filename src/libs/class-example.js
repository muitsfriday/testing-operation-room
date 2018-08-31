class SomeClass {
  constructor() {
    // console.log('constructor called')
    this.someProperties = 10
  }

  someMethod() {
    // console.log('method called')
  }

  static someStaticMethod() {
    // console.log('static method called')
  }
}

SomeClass.someStaticProperties = 'hello static'

// //

const someObject = new SomeClass()
someObject.someMethod()
SomeClass.someStaticMethod()
// const someString = SomeClass.someStaticProperties
