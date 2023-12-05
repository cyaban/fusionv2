if (window.location.href.startsWith(window.origin + "/#/play?")) {
  const docbody = document.body;
  document.title = "Classes";

  // Remove existing iframe with ID "fusion"
  const existingIframe = document.getElementById("fusion");
  if (existingIframe) {
    existingIframe.remove();
  }

  const iframe = document.createElement("iframe");
  const fusion = document.getElementById("fusion");
  docbody.style.backgroundColor = "#000";
  docbody.style.height = "100%";
  docbody.style.width = "100%";
  docbody.style.position = "absolute";
  docbody.style.margin = "0";
  docbody.style.padding = "0";
  fusion.innerHTML = "";
  iframe.style.border = "0";
  iframe.style.position = "absolute";
  iframe.style.height = "100%";
  iframe.style.width = "100%";

  // Set the iframe source dynamically
  const customIframeSource = "https://example.com/custom-source";
  iframe.src = customIframeSource;

  // Append the new iframe to the document body
  document.body.prepend(iframe);

  document.querySelector("link[rel='icon']").href = "/img/class.png";
}



