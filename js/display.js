const bookList = document.querySelector('.bookList');
const addNew = document.querySelector('.form_styles');
const contacts = document.querySelector('.contact-section');
const bookSection = document.querySelector('.listbooks');
const addNewSection = document.querySelector('.addednew');
const contactMe = document.querySelector('.contactme');
bookList.style.display = 'none';
contacts.style.display = 'none';
bookSection.addEventListener('click', () => {
  bookList.style.display = 'block';
  addNew.style.display = 'none';
  contacts.style.display = 'none';
});
addNewSection.addEventListener('click', () => {
  bookList.style.display = 'none';
  addNew.style.display = 'block';
  contacts.style.display = 'none';
});
contactMe.addEventListener('click', () => {
  bookList.style.display = 'none';
  addNew.style.display = 'none';
  contacts.style.display = 'block';
});
// date section
// Date element
const dateContainer = document.getElementById('date');

function updateDate() {
  const date = new Date();
  dateContainer.innerHTML = date;
}

// Initial update
updateDate();

// Update the date every second (1000 milliseconds)
setInterval(updateDate, 1000);
