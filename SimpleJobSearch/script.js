const fetchHandler = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  const jobCard = document.querySelector(".jobCard");
  const divContainer = document.createElement("div");

  divContainer.className = "div-container";
  // divJob.className = "div-job";
  // divSkill.className = "div-skill";
  jobCard.appendChild(divContainer);
  // divContainer.appendChild(divJob);
  // divContainer.appendChild(divSkill);
  for (let i = 0; i < data.length; i++) {
    const Item = document.createElement("li");
    const divJob = document.createElement("div");
    const divSkill = document.createElement("div");
    const jobItem = document.createElement("p");
    const levelItem = document.createElement("p");
    const position = document.createElement("p");
    const logo = document.createElement("img");
    // const languages = document.createElement("p");
    const location = document.createElement("p");
    // const role = document.createElement("p");
    const postedAt = document.createElement("p");
    const contract = document.createElement("p");
    // const tools = document.createElement("p");
    jobItem.textContent = data[i].company;
    levelItem.textContent = data[i].level;
    position.textContent = data[i].position;
    // languages.textContent = data[i].languages;
    location.textContent = data[i].location;
    // role.textContent = data[i].role;
    postedAt.textContent = data[i].postedAt;
    contract.textContent = data[i].contract;
    // tools.textContent = data[i].tools;
    logo.src = data[i].logo;
    Item.className = "card-item";
    divJob.className = "div-job";
    jobItem.className = "job";
    // levelItem.className = "level";
    // levelItem.id = "level";
    position.className = "position";
    logo.className = "logo";
    // languages.className = "languages";
    location.className = "location";
    // role.className = "role";
    postedAt.className = "postedAt";
    contract.className = "contract";
    // tools.className = "tools";
    divContainer.appendChild(Item);
    Item.appendChild(divJob);
    Item.appendChild(divSkill);
    divJob.appendChild(logo);
    divJob.appendChild(jobItem);
    divJob.appendChild(position);
    divJob.appendChild(postedAt);
    divJob.appendChild(contract);
    divJob.appendChild(location);
    // Item.appendChild(role);
    divSkill.appendChild(levelItem);

    // Item.appendChild(languages);
    // Item.appendChild(tools);
  }

  // for (let q = 0; q < data.length; q++) {
  //   const ItemSkill = document.createElement("li");
  //   // const jobItem = document.createElement("p");
  //   const levelItem = document.createElement("p");
  //   // const position = document.createElement("p");
  //   // const logo = document.createElement("img");
  //   const languages = document.createElement("p");
  //   // const location = document.createElement("p");
  //   const role = document.createElement("p");
  //   // const postedAt = document.createElement("p");
  //   // const contract = document.createElement("p");
  //   const tools = document.createElement("p");
  //   // jobItem.textContent = data[i].company;
  //   levelItem.textContent = data[q].level;
  //   // position.textContent = data[i].position;
  //   languages.textContent = data[q].languages;
  //   // location.textContent = data[i].location;
  //   role.textContent = data[q].role;
  //   // postedAt.textContent = data[i].postedAt;
  //   // contract.textContent = data[i].contract;
  //   tools.textContent = data[q].tools;
  //   // logo.src = data[i].logo;
  //   ItemSkill.className = "card-item";
  //   // jobItem.className = "job";
  //   levelItem.className = "level";
  //   levelItem.id = "level";
  //   // position.className = "position";
  //   // logo.className = "logo";
  //   languages.className = "languages";
  //   // location.className = "location";
  //   role.className = "role";
  //   // postedAt.className = "postedAt";
  //   // contract.className = "contract";
  //   tools.className = "tools";
  //   divSkill.appendChild(ItemSkill);
  //   // Item.appendChild(logo);
  //   // Item.appendChild(jobItem);
  //   // Item.appendChild(position);
  //   // Item.appendChild(postedAt);
  //   // Item.appendChild(contract);
  //   // Item.appendChild(location);
  //   ItemSkill.appendChild(role);
  //   ItemSkill.appendChild(levelItem);

  //   ItemSkill.appendChild(languages);
  //   ItemSkill.appendChild(tools);
  // }
};
fetchHandler();

function search() {
  const input = document.querySelector("input");
  let x = document.getElementsByTagName("li");
  for (let j = 0; j < x.length; j++) {
    if (
      x[j].childNodes[0].childNodes[1].textContent.toLocaleLowerCase().trim
        .length === 0
    ) {
      x[j].classList.remove("search-none");
    }
    if (
      !x[j].childNodes[0].childNodes[1].textContent
        .toLocaleLowerCase()
        .includes(input.value)
    ) {
      // x[j].style.display = "none";
      x[j].classList.add("search-none");
    } else {
      // x[j].style.display = "list-item";
      x[j].classList.add("search-display");
    }
  }
}

function filter() {
  const select = document.getElementById("search");
  const text = select.options[select.selectedIndex].text;
  const x = document.getElementsByTagName("li");
  for (let k = 0; k < x.length; k++) {
    if (x[k].childNodes[1].childNodes[0].textContent === text) {
      // x[k].style.display = "list-item";
      x[k].classList.remove("search-none");
      x[k].classList.add("search-display");
    } else {
      // x[k].style.display = "none";
      x[k].classList.add("search-none");
    }
  }
}
