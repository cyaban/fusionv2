// Load the JSON object
const jsonData = fetch('/games.json').then(response => response.json());

// Generate the HTML code for the document
jsonData.then(data => {
  const template = Handlebars.compile(document.getElementById('template').innerHTML);
  const html = template({ data });

  // Add the HTML code to the document body
  document.querySelector('.swiper-wrapper').innerHTML = html;
});
