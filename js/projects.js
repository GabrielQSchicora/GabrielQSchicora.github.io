$(document).ready(function(){
	var data = new Array();
	var tempArray = new Array();

	tempArray.push('img/projects/cd6.jpg');
	tempArray.push('https://www.cd6.com.br');
	tempArray.push('CD6');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/projects/dentvida.jpg');
	tempArray.push('https://www.dentvida.com.br');
	tempArray.push('Dentvida');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/projects/madepinus.jpg');
	tempArray.push('https://www.casamadepinus.com.br');
	tempArray.push('Casa Madepinus');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/projects/forca-vital.jpg');
	tempArray.push('https://www.forcavital.net');
	tempArray.push('Força Vital');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/projects/giorgio-baretta.jpg');
	tempArray.push('https://www.giorgiobaretta.com.br');
	tempArray.push('Dr. Giorgio Baretta');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/projects/persianas.jpg');
	tempArray.push('https://persianasepersianas.com/loja/');
	tempArray.push('Persianas & Persianas');
	data.push(tempArray);
	tempArray = new Array();

	data.reverse();

	data.forEach(function(item){
		var html = '<li style="background-image: url('+item[0]+');">'
		html += '<a href="'+item[1]+'" target="_blank"><span>'+item[2]+'</span></a>';
		html += '</li>';

		$('ul.projects').prepend(html)
	});
});