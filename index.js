
const {hash}=window.location
const message = atob(hash.replace("#", ""))
const form = document.querySelector("form");
const messageShow = document.querySelector("#message-show");

if(message){
  form.classList.add(".hide");
  messageShow.classList.remove("hide")
  document.querySelector("h1").innerHTML=message
}

form.addEventListener("submit", event =>{
  event.preventDefault(); //we have no back end server to receive the input-submit
  const input = document.querySelector("#message-input");
  const value = input.value;
  const encripted  = btoa(value);
  const inputbis = document.querySelector("#link-input");
  inputbis.value = urlMaker(encripted);
  const display = document.querySelector(".share");
  const panel = document.querySelector(".card-panel");
  display.classList.remove("hide");
  panel.classList.add("hide");
  inputbis.select();
});

function urlMaker(encription) {
  const domain = window.location.toString()
  return `
  ${domain}#${encription}
  `;  
};

