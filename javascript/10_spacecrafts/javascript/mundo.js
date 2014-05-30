

function Mundo(ctx){
    this.ctx = ctx
    this.naves = []
}


Mundo.prototype.nueva_nave = function(tipo){
    tipo = tipo || Nave
    this.naves.push( new tipo() )
}

Mundo.prototype.paso = function(){
    this.ctx.clearRect(-250,0,500,500)
    for (var i=0; i<this.naves.length; i++){
        this.naves[i].update()
        this.naves[i].draw(this.ctx)
    }
}
