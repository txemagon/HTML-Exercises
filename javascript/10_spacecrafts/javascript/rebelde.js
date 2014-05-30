
Rebelde.prototype = new Nave
Rebelde.prototype.constructor = Rebelde
function Rebelde(){
    Nave.apply(this, arguments)
    this.pos   = new Coordenada(0, 20)
    this.vel   = new Coordenada()
    this.ace   = new Coordenada()
    this.color = "blue"

}

Rebelde.prototype.update = function(){

}
