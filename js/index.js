$(document).ready(function() {
	//poner books y toys como acordion
	$('#myaccordion').accordion();
	//poner books y toys como acordion

		//poner <li> como dragables
			$('.source li').draggable({
				helper:'clone'
			});
		//poner <li> como dragables

		//porner car para recibir elementos
			$('#cart').droppable({
				drop:function(event,ui) {
					$('#Items').append($('<li></li>').text(ui.draggable.text()));
				}
			});
		//porner car para recibir elementos
});