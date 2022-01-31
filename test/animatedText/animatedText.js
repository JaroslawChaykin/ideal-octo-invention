let i = document.querySelector("#number");
let b = document.querySelector("#send-num");
let block = document.querySelector('.block');


let minValueInput = 6;

function setText() {
  block.classList.remove('transition');
  let text = i.value

  setTimeout(() => {
    block.classList.add('transition');
    block.innerText = text
  }, 500)
  i.value = '';
  b.setAttribute("disabled", "disabled")
}

i.addEventListener("input", () => {
  if (i.value.length <= minValueInput) {
    b.setAttribute("disabled", "disabled")
  } else if(i.value.length > minValueInput) {
    b.removeAttribute("disabled")
    b.addEventListener('click', setText )
  }
})