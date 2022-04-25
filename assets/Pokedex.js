let pokedex = [];

//Loading resources
window.addEventListener("load", () => {
  const inputName = document.querySelector(".nomPokemon");
  const inputType = document.querySelector(".typePokemon");
  const inputUrl = document.querySelector(".urlPokemon");
  const validBtn = document.querySelector(".bouton");
  const carte = document.querySelector(".section2");

  let save = window.localStorage.getItem("registeredPokemon");
  if (save) {
    let save_obj = JSON.parse(save);
    pokedex = save_obj;
    RefreshPokedex();
  }

  validBtn.addEventListener("click", function () {
    createPokemon();
  });

  function createPokemon(name, type, url) {
    let infos = {
      name: inputName.value,
      type: inputType.value,
      url: inputUrl.value,
    };

    pokedex.push(infos);

    inputName.value = "";
    inputType.value = "";
    inputUrl.value = "";

    RefreshPokedex();

    // pokedex.forEach((pokemon) => {
    //   if (
    //     pokemon.inputName == name &&
    //     pokemon.inputType == type &&
    //     pokemon.inputUrl == url
    //   ) {
    //     pokedex.slice(-1);
    //   }
    // });
  }

  function RefreshPokedex() {
    carte.innerHTML = "";

    for (let i = 0; i < pokedex.length; i++) {
      // First block
      let content_container = document.createElement("div");
      content_container.classList.add("content_container");

      // Second block
      let content_card = document.createElement("div");
      content_card.classList.add("content_card");
      content_container.appendChild(content_card);

      // Elements inside
      let imgContent = document.createElement("div");
      imgContent.classList.add("content_image");
      imgContent.innerHTML = `<img src="${pokedex[i].url}" alt="picture of a pokemon">`;
      content_card.appendChild(imgContent);

      let nameContent = document.createElement("div");
      nameContent.classList.add("content_text");
      nameContent.innerHTML = `<h3> ${pokedex[i].name} </h3>`;
      nameContent.style["margin-top"] = "65px";
      content_card.appendChild(nameContent);

      let typeContent = document.createElement("div");
      typeContent.classList.add("content_text");
      typeContent.innerHTML = `<p> ${pokedex[i].type} </p>`;
      content_card.appendChild(typeContent);
      content_card.style.background = setBgColor(pokedex[i].type); // Set color

      let delButton = document.createElement("button");
      delButton.classList.add("content_text", "delete");
      delButton.innerHTML = "Delete from Pokedex";
      content_card.appendChild(delButton);

      delButton.addEventListener("click", function () {
        RemoveElement(i);
      });

      carte.appendChild(content_container);
    }

    let texte = JSON.stringify(pokedex);
    window.localStorage.setItem("registeredPokemon", texte);
  }

  function RemoveElement(index) {
    pokedex.splice(index, 1);
    RefreshPokedex();
  }

  // Colors
  function setBgColor(param) {
    switch (param) {
      case "Steel":
      case "steel":
        return "#ADADC6";

      case "Fight":
      case "fight":
        return "#A55239";

      case "Dragon":
      case "dragon":
        return "#8858F6";

      case "Water":
      case "water":
        return "#399CFF";

      case "Electric":
      case "electric":
        return "#FFC631";

      case "Fairy":
      case "fairy":
        return "#E09AE3";

      case "Fire":
      case "fire":
        return "#F75231";

      case "Ice":
      case "ice":
        return "#5ACEE7";

      case "Insect":
      case "insect":
        return "#ADBD21";

      case "Normal":
      case "normal":
        return "#FCFCFC";

      case "Plant":
      case "plant":
        return "#7BCE52";

      case "Poison":
      case "poison":
        return "#B55AA5";

      case "Psych":
      case "psych":
        return "#FF73A5";

      case "Rock":
      case "rock":
        return "#BDA55A";

      case "Ground":
      case "ground":
        return "#D6B55A";

      case "Spectrum":
      case "spectrum":
        return "#6363B5";

      case "Darkness":
      case "darkness":
        return "#735A4A";

      case "Flight":
      case "flight":
        return "#9CADF7";

      default:
    }
  }
});
