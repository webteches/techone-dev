document.addEventListener('DOMContentLoaded', () => {

  $('a[href*="#"]')
  .not('[href="#"]')
  .click( function(event) {
    if(
      location.pathname.replace(/^\//, '') ==              
      this.pathname.replace(/^\//, '') 
                  && 
      location.hostname == this.hostname){
      var target = $(this.hash);
      target = target.length ? target : $('[name=' +        this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });


  let modal = document.getElementById('p-show');
  let modal_image = document.querySelector('#p-show .modal-background img')
  let modal_buttons = document.querySelectorAll('.modal button');

  let contact_modal = document.querySelector('#c-show');
  let contact_buttons = document.querySelectorAll('.contact');
  let tile_image = document.querySelectorAll('.tile img');

  modal_buttons.forEach(function(el){
    el.addEventListener("click", function(){      
        this.parentNode.classList.toggle('is-active')
    });
})


  tile_image.forEach(function (el) {
    el.addEventListener('click', function() {
        modal_image.attributes.src.value = this.attributes.src.value;
        modal.classList.toggle('is-active');
    });
  });

  contact_buttons.forEach(function(el){
    el.addEventListener('click', function(){
          contact_modal.classList.toggle('is-active');
    })
  });

});