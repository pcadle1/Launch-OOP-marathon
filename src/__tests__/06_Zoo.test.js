import Zoo from '../Zoo.js'
import Employee from '../Employee.js'
import Fox from '../Fox.js'
import Snake from '../Snake.js'
import Gorilla from '../Gorilla.js'
import Cage from '../Cage.js'

describe('A Zoo', () => {
  let zoo

  beforeEach(() => {
    zoo = new Zoo('The First Zoo in Outer Space')
  })

  it('is instantiated with a name', () => {
    expect(zoo.name).toEqual('The First Zoo in Outer Space')
  })

  it('should be instantiated with 10 cages by default, and assign them to the cages property', () => {
    expect(zoo.cages).toHaveLength(10)
    expect(zoo.cages[0]).toBeInstanceOf(Cage)
  })

  it('should instantiate with an opening and closing date', () =>{
    let zooTest = new Zoo('myzoo', 'Jan 10, 2021', 'June 20, 2021')
    expect(zooTest.openingDate).toEqual('Jan 10, 2021')
    expect(zooTest.closingDate).toEqual('June 20, 2021')
  })

  describe('#addEmployee', () => {
    it('should add an employee to the zoo', () => {
      let newEmployee = new Employee('Roger', 'Rabbit')
      zoo.addEmployee(newEmployee)

      expect(zoo.employees[0].firstName).toEqual('Roger')
    })
  })

  describe('#addAnimal', () => {
    it('should add an animal to the first open cage', () => {
      let newAnimal = new Fox('Kit')
      zoo.addAnimal(newAnimal)

      expect(zoo.cages[0].animal.name).toEqual('Kit')
    })

    it('should not add an animal to the rest of the open cages', () => {
      let newAnimal = new Fox('Kit')
      zoo.addAnimal(newAnimal)

      expect(zoo.cages[1].isEmpty()).toEqual(true)
    })

    it('should return a message that all of the cages are full if all cages contain an animal', () => {
      let newAnimal = new Fox('Kit')
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)
      zoo.addAnimal(newAnimal)

      expect(() => {zoo.addAnimal(newAnimal).toThrowError('Cages are all full')})
    })
  })

  describe('#visit', () => {
    it('should allow someone to visit and be spoken to by each animal and greeted by each employee', () => {
      let animalOne = new Snake('Sir Hiss')
      let animalTwo = new Gorilla('Bob')
      let employeeOne = new Employee('Jojo', 'The Great')
      let employeeTwo = new Employee('Derek', 'Zoolander')

      zoo.addAnimal(animalOne)
      zoo.addAnimal(animalTwo)
      zoo.addEmployee(employeeOne)
      zoo.addEmployee(employeeTwo)

      expect(zoo.visit()).toEqual(
        'Sssssire, ssssire, they may be banditsssss\nBob got a bad feeling about this...\nJojo The Great waved hello!\nDerek Zoolander waved hello!\n'
      )
    })
  })

  describe('#isOpen', () => {
    it('should return true if date is within the zoo season', () => {
      let zoo = new Zoo('myzoo', 'January 10, 2021', 'June 20, 2021')

      expect(zoo.isOpen('Feb 1, 2021')).toBe(true)
      expect(zoo.isOpen('Jan 1, 2021')).toBe(false)
    })
  })
})
