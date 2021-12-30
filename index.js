
const {hash}=window.location
const message = atob(hash.replace("#", ""))
const form = document.querySelector("form");
const messageShow = document.querySelector("#message-show");
const createMessage = document.querySelector("#createMessage");

if(message){
  createMessage.classList.add("hide");
  messageShow.classList.remove("hide")
  document.querySelector("h2").innerHTML=message
}

form.addEventListener("submit", event =>{
  event.preventDefault(); //we have no back end server to receive the input-submit
  const input = document.querySelector("#message-input");
  const inputbis = document.querySelector("#link-input");
  const friendShare = document.querySelector("#friendShare");
  // const createMessage = document.querySelector("#createMessage");
  const value = input.value;
  const encripted  = btoa(value);
  inputbis.value = urlMaker(encripted);
  friendShare.classList.remove("hide");
  createMessage.classList.add("hide");
  inputbis.select();
});

function urlMaker(encription) {
  const domain = window.location.toString()
  return `
  ${domain}#${encription}
  `;  
};

