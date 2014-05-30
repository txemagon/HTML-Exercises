var mundo = null

function init(){
	var ctx = document.getElementById("game_screen").getContext("2d")
	ctx.transform(1,0,0,-1,250,500)
	mundo = new Mundo( ctx )
	for (var i=0; i<25; i++)
	   mundo.nueva_nave()

	mundo.nueva_nave(Rebelde)

	run()
}

function run(){
	   mundo.paso()
	   setTimeout(run, 20)
}
