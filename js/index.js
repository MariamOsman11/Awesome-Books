class bookStore {
  constructor() {
    this.BooksContainer = document.querySelector('.bookList');
    this.bookTitle = document.querySelector('.title');
    this.bookAuthor = document.querySelector('.author');
    this.bookLibrary = [];
    this.addBook = this.addBook.bind(this);
  }

  storedLocal (){
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
            <button onclick="removeBook(${index})">Remove</button>
        </div>
      `;
      this.BooksContainer.appendChild(bookContainer);
    });
  }

  addBook(e) {
    e.preventDefault();
    const titleBook = this.bookTitle.value;
    const authorBook = this.bookAuthor.value;
    const newBooks = {titleBook, authorBook};
  
    this.bookLibrary.push(newBooks);
    localStorage.setItem('books', JSON.stringify(this.bookLibrary));
  
    this.createLibrary();
  
    // Reset input fields
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }
}

function removeBook(index) {
  Obj1.bookLibrary = Obj1.bookLibrary.filter((book, bookIndex) => bookIndex !== index);
  localStorage.setItem('books', JSON.stringify(Obj1.bookLibrary));

  Obj1.createLibrary();
}

const Obj1 = new bookStore();

const form = document.querySelector('form');
form.addEventListener('submit', Obj1.addBook);

Obj1.storedLocal();
Obj1.createLibrary();
removeBook();
