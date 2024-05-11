let tentativas = 1
let numberRandom = (Math.floor(Math.random()*10))
console.log(numberRandom)

document.addEventListener('keyDown', function(e) {

  if(e.key == 'Enter' && 
  document.querySelector(".screen1").classList.contains('hide')){
    handleClick()
  } 
})

function handleClick(event) {
  event.preventDefault(); // em outras palavras: nao siga o padrão


  const inputNumber = Number(document.querySelector('#inputNumber').value);
  
  if (inputNumber == numberRandom ) {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");

    document.querySelector("h2").innerText = `Você acertou em ${tentativas} vezes`
  }

  tentativas++
  console.log(numberRandom)
}

function handleClickReset() {
  
  document.querySelector(".screen1").classList.remove("hide");
  document.querySelector(".screen2").classList.add("hide");

  tentativas=1
  numberRandom = (Math.floor(Math.random()*10))
}

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener('click',handleClick)
btnReset.addEventListener('click',handleClickReset)

