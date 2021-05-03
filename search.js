var jsonLog = null;
$.ajax({
	'async': false,
	'global': false,
	'url': "/film.json",
	'dataType': "json",
	'success': function (data) {
		jsonLog = data;
	}
});


