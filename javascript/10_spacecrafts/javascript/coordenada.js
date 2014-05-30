


function Coordenada(x, y){
    this.x = x || 0
    this.y = y || 0
}

Coordenada.prototype.accumulate = function(coord) {
    this.x += coord.x
    this.y += coord.y
}
