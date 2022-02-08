export function createBlock({id, title, body}) {
    let root = document.querySelector('.main');
    let block = document.createElement('div');
    let blockTitle = document.createElement('div');
    let blockBody = document.createElement('div');
    let blockBodyText = document.createElement('div');
    let blockTitleComment = document.createElement('div');
    let blockBodyComment = document.createElement('div');

    block.classList.add('block');
    block.setAttribute('data-id', id);

    blockTitle.classList.add('title');
    blockBody.classList.add('body');
    blockBodyText.classList.add('body-text');
    blockTitleComment.classList.add('title-comment');
    blockBodyComment.classList.add('body-comment');

    // blockBodyComment.innerText = commentBody;
    // blockTitleComment.innerText = commentText;
    blockBodyText.innerText = body;
    blockBody.appendChild(blockBodyText);
    // blockBody.appendChild(blockTitleComment);
    // blockBody.appendChild(blockBodyComment);
    blockTitle.innerText = title;
    block.appendChild(blockTitle);
    block.appendChild(blockBody);

    root.appendChild(block);
}