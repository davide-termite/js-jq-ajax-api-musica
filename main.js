// Attraverso una chiamata ajax all’Api di boolean
// avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.

// BONUS: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella
// select vedremo i corrispondenti cd.


$(document).ready(function() {


  $.ajax(
    {
      // Richiamo API

      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function(data) {

        // Leggo dati dell'oggetto
        var trackSingle = data.response;

        // Richiamo funzione per stampare a schermo
        showTracks(trackSingle);
      },

      error: function (error) {
        alert("Si è verificato un errore " + errore)
      },

    })

});

// Funzione che stampa in html singolo cd
// --> tracksList = Inserire array dal quale ricavare i singoli elementi

function showTracks(tracksList) {
  var source = $("#template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < tracksList.length; i++) {

    var singleTrack = tracksList[i]

    // Stampo a schermo con template Handlebars
    var html = template(singleTrack);

    $('.cds-container').append(html);
  };
}
