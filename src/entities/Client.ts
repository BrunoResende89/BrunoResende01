import Gender from './Gender.js'
import Person from './Person.js'

export class Client extends Person {
  push(clients: Client) {
    throw new Error('Method not implemented.')
  }
  email: number | string
  

  constructor (name: String, birth: Number, gender: Gender, email: number | string) {
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
      return `Sou Cliente VIP, meu nome é ${this.name}.`
    } else {
      return `Sou Cliente VIP, meu nome é ${this.name}.`
    }
  }

    showYourselfWithGreeting (greeting: Date) {
    return this.showYourself() + ' ' + greeting
  }
}

export default Client