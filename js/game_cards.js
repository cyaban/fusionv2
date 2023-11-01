fetch("/js/json/config.json") // Assuming that your config.json file is in the "js/json" directory
  .then(function (response) {
    return response.json(); // Parse the JSON data
  })
  .then(function (config) {
    fetch("/js/json/games.json").then(function (response) {
      response.json().then(function (fusion) {
        fusion.forEach(function (game) {
          const cards = document.getElementById("card-container");
          const card = document.createElement("a");
          const innerdiv = document.createElement("div");
          card.setAttribute("class", "card");
          const gametext = document.createElement("h3");
          const gameimg = document.createElement("img");
          const gamedesc = document.createElement("p");
          const wrapper = document.createElement("div");
          const pin = document.createElement("button");
          const pinlogo = document.createElement("i");
          gametext.innerText = game.name;
          gametext.setAttribute("id", "h3-search");
          gamedesc.innerText = game.description;
          gamedesc.setAttribute("class", "card-description");
          wrapper.setAttribute("class", "card-wrapper");
          pin.title = "Pin game";
          pin.appendChild(pinlogo);
          pinlogo.setAttribute("class", "fa-solid fa-location-pin");
          pin.style.fontSize = "14px";
          pin.onclick = function () {
            pinlogo.style.color = "#ff7558";
            cards.prepend(wrapper);
          };
          gameimg.src = game.img;
          cards.appendChild(wrapper);
          card.href = game.href;
          card.appendChild(innerdiv);
          card.prepend(gameimg); // puts at top of inside div, append puts at bottom
          innerdiv.appendChild(gametext);
          innerdiv.appendChild(gamedesc);
          wrapper.appendChild(pin);
          pin.setAttribute("id", "pin_game");
          wrapper.prepend(card);
          card.addEventListener("click", function () {
            setgame(game.embed);
          });
          function setgame(embed) {
            localStorage.setItem("game-embed", config.fusion_embed + embed);
          }
        });
      });
    });
  });

function search() {
  var input = document.getElementById("card-lookup").value.toLowerCase();
  var cards = document.getElementsByClassName("card");

  for (var i = 0; i < cards.length; i++) {
    var h3 = cards[i].querySelector("h3").textContent.toLowerCase();
    if (h3.includes(input)) {
      cards[i].style.display = "flex";
    } else {
      cards[i].style.display = "none";
    }
  }
}

document.getElementById("card-lookup").addEventListener("input", search);
window.addEventListener("load", function () {
  search();
});
