import Gender from './Gender.js'
import Person from './Person.js'

export class Client extends Person {
  email: number | string
  

  constructor (name: String, birth: Date, gender: Gender, email: number | string) {
    super(name, birth, gender)
    this.email = email

    if (!name) {
      throw new ReferenceError('name')
    }

    if (!birth) {
      throw new ReferenceError('birth')
    }

    if (!gender) {
      throw new ReferenceError('gender')
    }

    this.email = email
    }

    showYourself () {
    if (this.gender === Gender.Male) {
      return `Sou um aluno, meu nome é ${this.name}.`
    } else {
      return `Sou uma aluna, meu nome é ${this.name}.`
    }
  }

    showYourselfWithGreeting (greeting: string) {
    return this.showYourself() + ' ' + greeting
  }
}

export default Client