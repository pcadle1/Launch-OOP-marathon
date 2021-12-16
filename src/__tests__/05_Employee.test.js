import Employee from '../Employee.js'

describe('An Employee', () => {
  let employee
  let newEmployee

  beforeEach(() => {
    employee = new Employee('Derek', 'Zoolander')
  })

  it('is instantiated with a first name', () => {
    expect(employee.firstName).toEqual('Derek')
  })

  it('is instantiated with a last name', () => {
    expect(employee.lastName).toEqual('Zoolander')
  })

  it('has a default title', () => {
    expect(employee.title).toEqual('Zookeeper')
  })

  it('allows for a custom title', () => {
    newEmployee = new Employee(
      'Zerek',
      'Doolander',
      'Educator at the School for Ants'
    )
    expect(newEmployee.title).toEqual('Educator at the School for Ants')
  })

  describe('#fullTitle', () => {
    it("returns the employee's full name and title", () => {
      expect(employee.fullTitle()).toEqual('Derek Zoolander, Zookeeper')
    })

    it("makes sure you didn't hardcode the name, or title in full title", () => {
      expect(newEmployee.fullTitle()).toEqual('Zerek Doolander, Educator at the School for Ants')
    })
  })

  describe('#greet', () => {
    it("returns a string with the employee's name and a greeting", () => {
      expect(employee.greet()).toEqual('Derek Zoolander waved hello!')
    })

    it("makes sure you didn't hardcode the name in the greet method", () => {
      expect(newEmployee.greet()).toEqual('Zerek Doolander waved hello!')
    })
  })
})
