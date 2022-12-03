function car(model,year,company,owner) {
    this.model = model,
        this.year = year,
        this.company = company,
        this.drive = () => {
            console.log(`${owner} is driving ${model}`)
        }
    this.owner = owner
}

const obj = new car ('rav4', 1997, 'toyota', 'ravan');
obj.drive()
