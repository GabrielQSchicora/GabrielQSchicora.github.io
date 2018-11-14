$(document).ready(function(){
	var data = new Array();
	var tempArray = new Array();

	tempArray.push('img/qualifications/php.jpg');
	tempArray.push('#777bb3');
	tempArray.push('93%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/html.jpg');
	tempArray.push('#f16529');
	tempArray.push('93%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/css.jpg');
	tempArray.push('#27aae0');
	tempArray.push('88%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/python.jpg');
	tempArray.push('#ffd53d');
	tempArray.push('35%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/sql.jpg');
	tempArray.push('#0079d6');
	tempArray.push('60%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/js.jpg');
	tempArray.push('#e9ca32');
	tempArray.push('40%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/jquery.jpg');
	tempArray.push('#0867ad');
	tempArray.push('80%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/ajax.jpg');
	tempArray.push('#378fca');
	tempArray.push('65%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/android.jpg');
	tempArray.push('#94c248');
	tempArray.push('20%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/photoshop.jpg');
	tempArray.push('#a0cbff');
	tempArray.push('45%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/java.jpg');
	tempArray.push('#e35400');
	tempArray.push('30%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/csharp.jpg');
	tempArray.push('#9e73d9');
	tempArray.push('30%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/sass.jpg');
	tempArray.push('#cd6799');
	tempArray.push('40%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/linux.jpg');
	tempArray.push('#e1b92f');
	tempArray.push('25%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/mysql.jpg');
	tempArray.push('#e58f00');
	tempArray.push('70%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/pdo.jpg');
	tempArray.push('#006189');
	tempArray.push('70%');
	data.push(tempArray);
	tempArray = new Array();

	tempArray.push('img/qualifications/agile.jpg');
	tempArray.push('#b01842');
	tempArray.push('50%');
	data.push(tempArray);
	tempArray = new Array();

	data.sort(sortFunc);

	var delay = 0.1 * data.length;

	function sortFunc(a, b){
		if(a[2] === b[2]) {
			return 0;
		}else{
			return (a[2] < b[2]) ? -1 : 1;
		}
	}

	data.forEach(function(item){
		var html = '<li>'
		html += '<div class="img" style="background-image: url('+item[0]+');"></div>';
		html += '<div class="percent zero" style="background-color: '+item[1]+'; width: '+item[2]+'; transition-delay: '+delay+'s;"></div>';
		html += '</li>';

		delay -= 0.1;

		$('ul.qualifications').prepend(html)
	});
});