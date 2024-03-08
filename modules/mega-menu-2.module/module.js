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
  });
});