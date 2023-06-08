class Bookstore {
  constructor() {
    this.BooksContainer = document.querySelector('.bookList');
    this.bookTitle = document.querySelector('.title');
    this.bookAuthor = document.querySelector('.author');
    this.bookLibrary = [];
    this.addBook = this.addBook.bind(this);
    this.form = document.querySelector('form');
  }

  storedLocal() {
    if (localStorage.getItem('books') == null) {
      localStorage.setItem('books', JSON.stringify(this.bookLibrary));
    }
    const store = localStorage.getItem('books');
    if (store) {
      this.bookLibrary = JSON.parse(store);
    }
  }

  createLibrary() {
    this.BooksContainer.innerHTML = '';
    this.bookLibrary.forEach((book, index) => {
      const bookContainer = document.createElement('div');
      bookContainer.innerHTML = `
        <div class="books_container">
            <p>"${book.titleBook}" by ${book.authorBook}</p>
            <button id=${index} onclick="clickedButton(this.id)">Remove</button>
        </div>
      `;
      this.BooksContainer.appendChild(bookContainer);
    });
  }

  addBook(e) {
    e.preventDefault();
    const titleBook = this.bookTitle.value;
    const authorBook = this.bookAuthor.value;
    const newBooks = { titleBook, authorBook };
    this.bookLibrary.push(newBooks);
    localStorage.setItem('books', JSON.stringify(this.bookLibrary));
    this.createLibrary();
    // Reset input fields
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }

  formAct() {
    this.form.addEventListener('submit', this.addBook);
  }

  removeBook(index) {
    this.bookLibrary = this.bookLibrary.filter((book, bookIndex) => bookIndex !== index);
    localStorage.setItem('books', JSON.stringify(this.bookLibrary));
    this.createLibrary();
  }
}
const objectOne = new Bookstore();
objectOne.formAct();
objectOne.storedLocal();
objectOne.createLibrary();
objectOne.removeBook();
function clickedButton(theId) {
  const savedInfo = parseInt(theId, 10);
  objectOne.removeBook(savedInfo);
}

clickedButton();
