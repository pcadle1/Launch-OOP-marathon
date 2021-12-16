import Gorilla from '../Gorilla.js'

describe('A Gorilla', () => {
  let gorilla
  let gorillaName

  beforeEach(() => {
    gorillaName = 'Bob'
    gorilla = new Gorilla(gorillaName)
  })

  it('is instantiated with a name', () => {
    expect(gorilla.name).toEqual(gorillaName)
  })

  it("makes sure you didn't hardcode the gorilla's name", () => {
    let secondGorilla = new Gorilla('Koko')
    expect(secondGorilla.name).toEqual('Koko')
  })

  describe('#speak', () => {
    it('speaks its tagline', () => {
      expect(gorilla.speak()).toEqual('Bob got a bad feeling about this...')
    })

    it("makes sure you didn't hardcode the gorilla's name in the tagline", () => {
      let thirdGorilla = new Gorilla('James')
      expect(thirdGorilla.speak()).toEqual('James got a bad feeling about this...')
    })
  })
})
