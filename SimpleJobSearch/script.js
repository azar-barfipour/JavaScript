const fetchHandler = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  const jobCard = document.querySelector(".jobCard");
  const divContainer = document.createElement("div");

  divContainer.className = "div-container";
  jobCard.appendChild(divContainer);
  for (let i = 0; i < data.length; i++) {
    const Item = document.createElement("li");
    const divJob = document.createElement("div");
    const divSkill = document.createElement("div");
    const logo = document.createElement("img");
    const divJobDet = document.createElement("div");
    const divJobDet1 = document.createElement("div");
    const divJobDet2 = document.createElement("div");
    const divJobDet3 = document.createElement("div");
    const jobItem = document.createElement("p");
    const levelItem = document.createElement("p");
    const neww = document.createElement("p");
    const featured = document.createElement("p");
    const position = document.createElement("p");
    const postedAt = document.createElement("p");
    const postedAtSpan = document.createElement("span");
    const contract = document.createElement("p");
    const contractSpan = document.createElement("span");
    const location = document.createElement("p");
    const role = document.createElement("p");
    logo.src = data[i].logo;
    jobItem.textContent = data[i].company;
    levelItem.textContent = data[i].level;
    if (data[i].new === true) {
      neww.textContent = "new";
    }
    if (data[i].featured === true) {
      featured.textContent = "featured";
    }
    postedAt.textContent = data[i].postedAt;
    postedAtSpan.innerHTML = "&#8226";
    position.textContent = data[i].position;
    contractSpan.innerHTML = "&#8226";
    contract.textContent = data[i].contract + " . ";
    location.textContent = data[i].location;
    role.textContent = data[i].role;

    Item.className = "card-item";
    jobItem.className = "job";
    divJob.className = "div-job";
    logo.className = "logo";
    postedAt.className = "postedAt";
    divJobDet.className = "div-job__deb";
    divJobDet1.className = "div-deb1";
    if (data[i].new === true) {
      neww.className = "neww";
    }
    if (data[i].featured === true) {
      featured.className = "featured";
    }
    divJobDet3.className = "div-deb3";
    position.className = "position";
    contract.className = "contract";
    divSkill.className = "div-skill";
    location.className = "location";
    levelItem.className = "level";
    levelItem.id = "level";
    role.className = "role";
    divContainer.appendChild(Item);
    Item.appendChild(divJob);
    Item.appendChild(divSkill);
    divJob.appendChild(logo);
    divJob.appendChild(divJobDet);
    divJobDet.appendChild(divJobDet1);
    divJobDet.appendChild(divJobDet2);
    divJobDet.appendChild(divJobDet3);
    divJobDet1.appendChild(jobItem);
    divJobDet1.appendChild(neww);
    divJobDet1.appendChild(featured);
    divJobDet2.appendChild(position);
    divJobDet3.appendChild(postedAt);
    divJobDet3.appendChild(postedAtSpan);
    divJobDet3.appendChild(contract);
    divJobDet3.appendChild(contractSpan);
    divJobDet3.appendChild(location);
    divSkill.appendChild(role);
    divSkill.appendChild(levelItem);
    for (let w = 0; w < data[i].languages.length; w++) {
      const languages = document.createElement("p");
      languages.textContent = data[i].languages[w];
      divSkill.appendChild(languages);
      languages.className = "languages";
    }
    if (data[i].tools.length !== 0) {
      for (let q = 0; q < data[i].tools.length; q++) {
        const tools = document.createElement("p");
        tools.textContent = data[i].tools[q];
        divSkill.appendChild(tools);
        tools.className = "tools";
      }
    }
  }
};
fetchHandler();

function search() {
  const input = document.querySelector("input");
  let x = document.getElementsByTagName("li");
  for (let j = 0; j < x.length; j++) {
    if (
      x[
        j
      ].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent.toLocaleLowerCase()
        .trim.length === 0
    ) {
      x[j].classList.remove("search-none");
    }
    if (
      !x[j].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent
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
  const searchRole = document.getElementById("searchRole");
  const textRole = select.options[searchRole.selectedIndex].text;
  const y = document.getElementsByTagName("li");
  const searchLocation = document.getElementById("searchLocation");
  const textLocation = select.options[searchLocation.selectedIndex].text;
  const z = document.getElementsByTagName("li");
  for (let k = 0; k < x.length; k++) {
    if ((x[k].childNodes[1].childNodes[1].textContent === text) || (y[k].childNodes[1].childNodes[0].textContent === textRole) ||
    (z[k].childNodes[0].childNodes[1].childNodes[2].childNodes[4]
        .textContent === textLocation)){
      // x[k].style.display = "list-item";
      x[k].classList.remove("search-none");
      y[k].classList.remove("search-none");
      z[k].classList.remove("search-none");
      // x[k].classList.add("search-display");

    } else {
      // x[k].style.display = "none";
      x[k].classList.add("search-none");
      y[k].classList.add("search-none");
      z[k].classList.add("search-none");
    }
  }
}

// function filterRole() {
//   const select = document.getElementById("searchRole");
//   const textRole = select.options[select.selectedIndex].text;
//   const y = document.getElementsByTagName("li");
//   for (let a = 0; a < y.length; a++) {
//     if (y[a].childNodes[1].childNodes[0].textContent === textRole) {
//       // x[k].style.display = "list-item";
//       y[a].classList.remove("search-none");
//       y[a].classList.add("search-display");
//     } else {
//       // x[k].style.display = "none";
//       y[a].classList.add("search-none");
//     }
//   }
// }

// function filterLocation() {
//   const select = document.getElementById("searchLocation");
//   const textLocation = select.options[select.selectedIndex].text;
//   const z = document.getElementsByTagName("li");
//   for (let b = 0; b < z.length; b++) {
//     if (
//       z[b].childNodes[0].childNodes[1].childNodes[2].childNodes[4]
//         .textContent === textLocation
//     ) {
//       // x[k].style.display = "list-item";
//       z[b].classList.remove("search-none");
//       z[b].classList.add("search-display");
//     } else {
//       // x[k].style.display = "none";
//       z[b].classList.add("search-none");
//     }
//   }
// }
