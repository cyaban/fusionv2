fetch("/js/json/games.json").then(function (response) {
  response.json().then(function (e) {
    e.forEach(function (game) {
      const cards = document.getElementById("card-container");
      const card = document.createElement("div");
      const innerdiv = document.createElement("div");
      card.setAttribute("class", "card");
      const gametext = document.createElement("h3");
      const gameimg = document.createElement("img");
      const gamedesc = document.createElement("p");
      gametext.innerText = game.name;
      gamedesc.innerText = game.description;
      gameimg.src = game.img;
      cards.appendChild(card);
      card.appendChild(innerdiv);
      card.prepend(gameimg); // puts at top of inside div, append puts at bottom
      innerdiv.appendChild(gametext);
      innerdiv.appendChild(gamedesc);
    });
  });
});
