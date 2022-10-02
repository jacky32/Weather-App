import citiesData from "./cities.json";

const mapped = citiesData.map((city) => city.name);

export const autocomplete = (inp) => {
  let currentFocus;
  const arr = mapped;
  inp.addEventListener("input", (e) => {
    const inputValue = inp.value;
    closeAllLists();
    if (!inputValue) return false;

    currentFocus = -1;

    const list = document.createElement("div");
    list.id = "autocomplete-list";
    list.classList = "autocomplete-item";

    inp.parentNode.appendChild(list);
    for (let i = 0; i < arr.length; i++) {
      // check if the item starts with the same letters as the text field value:
      if (
        arr[i].substr(0, inputValue.length).toUpperCase() ==
        inputValue.toUpperCase()
      ) {
        const item = document.createElement("DIV");

        item.innerHTML =
          "<strong>" + arr[i].substr(0, inputValue.length) + "</strong>";
        item.innerHTML += arr[i].substr(inputValue.length);
        item.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        item.addEventListener("click", (e) => {
          inp.value = item.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        list.appendChild(item);
      }
    }
  });

  // Focus swapping when pressing arrows
  inp.addEventListener("keydown", (e) => {
    const list = document.getElementById("autocomplete-list");
    if (!list) return false;

    const items = list.getElementsByTagName("div");

    if (e.keyCode == 40) {
      // arrow down
      currentFocus++;
      addActive(items);
    } else if (e.keyCode == 38) {
      // arrow up
      currentFocus--;
      addActive(items);
    } else if (e.keyCode == 13) {
      // enter
      e.preventDefault();
      if (currentFocus > -1) {
        if (items) items[currentFocus].click();
        // TODO: connect
      }
    }
  });
  const addActive = (items) => {
    removeActive(items);
    if (currentFocus >= items.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = items.length - 1;
    items[currentFocus].classList.add("autocomplete-active");
  };

  const removeActive = (items) => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("autocomplete-active");
    }
  };

  const closeAllLists = (targetElement) => {
    const items = document.getElementsByClassName("autocomplete-item");
    for (let i = 0; i < items.length; i++) {
      if (targetElement != items[i] && targetElement != inp) {
        items[i].parentNode.removeChild(items[i]);
      }
    }
  };

  document.addEventListener("click", (e) => {
    closeAllLists(e.target);
  });
};
