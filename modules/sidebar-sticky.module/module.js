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