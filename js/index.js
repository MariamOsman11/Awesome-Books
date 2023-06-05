window.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('added-books');
    const paragraphOne= document.createElement('p')
    paragraphOne.innerHTML = "first book";
    const paragraphTwo = document.createElement('p');
    paragraphTwo.innerHTML = "Written by Robert";
    const underline = document.createElement('hr');
    const buttonRemove = document.createElement('button');
    buttonRemove.innerHTML='Remove';
    mainContainer.appendChild(paragraphOne);
    mainContainer.appendChild(paragraphTwo);
    mainContainer.appendChild(buttonRemove);
    mainContainer.appendChild(underline);
    document.getElementById('bookList').appendChild(mainContainer);
});