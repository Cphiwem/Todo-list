const item = document.querySelector("#item");

inputlength = () => item.value.length;
// function inputlength() {
//   return item.value.length;
// }

item.addEventListener("keyup", function (event) {
  if (inputlength() > 0 && event.key == "Enter") {
    addDo(this.value);
    this.value = "";
  }
});

const addDo = (item) => {
  const listitem = document.createElement("li");
  listitem.innerHTML = `${item} <i class='fa fa-times'> </i> `;
  listitem.addEventListener("click", function () {
    listitem.classList.toggle("done");
  });

  listitem.querySelector("i").addEventListener("click", function () {
    listitem.remove();
  });
  box.appendChild(listitem);
};
