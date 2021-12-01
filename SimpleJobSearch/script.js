const fetchHandler = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  const jobCard = document.querySelector(".jobCard");
  for (let i = 0; i < data.length; i++) {
    const jobItem = document.createElement("li");
    jobItem.textContent = data[i].company;
    jobItem.className = "card-item";
    jobCard.appendChild(jobItem);
  }
};
fetchHandler();

function search() {
  const input = document.querySelector("input");
  let x = document.getElementsByTagName("li");
  for (let j = 0; j < x.length; j++) {
    if (!x[j].textContent.toLocaleLowerCase().includes(input.value)) {
      x[j].style.display = "none";
    } else {
      x[j].style.display = "list-item";
    }
  }
}
