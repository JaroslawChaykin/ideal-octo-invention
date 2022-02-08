import { createBlock } from './createBlock.js';

let buttonToCreateBlock = document.querySelector('button');

let state = [];

buttonToCreateBlock.addEventListener('click', () => {

    buttonToCreateBlock.setAttribute('disabled', 'disabled')

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
          state = json
          buttonToCreateBlock.removeAttribute('disabled')
          console.log(state);
      }).then(() => {
        state.forEach(item => {
            createBlock(item);
        })
    })
})

