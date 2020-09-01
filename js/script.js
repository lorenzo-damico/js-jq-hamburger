// mostrare / nascondere il menu principale

// 1. Seleziono con jquery il bottone ad hamburger.
var hamburger = $(".header-right > a");
console.log(hamburger);

// 2. Seleziono con jquery il bottone di chiusura.
var bottoneChiusura = $(".close");
console.log(bottoneChiusura);

// 3. Creo un evento click sul bottone hamburger che faccia partire una funzione
//    che aggiunge la classe active al menu-hamburger.
hamburger.click(
  function() {
    $(".hamburger-menu").addClass("active");
    // oppure potrei usare
    // $(".hamburger-menu").show();

  }
);

// 4. Creo un evento click sul bottone di chiusura che faccia partire una funzione
//    che rimuove la classe active dal menu-hamburger.
bottoneChiusura.click(
  function() {
    $(".hamburger-menu").removeClass("active");
    // oppure potrei usare
    // $(".hamburger-menu").hide();
  }
);
