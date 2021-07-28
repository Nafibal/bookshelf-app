document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const bookTitle = bookTitleInput.value;
    const bookAuthor = bookAuthorInput.value;
    const bookYear = bookYearInput.value;
    const bookCompletion = bookCompletionInput.checked;
    addBook(bookTitle, bookAuthor, bookYear, bookCompletion);

    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookYearInput.value = "";
    bookCompletionInput.checked = false;
  });

  if (isStorageExist()) {
    loadData();
    renderData();
  }
});
