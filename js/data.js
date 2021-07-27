const STORAGE_KEY = "bookshelf";

let books = [];

function isStorageExist() {
  if (typeof Storage === undefined) {
    alert("Browser anda tidak mensupport fitur Storage");
    return false;
  }
  return true;
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

function loadData() {
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (data !== null) {
    books = data;
  }

  console.log(books);
}

function updateData() {
  if (isStorageExist()) {
    saveData();
  }
}

function renderData() {
  for (book of books) {
    const newBook = createBook(book.title, book.author, book.year, book.id);
    if (book.isCompleted) {
      finishedBookContainer.appendChild(newBook);
    } else {
      unfinishedBookContainer.appendChild(newBook);
    }
  }
}

function makeBookObject(title, author, year, isCompleted) {
  return {
    id: +new Date(),
    title,
    author,
    year,
    isCompleted,
  };
}

function findBook(bookId) {
  for (book of books) {
    if (book.id == bookId) {
      return book;
    }
  }
  return null;
}

function findBookIndex(bookId) {
  let index = 0;
  for (book of books) {
    if (book.id == bookId) {
      return index;
    }
    index++;
  }
  return -1;
}
