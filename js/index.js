const BooksContainer = document.querySelector('.bookList');
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const form = document.querySelector('form');

let bookLibrary = [];

if (localStorage.getItem('books') == null){
    localStorage.setItem('books', JSON.stringify(bookLibrary));
}

const store = localStorage.getItem('books');
if (store) {
  bookLibrary = JSON.parse(store);
}

function createLibrary() {
  BooksContainer.innerHTML = '';
  bookLibrary.forEach((book, index) => {
    const bookContainer = document.createElement('div');
    bookContainer.innerHTML = `
        <p>${book.title}</p>
       <p> ${book.author}</p>
            <button onclick="removeBook(${index})">Remove</button>
        <hr>
    `;
    BooksContainer.appendChild(bookContainer);
  });
}

// Add New Book to The List
function addBook(e) {
  e.preventDefault();
  const newBooks = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };

  bookLibrary.push(newBooks);
  localStorage.setItem('books', JSON.stringify(bookLibrary));

  createLibrary();

  // Reset input fields
  bookTitle.value = '';
  bookAuthor.value = '';
}

// Add New Book to The List

function removeBook(index) {
  bookLibrary = bookLibrary.filter((book, bookIndex) => bookIndex !== index);
  localStorage.setItem('books', JSON.stringify(bookLibrary));

  createLibrary();
}
form.addEventListener('submit', addBook);

createLibrary();
removeBook();