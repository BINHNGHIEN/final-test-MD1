class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }
    toString(){
      document.write(" Name is "+ this.getName() + this.getWeight()+"<br>") ;

    }
}