// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: "Book One",
                author: "John Doe",
                isbn: "1234567"
            },
            {
                title: "Book Number Two",
                author: "Jane Doe",
                isbn: "456789123"
            },
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector("#book-list");

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";

        document.querySelector("#title").focus();
    }
}

// Store Class: Handle Storage


// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", event => {
    event.preventDefault();
    
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    // Validate all fields are filled
    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields!");
    }
    else {
        // Instantiate a book 
        const book = new Book(title, author, isbn);

        UI.addBookToList(book);

        UI.clearFields();
    }
})


// Event: Remove a Book
document.querySelector("#book-list").addEventListener("click", event => {
    UI.deleteBook(event.target);
});

