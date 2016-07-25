var btn_alert = document.getElementById("button-alert");

btn_alert.addEventListener("click", function () {
  /** Mensagem no console **/
  console.info("Clicou");
  /** Alerta no navegador **/
  alert("Alert Clicou");
});


var btn_end = document.getElementById("button-end");

btn_end.addEventListener("click", function () {
  // Cria um Elemento P
  var p = document.createElement("p");
  // Cria um elemento de texto
  var textNode = document.createTextNode("Ok");
  p.appendChild(textNode);
  // Pega o Body
  var body = document.getElementsByTagName("body")[0];
  // Adiciona o elemento P ao body
  body.appendChild(p);
});
