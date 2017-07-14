var position = 100;
window.addEventListener("scroll",function(){
  var posScroll = window.pageYOffset || document.body.scrollTop;
  if(posScroll>position){
    document.getElementsByClassName('navbar')[0].classList.add("bg-nav");
  }else {
    document.getElementsByClassName('navbar')[0].classList.remove("bg-nav");

  }

},false);
