$(document).ready(function(){
	var data = new Array();
	var tempArray = new Array();

	tempArray.push('Tecnólogo em Análise e Desenvolvimento de Sistemas');
	tempArray.push(new Date('2016/02/01'));
	tempArray.push(new Date('2020/06/30'));
	tempArray.push('Centro Técnologico positivo');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('Curso Tecnico em Sistemas para internet');
	tempArray.push(new Date('2014/01/01'));
	tempArray.push(new Date('2015/06/01'));
	tempArray.push('TECPUC');
	data.push(tempArray);
	tempArray = new Array();

	data.reverse();

	var cont = 0.5 * data.length;

	data.forEach(function(item){
		var html = '<li style="transition-delay: '+cont+'s;">';
		html += '<div class="year">'+item[2].getFullYear()+'</div>';
		html += '<div class="conection"></div>';
		html += '<h2 class="title">'+item[0]+'</h2>';
		html += '<h3 class="dates"><img src="img/time-line/calendar.png" alt="Icone de Calendário"><span>';
		html += getDateFormatedToShow(item[1]) + ' até ' + getDateFormatedToShow(item[2]) + ' - ' + getDateDiff(item[1], item[2], 'text');
		html += '</span></h3>';
		html += '<h3 class="institution"><img src="img/time-line/institution.png" alt="Icone de Faculdade"><span>'+item[3]+'</span></h3>';
		html += '</li>';

		cont -= 0.5;

		$('ul.time-line').prepend(html)
	});
});