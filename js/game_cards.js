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
      const wrapper = document.createElement("a");
      gametext.innerText = game.name;
      gamedesc.innerText = game.description;
      wrapper.href = game.href;
      gameimg.src = game.img;
      cards.appendChild(wrapper);
      wrapper.appendChild(card);
      wrapper.style.textDecoration = "none"; // remove the stupid underline since its a link
      card.appendChild(innerdiv);
      card.prepend(gameimg); // puts at top of inside div, append puts at bottom
      innerdiv.appendChild(gametext);
      innerdiv.appendChild(gamedesc);
    });
  });
});
