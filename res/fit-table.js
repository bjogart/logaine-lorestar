function wrap_table(table) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('table-scroller');

    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
}

for (table of document.getElementsByTagName('table')) {
    wrap_table(table);
}
