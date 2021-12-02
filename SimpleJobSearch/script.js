const fetchHandler = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  const jobCard = document.querySelector(".jobCard");
  for (let i = 0; i < data.length; i++) {
    const Item = document.createElement("li");
    const jobItem = document.createElement("p");
    const levelItem = document.createElement("p");
    jobItem.textContent = data[i].company;
    levelItem.textContent = data[i].level;
    Item.className = "card-item";
    jobItem.className = "job";
    levelItem.className = "level";
    levelItem.id = "level";
    jobCard.appendChild(Item);
    Item.appendChild(jobItem);
    Item.appendChild(levelItem);
  }
};
fetchHandler();

function search() {
  const input = document.querySelector("input");
  let x = document.getElementsByTagName("li");
  for (let j = 0; j < x.length; j++) {
    if (
      !x[j].childNodes[0].textContent.toLocaleLowerCase().includes(input.value)
    ) {
      x[j].style.display = "none";
    } else {
      x[j].style.display = "list-item";
    }
  }
}

function filter() {
  const select = document.getElementById("search");
  const text = select.options[select.selectedIndex].text;
  const x = document.getElementsByTagName("li");
  for (let k = 0; k < x.length; k++) {
    if (x[k].childNodes[1].textContent === text) {
      x[k].style.display = "list-item";
    } else {
      x[k].style.display = "none";
    }
  }
}
