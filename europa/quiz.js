function $(id) {
  return document.getElementById(id);
}

function ZaladujKraje(kraje) {
  var request = makeHttpObject();
  request.open("GET", kraje, true);
  request.send(null);
  request.onreadystatechange = function() {
  if (request.readyState == 4)
    return request.responseText;
};
}

function QuizStart () {
     var przycisk_start = $('start');
     var pytanie = $('pytanie');
     var baza_pytan = ZaladujKraje('kraje_i_stolice.json');

     przycisk_start.innerHTML = 'Jeszcze raz!';
    

    pytanie.innerHTML = 'test';

}
