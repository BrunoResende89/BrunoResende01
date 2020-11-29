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

    if (!name: any) {
      throw new ReferenceError('name')
    }

    if (!birth: any) {
      throw new ReferenceError('birth')
    }

    if (!gender: any) {
      throw new ReferenceError('gender')
    }

  public showYourself () {
    if (this.gender === Gender.Male) {
      return `Sou um aluno, meu nome é ${this.name}.`
    } else {
      return `Sou uma aluna, meu nome é ${this.name}.`
    }
  }

  public showYourselfWithGreeting (greeting: string) {
    return this.showYourself() + ' ' + greeting
  }

    
}

export default Person