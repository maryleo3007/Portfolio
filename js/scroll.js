var position = 100;
window.addEventListener("scroll",_ => {
  var posScroll = window.pageYOffset || document.body.scrollTop;
  if(posScroll>position){
    document.getElementById("nav-header").classList.add("nav-header");
    $('nav').removeClass('show');
  }else {
    document.getElementById("nav-header").classList.remove("nav-header");
  }
},false);

$(_ => {
  $('#show-nav').on('click', _ => {
    $('nav').toggleClass('show');
  });

  //Con este intento cerrarlo dando click afuera del menú:

  $('.contenedor').on('click', _ => {$('nav').removeClass('show');});
  $('#about').on('click', _ => {$('nav').removeClass('show');});
  $('#portafolio').on('click', _ => {$('nav').removeClass('show');});

});
