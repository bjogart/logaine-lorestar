for (table of document.getElementsByTagName("table")) {
  let wrapper = document.createElement("div");
  wrapper.classList.add("table-scroller");

  table.parentNode.insertBefore(wrapper, table);
  wrapper.appendChild(table);
}

for (img of document.getElementsByTagName("img")) {
  let wrapper = document.createElement("div");
  wrapper.classList.add("img-scaler");

  table.parentNode.insertBefore(wrapper, img);
  wrapper.appendChild(img);
}
