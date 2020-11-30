import Gender from './Gender.js'

export class Person {
    name: String
    birth: Date
    gender: Gender
  push: any

    constructor (name: String, birth: Date, gender: Gender) {
        this.name = name
        this.birth = birth
        this.gender = gender
    }

    IShowYourself () {
      const article = this.gender === Gender.Male ? 'o' : 'a'
      return `Olá, eu sou ${article} ${this.name}.`
    }
  }

  export default Person