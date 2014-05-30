function Nave(){
   this.pos   = new Coordenada(Math.random() * 500 - 250, Math.random() * 500 )
   this.vel   = new Coordenada(Math.random() * 20 - 10, Math.random() * 20 - 10)
   this.ace   = new Coordenada(Math.random() * 2 - 1, Math.random() * 2 - 1) 
   this.life  = 100;
   this.ammo  = 100;
   this.fuel  = 100;
   this.color = "red"
}

Nave.prototype.draw = function(ctx){
   ctx.beginPath()
   ctx.arc(this.pos.x, this.pos.y, 10, 0, 2 * Math.PI)
   ctx.strokeStyle = this.color
   ctx.stroke()
}

Nave.prototype.update = function(){
   this.vel.accumulate(this.ace)
   this.pos.accumulate(this.vel)
}
