var sticky_sidebars = document.querySelectorAll('.sidebar-sticky')

sticky_sidebars.forEach(function(sidebar) {
    var sticky_column = sidebar.closest('.dnd-column');
    var sticky_section = sidebar.closest('.dnd-section');

    if (sticky_column) {
        sticky_column.classList.add('sidebar-sticky__column');
    }

    if (sticky_section) {
        sticky_section.classList.add('sidebar-sticky__section');
    }
});


// Activate menu items when scrolling

const makeSidebarActive = () => {
    var sidebar_elements = document.querySelectorAll('.sidebar-sticky .hs-menu-item a')
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var windowHeight = (windowHeight > 600) ? 600 : windowHeight;
    console.log(windowHeight)

    sidebar_elements.forEach((link) => {
        var target_id = link.hash.replace('#', '')
        var target = document.getElementById(target_id)
    
        if (target) {
            var rect = target.getBoundingClientRect()
    
            if (rect.bottom > 0 && rect.top < windowHeight && rect.right > 0 && rect.left < windowWidth) {
                // Element is visible
                link.classList.add('active')
              } else {
                // Element is not visible
                link.classList.remove('active')
              }
        }
    })
}

document.addEventListener('scroll', makeSidebarActive)

// Move anchors to columns so active sidebar works better
const moveAnchorstoColumns = () => {
    var sidebar_elements = document.querySelectorAll('.sidebar-sticky .hs-menu-item a')

    sidebar_elements.forEach((link) => {
        var target_id = link.hash.replace('#', '')
        var target = document.getElementById(target_id)
    
        if (target) {
            var column = target.closest('.dnd-column')
            console.log(column)
            column.setAttribute('id', target_id)
        }
    })
}

document.addEventListener('DOMContentLoaded', moveAnchorstoColumns)