function addBook(title, author, year, completion) {
  const bookObject = makeBookObject(title, author, year, completion);
  const book = createBook(title, author, year, bookObject.id);

  books.push(bookObject);

  if (completion) {
    finishedBookContainer.appendChild(book);
  } else {
    unfinishedBookContainer.appendChild(book);
  }

  updateData();
}

function createBook(title, author, year, id) {
  const book = document.createElement("div");
  book.classList.add("single-book");
  book.setAttribute("id", id);

  const bookTitle = document.createElement("h3");
  bookTitle.classList.add("single-book-title");
  bookTitle.innerText = title;

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("single-book-author");
  bookAuthor.innerText = author;

  const bookYear = document.createElement("p");
  bookYear.classList.add("single-book-year");
  bookYear.innerText = year;

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

  moveBtn.addEventListener("click", (e) => {
    moveBook(e.target.parentElement, book);
  });
  delBtn.addEventListener("click", (e) => {
    deleteBook(e.target.parentElement);
  });

  return book;
}

function moveBook(parent, book) {
  if (parent.parentElement.classList.contains("finished-list-container")) {
    const bookObject = findBook(book.getAttribute("id"));
    bookObject.isCompleted = false;

    parent.remove();
    unfinishedBookContainer.appendChild(book);
  } else {
    const bookObject = findBook(book.getAttribute("id"));
    bookObject.isCompleted = true;

    parent.remove();
    finishedBookContainer.appendChild(book);
  }
  updateData();
}
function deleteBook(parent) {
  const del = confirm("Apakah anda yakin akan menghapus buku dari rak?");
  if (del) {
    const bookPos = findBookIndex(parent.getAttribute("id"));
    books.splice(bookPos, 1);

    parent.remove();
    updateData();
  }
}
