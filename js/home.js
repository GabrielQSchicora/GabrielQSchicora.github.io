$(document).ready(function(){
	var data = new Array();

	data.push('img/qualifications/android.jpg');
	data.push('img/qualifications/python.jpg');
	data.push('img/qualifications/jquery.jpg');
	data.push('img/qualifications/css.jpg');

	data.push('img/qualifications/php.jpg');

	data.push('img/qualifications/html.jpg');
	data.push('img/qualifications/agile.jpg');
	data.push('img/qualifications/sass.jpg');
	data.push('img/qualifications/js.jpg');

	data.forEach(function(item){
		var html = '<li class="hide" style="background-image: url('+item+');"></li>';

		$('ul.features').prepend(html)
	});

	/*
	*
	* Show features on load page
	*
	*/
	setTimeout(function(){
		$('ul.features li').removeClass('hide');
	}, 500);
});