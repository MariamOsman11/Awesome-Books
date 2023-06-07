const BooksContainer = document.querySelector('.bookList');
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const form = document.querySelector('form');

let bookLibrary = [];
const store = localStorage.getItem('books');

function createLibrary() {
  BooksContainer.innerHTML = '';
  bookLibrary.forEach((book, index) => {
    const bookContainer = document.createElement('div');
    bookContainer.innerHTML = `
        <p>${book.title}</p>
       <p> ${book.author}</p>
            <button onclick="removeB(${index})">Remove</button>
        <hr>
    `;
    BooksContainer.appendChild(bookContainer);
  });
}

class Bookstore {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
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
    return this;
  }

  removeBook(index) {
    bookLibrary = bookLibrary.filter((book, bookIndex) => bookIndex !== index);
    localStorage.setItem('books', JSON.stringify(bookLibrary));

    createLibrary();
    return this;
  }
}

const newBook = new Bookstore(bookTitle.value, bookAuthor.value);

// Add New Book to The List
form.addEventListener('submit', (e) => {
  e.preventDefault();
  newBook.addBook();
});
// Add New Book to The List

// Remove Book from the list
function removeB(index) {
  newBook.removeBook(index);
}
// Remove Book from the list

if (store) {
  bookLibrary = JSON.parse(store);
}

if (localStorage.getItem('books') == null) {
  localStorage.setItem('books', JSON.stringify(bookLibrary));
}

createLibrary();
removeB();