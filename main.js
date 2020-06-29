// Attraverso una chiamata ajax all’Api di boolean
// avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.

$(document).ready(function() {


  $.ajax(
    { // Richiamo API

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

    }
  ),

  // BONUS: Creare una select con i seguenti generi: pop, rock,
  // metal e jazz. In base a cosa scegliamo nella
  // select vedremo i corrispondenti cd.

  // Richiamo Select
  $('.genre').change(function () {

    // Riprendo valore Select
    var genre = $(this).val();

    // Nascondo tutti i CD
    $(".cd").hide();

    if (genre === "all") {
      // Se la select è su ALL --> mostro tutto
      $(".cd").show();
    } else {
      // Se la select è su genre singolo --> mostro cd per genere
      $(".cd." + genre).show();
    }
  });

});

// Funzione che stampa singolo cd con Handlebars
// --> tracksList = Inserire array dal quale ricavare i singoli elementi

function showTracks(tracksList) {
  var source = $("#template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < tracksList.length; i++) {

    var singleTrack = tracksList[i]
    singleTrack.genre = singleTrack.genre.toLowerCase();

    // Stampo a schermo con template Handlebars
    var html = template(singleTrack);

    $('.cds-container').append(html);
  };
}
