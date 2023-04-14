var sticky_sidebars = document.querySelectorAll('.sidebar-sticky')

sticky_sidebars.forEach(function(sidebar) {
    var sticky_column = sidebar.closest('.dnd-column');

    if (sticky_column) {
        sticky_column.classList.add('sidebar-sticky__column');
    }
});