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

const userNumber = prompt("How many books do you want to load?");
for (let i = 0; i < userNumber; i++) {
  const userTitle = prompt("Please enter the title of the book: ");
  const userAuthor = prompt("Please enter the author of the book: ");
  const userPages = prompt("Please enter the pages of the book: ");
  const userState = prompt("Have you read the book? ");

  addBookToLibrary(userTitle, userAuthor, userPages, userState);
}

console.log(myLibrary);

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
