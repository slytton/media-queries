$('i.fa-reorder').on('click', function(event){
  if($('ul').hasClass('slideUp')){
    $('ul').removeClass('slideUp')
  }else{
    $('ul').addClass('slideUp')
  }
})


$(document).on('click', function(event){
  if(event.toElement !== $('nav *')[0]) {
    $('ul').removeClass();
  }
})
