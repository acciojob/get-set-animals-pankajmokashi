//complete this code
class Animal {
	constructor(species){
		this.species = species
	}
	get getSpecies(){
		console.log(this.species)
	}
	makesound(){
		console.log()
	}
}

class Dog extends Animal {
	purr(){
		console.log("purr")
	}
}

class Cat extends Animal {
	bark(){
		console.log("woof")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
