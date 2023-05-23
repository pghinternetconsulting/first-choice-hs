var sticky_sidebars = document.querySelectorAll(".sidebar-sticky");

sticky_sidebars.forEach(function (sidebar) {
  var sticky_column = sidebar.closest(".dnd-column");
  var sticky_section = sidebar.closest(".dnd-section");

  if (sticky_column) {
    sticky_column.classList.add("sidebar-sticky__column");
  }

  if (sticky_section) {
    sticky_section.classList.add("sidebar-sticky__section");
  }
});

// mobile
if (sticky_sidebars) {
  Array.from(sticky_sidebars).forEach((nav) => {
    var trigger = nav.getElementsByClassName(
      "sidebar-sticky--mobile-trigger"
    )[0];
    var triggertext = nav.getElementsByClassName(
      "sidebar-sticky--mobile-trigger-text"
    )[0];
    var menu = nav.getElementsByClassName("sidebar-sticky--menu")[0];
    var list_links = nav.querySelectorAll(
      ".sidebar-sticky--menu .hs-menu-item a"
    );

    
    var active_link = nav.querySelector('.hs-menu-item a.active')
    var first_link_text = nav.querySelector('.hs-menu-item a').text

    if ( active_link_text ) {
        var active_link_text = active_link.text
        triggertext.innerHTML = active_link_text;
    } else {
        triggertext.innerHTML = first_link_text;
    }

    console.log(first_link_text);
    console.log(triggertext);

    trigger.onclick = () => {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      } else {
        triggertext.innerHTML = "Select";
        menu.classList.add("active");
      }
    };

    //console.log(list_links);
    Array.from(list_links).forEach((link) => {
      link.onclick = (e) => {
        console.log(text)
        var text = e.target.innerHTML;
        triggertext.innerHTML = text;
        menu.classList.remove("active");
      };
    });
  });
}

// Activate menu items when scrolling

const makeSidebarActive = () => {
  var sidebar_elements = document.querySelectorAll(
    ".sidebar-sticky .hs-menu-item a"
  );
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var windowHeight = windowHeight > 600 ? 600 : windowHeight;
  var triggertext = document.getElementsByClassName(
    "sidebar-sticky--mobile-trigger-text"
  )[0];
  //console.log(windowHeight);

  sidebar_elements.forEach((link) => {
    var target_id = link.hash.replace("#", "");
    var target = document.getElementById(target_id);

    if (target) {
      var rect = target.getBoundingClientRect();

      if (
        rect.bottom > 0 &&
        rect.top < windowHeight &&
        rect.right > 0 &&
        rect.left < windowWidth
      ) {
        // Element is visible
        link.classList.add("active");
        triggertext.innerHTML = link.text
      } else {
        // Element is not visible
        link.classList.remove("active");
      }
    }
  });
};

document.addEventListener("scroll", makeSidebarActive);

// Move anchors to columns so active sidebar works better
const moveAnchorstoColumns = () => {
  var sidebar_elements = document.querySelectorAll(
    ".sidebar-sticky .hs-menu-item a"
  );

  sidebar_elements.forEach((link) => {
    var target_id = link.hash.replace("#", "");
    var target = document.getElementById(target_id);

    if (target) {
      var column = target.closest(".dnd-column");
      //console.log(column);
      //column.setAttribute('id', target_id)
    }
  });
};

document.addEventListener("DOMContentLoaded", moveAnchorstoColumns);
