

function Vehicle(weight, passengers, max_speed){
    this.weight = weight
    this.passengers = passengers
    this.max_speed = max_speed
    this.current_speed = 0
}

Vehicle.prototype.speed_up = function(){
    this.current_speed++
}


Car.prototype = new Vehicle /* Extender el prototipo */
Car.prototype.constructor = Car /* Arreglar el constructor */
function Car(){
    Vehicle.call(this, 4, 5, 200) /* Llamar al constructor de la superclase */
    this.doors  = 5
    this.weight = 2000
    this.payload = 400
    this.fuel = ["petrol", "gasoil"] 
    this.engine = "four-stroke reciprocating engine"
}

var renault = new Car()
renault.speed_up()

function MotorBike(){
    this.wheels = 2
    this.weight = 200
    this.passengers = 2
    this.max_speed = 300
    this.fuel = "petrol"
    this.engine = "two-stroke reciprocating engine"
}

function Ship(){
    this.weight = 25000000
    this.passengers = 2000
    this.max_speed = 50
    this.payload = 50000000
}
