const name = document.getElementById("name");
const divContainer = document.querySelector(".tag");

const addName = () => {
  const tag = document.createElement("div");
  tag.setAttribute("class", "tag");

  tag.innerText = `Hey, I am ${name.value}`;

  divContainer.append(tag);
}
