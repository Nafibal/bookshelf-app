// DOM Element
const form = document.querySelector(".form-container");
const bookTitleInput = document.getElementById("book-title");
const bookAuthorInput = document.getElementById("book-author");
const bookYearInput = document.getElementById("book-year");
const bookCompletionInput = document.getElementById("book-completion");
const finishedBookContainer = document.querySelector(
  ".finished-list-container"
);
const unfinishedBookContainer = document.querySelector(
  ".unfinished-list-container"
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(bookTitleInput.value);
  //   console.log(bookAuthorInput.value);
  //   console.log(bookYearInput.value);
  //   console.log(bookCompletionInput.checked);

  if (bookCompletionInput.checked) {
    finishedBookContainer.appendChild(
      createBook(
        bookTitleInput,
        bookAuthorInput,
        bookYearInput,
        bookCompletionInput
      )
    );
  } else {
    unfinishedBookContainer.appendChild(
      createBook(bookTitleInput, bookAuthorInput, bookYearInput)
    );
  }
});

function createBook(title, author, year, completion) {
  console.log(bookTitleInput.value);

  const book = document.createElement("div");
  book.classList.add("single-book");

  const bookTitle = document.createElement("h3");
  bookTitle.classList.add("single-book-title");
  bookTitle.innerText = title.value;

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("single-book-author");
  bookAuthor.innerText = author.value;

  const bookYear = document.createElement("p");
  bookYear.classList.add("single-book-year");
  bookYear.innerText = year.value;

  const moveBtn = document.createElement("button");
  moveBtn.classList.add("single-book-move-btn");
  moveBtn.innerText = "move";
  
  const delBtn = document.createElement("button");
  delBtn.classList.add("single-book-del-btn");
  delBtn.innerText = "delete";
  
  book.appendChild(bookTitle);
  book.appendChild(bookAuthor);
  book.appendChild(bookYear);
  book.appendChild(moveBtn);
  book.appendChild(delBtn);
  
  moveBtn.addEventListener("click", moveBook(bookCompletionInput.checked, book));
  delBtn.addEventListener("click", deleteBook());

  console.log(book);
  return book;
}

moveBook(completion, book) {
    
}
