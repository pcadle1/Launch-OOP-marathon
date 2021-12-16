import Snake from '../Snake.js'

describe('A Snake', () => {
  let snake

  beforeEach(() => {
    snake = new Snake('Sir Hisss')
  })

  it('is instantiated with a name', () => {
    expect(snake.name).toEqual('Sir Hisss')
  })

  it("makes sure you haven't hardcoded the name", () => {
    let secondSnake = new Snake('Kaa')
    expect(secondSnake.name).toEqual('Kaa')
  })

  it('is instantiated with a shedCount property that starts at 0', () => {
    expect(snake.shedCount).toEqual(0)
  })

  describe('#speak', () => {
    it('says what snakes say', () => {
      expect(snake.speak()).toEqual(
        'Sssssire, ssssire, they may be banditsssss'
      )
    })
  })

  describe('#shed', () => {
    it('increases the snakes shed count by 1', () => {
      snake.shed()
      expect(snake.shedCount).toEqual(1)
    })

    it('returns a descriptive message about the snake\'s shedding habits' , () => {
      expect(snake.shed()).toEqual(`${snake.name} has been reborn for the ${snake.shedCount} time!`)
    })
  })
})