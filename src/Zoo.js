import Cage from './Cage.js'
class Zoo{
    constructor(name, openingDate, closingDate){
        this.name = name
        this.openingDate = openingDate
        this.closingDate = closingDate
        this.cages = []
        this.employees = []
        for(let i = 0; i < 10; i++){
            this.cages.push(new Cage())
        }
    }

    addEmployee(employee){
        this.employees.push(employee)
    }

    addAnimal(animal){
        try{
            for(let i = 0; i < this.cages.length; i++){
                if (this.cages[i].isEmpty()){
                    this.cages[i].animal = animal
                    return
                }
            }
            throw new Error('Cages are all full')
        }catch(error){
            return error
        }
    }

    visit(){
        let result = []
        this.cages.forEach((cage) => {
            if(!cage.isEmpty()){
                result.push(cage.animal.speak())
            }
        })
        this.employees.forEach((emp) => {
            result.push(emp.greet())
        })

        return `${result.join('\n')}\n`
    }

    isOpen(date){
        let open = new Date(this.openingDate)
        let close = new Date(this.closingDate)
        date = new Date(date)
        open = open.getTime()
        close = close.getTime()
        date = date.getTime()

        return (date > open && date < close) ? true : false

    }
}
export default Zoo