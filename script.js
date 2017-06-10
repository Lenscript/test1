var igor = "Gapisz się w"
var czas = 1
var placek = "ekran już"
setInterval(function () {
$('#test').append('<p>' + igor + ' ' + placek + ' ' + czas++ + 's' + '</p>');
}, 1000);

