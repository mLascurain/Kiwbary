const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks(myLibrary) {
  for (let i = 0; i < myLibrary.length; i++) {
    const bookDisplay = myLibrary[i];
    const container = document.querySelector(".books-container");
    if (!container) {
      console.error(
        "No container element found with the class 'books-container'",
      );
      return;
    }
    const book = document.createElement("div");
    book.classList.add("book"); // Add class for styling (if needed)
    book.innerHTML = `
        <h2>${bookDisplay.title}</h2>
        <h3>${bookDisplay.author}</h3>
        <p>${bookDisplay.pages}</p>
        <p>${bookDisplay.read}</p>
    `;
    container.appendChild(book);
  }
}

// Make sure the function runs after the DOM is loaded
window.onload = function () {
  displayBooks(myLibrary);
};

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

const form = document.getElementById("book-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userTitle = document.getElementById("title").value;
  const userAuthor = document.getElementById("author").value;
  const userPages = document.getElementById("pages").value;
  const userRead = document.getElementById("read").checked;

  addBookToLibrary(userTitle, userAuthor, userPages, userRead);
  dialog.close();
  displayBooks(myLibrary);
});
