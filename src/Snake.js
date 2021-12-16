class Snake{
    constructor(name){
        this.name = name
        this.shedCount = 0
    }

    speak(){
        return `Sssssire, ssssire, they may be banditsssss`
    }

    shed(){
        this.shedCount++
        return `${this.name} has been reborn for the ${this.shedCount} time!`
    }
}

export default Snake