

function Coche(){
    Coche.total++
}
Coche.total = 0

AX.prototype = new Coche
AX.prototype.constructor = AX
function AX(){
    Coche.apply(this, arguments)
    AX.total++
}
AX.total = 0

C5.prototype = new Coche
C5.prototype.constructor = C5
function C5(){
    Coche.apply(this, arguments)
    C5.total++
}

C5.total = 0

var c1 = new AX()
var c2 = new C5()
var c3 = new AX()
