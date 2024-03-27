var megamenus = document.querySelectorAll('.megamenu-2 > .has-submenu');

megamenus.forEach(function(megamenu) {
  megamenu.addEventListener('click', function() {
    // add active class to the clicked megamenu
    megamenu.classList.toggle('active');

    // remove active class from all other megamenus
    megamenus.forEach(function(otherMegamenu) {
      if (otherMegamenu !== megamenu) {
        otherMegamenu.classList.remove('active');
      }
    });

    // when click outside of the megamenu, remove active class
    document.addEventListener('click', function(event) {
      if (!megamenu.contains(event.target)) {
        megamenu.classList.remove('active');
      }
    });
  });
});