import Fox from '../Fox.js'

describe('A Fox', () => {
  let fox
  let foxName

  beforeEach(() => {
    foxName = 'Kit'
    fox = new Fox(foxName)
  })

  it('is instantiated with a name', () => {
    expect(fox.name).toEqual(foxName)
  })

  it("makes sure you haven't hardcoded the fox's name", () => {
    let secondFox = new Fox('Robin Hood')
    expect(secondFox.name).toEqual('Robin Hood')
  })

  describe('#speak', () => {
    it('says what foxes say', () => {
      expect(fox.speak()).toEqual('Ring-ding-ding-ding-dingeringeding!')
    })
  })
})
