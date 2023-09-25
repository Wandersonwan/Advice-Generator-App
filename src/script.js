
const btn = document.querySelector(".advice-update").addEventListener("click", geradorDeConselho);
const adviceId = document.querySelector(".advice-id");
const adviceDescription = document.querySelector(".advice-description");

async function geradorDeConselho() {
     const urlApi = await fetch("https://api.adviceslip.com/advice");
     const resultado = await urlApi.json()
     const resultadoId = `Advice# ${resultado.slip.id}`
     const resultadoDescription = `"${resultado.slip.advice}"`


     adviceId.innerHTML = resultadoId
     adviceDescription.innerHTML = resultadoDescription
}
geradorDeConselho()
