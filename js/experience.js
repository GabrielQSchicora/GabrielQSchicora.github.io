$(document).ready(function(){
	var data = new Array();
	var tempArray = new Array();

	tempArray.push('img/experiences/sociedade-brasileira-cefaleia.jpg');
	tempArray.push('Estágio - Desenvolvedor PHP');
	tempArray.push(new Date('2016/03/01'));
	tempArray.push(new Date('2017/02/01'));
	tempArray.push('Sociedade Brasileira de Cefaléia');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/experiences/exercito-brasileiro.jpg');
	tempArray.push('Soldado');
	tempArray.push(new Date('2017/02/01'));
	tempArray.push(new Date('2018/01/01'));
	tempArray.push('Exército Brasileiro');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/experiences/legulas-solucoes-web.jpg');
	tempArray.push('Estágio - Desenvolvedor Front End');
	tempArray.push(new Date('2018/03/01'));
	tempArray.push(new Date('2018/06/01'));
	tempArray.push('Légulas Soluções para WEB');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/experiences/legulas-solucoes-web.jpg');
	tempArray.push('Desenvolvedor Front End');
	tempArray.push(new Date('2018/06/01'));
	tempArray.push(new Date('2019/04/13'));
	tempArray.push('Légulas Soluções para WEB');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/experiences/incratec.jpg');
	tempArray.push('Desenvolvedor PHP');
	tempArray.push(new Date('2019/03/12'));
	tempArray.push(new Date());
	tempArray.push('INCRATEC');
	data.push(tempArray);
	tempArray = new Array();

	var delay = 0.5 * data.length;

	data.forEach(function(item){
		var html = '<li style="transition-delay: '+delay+'s;">';
		html += '<div class="img" style="background-image: url('+item[0]+');"></div>';
		html += '<div class="text">';
		html += '<h2 class="function">'+item[1]+'</h2>';
		html += '<h3 class="dates"><img src="img/experiences/calendar.png" alt="Icone de Calendário"><span>';
		html += getDateFormatedToShow(item[2]) + ' até ';
		html += (getDateFormatedToShow(item[3]) == getDateFormatedToShow(new Date()))?'o momento':getDateFormatedToShow(item[3]);
		html += ' - ' + getDateDiff(item[2], item[3], 'text');
		html += '</span></h3>';
		html += '<h3 class="company"><img src="img/experiences/company.png" alt="Icone de Empresa"><span>'+item[4]+'</span></h3>';
		html += '</div>';
		html += '</li>';

		delay -= 0.5;

		$('ul.experiences').prepend(html)
	});
});