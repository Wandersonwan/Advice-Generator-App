
const botaoGerador = document.querySelector(".advice-update").addEventListener("click", geradorDeConselhos); 
const idConselho = document.querySelector(".advice-id");
const descriptionConselho = document.querySelector(".advice-description");

async function geradorDeConselhos() {
     const urlGerador = await fetch("https://api.adviceslip.com/advice");
     const resposta = await urlGerador.json();
     const adviceId = `Advice# ${resposta.slip.id}`
     const adviceUpdat = `"${resposta.slip.advice}"`


     idConselho.innerHTML = adviceId
     descriptionConselho.innerHTML = adviceUpdat
};
geradorDeConselhos();



