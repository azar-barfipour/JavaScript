const fetchHandler = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  const jobCard = document.querySelector(".jobCard");
  for (let i = 0; i < data.length; i++) {
    const Item = document.createElement("li");
    const jobItem = document.createElement("p");
    const levelItem = document.createElement("p");
    const position = document.createElement("p");
    const logo = document.createElement("img");
    const languages = document.createElement("p");
    const location = document.createElement("p");
    const role = document.createElement("p");
    const postedAt = document.createElement("p");
    const contract = document.createElement("p");
    const tools = document.createElement("p");
    jobItem.textContent = data[i].company;
    levelItem.textContent = data[i].level;
    position.textContent = data[i].position;
    languages.textContent = data[i].languages;
    location.textContent = data[i].location;
    role.textContent = data[i].role;
    postedAt.textContent = data[i].postedAt;
    contract.textContent = data[i].contract;
    tools.textContent = data[i].tools;
    logo.src = data[i].logo;
    Item.className = "card-item";
    jobItem.className = "job";
    levelItem.className = "level";
    levelItem.id = "level";
    position.className = "position";
    logo.className = "logo";
    languages.className = "languages";
    location.className = "location";
    role.className = "role";
    postedAt.className = "postedAt";
    contract.className = "contract";
    tools.className = "tools";
    jobCard.appendChild(Item);
    Item.appendChild(logo);
    Item.appendChild(jobItem);
    Item.appendChild(position);
    Item.appendChild(postedAt);
    Item.appendChild(contract);
    Item.appendChild(location);
    Item.appendChild(role);
    Item.appendChild(levelItem);

    Item.appendChild(languages);
    Item.appendChild(tools);
  }
};
fetchHandler();

function search() {
  const input = document.querySelector("input");
  let x = document.getElementsByTagName("li");
  for (let j = 0; j < x.length; j++) {
    if (
      !x[j].childNodes[1].textContent.toLocaleLowerCase().includes(input.value)
    ) {
      x[j].style.display = "none";
    } else {
      x[j].style.display = "list-item";
      x[j].style.display = "float";
    }
  }
}

function filter() {
  const select = document.getElementById("search");
  const text = select.options[select.selectedIndex].text;
  const x = document.getElementsByTagName("li");
  for (let k = 0; k < x.length; k++) {
    if (x[k].childNodes[7].textContent === text) {
      x[k].style.display = "list-item";
    } else {
      x[k].style.display = "none";
    }
  }
}
