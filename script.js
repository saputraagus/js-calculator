let button = document.querySelector(".container-button");
let screen = document.querySelector("#screen");

button.addEventListener("click" , (e) => {
  let buttonCLick = e.target;
  let valueButton = buttonCLick.innerText;

  switch (valueButton) {
    case "C":
        screen.value = ""
      break;
    case "<":
        screen.value = screen.value.slice(0, -1)
      break;
    case "%":
      if(screen.value == "") {
        screen.value = ''
      } else {
        screen.value = (screen.value * 0.01)
      }
      break;
    case "=":
        screen.value = eval(screen.value)
      break;
  
    default:
      screen.value = screen.value + valueButton;
      break;
  }

});