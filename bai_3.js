class Book {
    constructor(id, name, year, quantity) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.quantity = quantity;
        this.borrowed = 0; // Số lần mượn
        this.status = quantity > 0; // true: còn sách, false: hết sách
    }

    borrow() {
        if (this.quantity > 0) {
            this.quantity--;
            this.borrowed++;
            this.status = this.quantity > 0;
            displayBooks();
        } else {
            alert(`Sách "${this.name}" đã hết.`);
        }
    }

    add(amount) {
        this.quantity += amount;
        this.status = true;
        displayBooks();
    }
}

let books = [
    new Book("12345", "Toán", 2000, 3),
    new Book("23456", "Văn", 1998, 4),
    new Book("37456", "Tiếng Anh", 1999, 5)
];

function clear() {
    document.getElementById("bookId").value = '';
    document.getElementById("bookName").value = '';
    document.getElementById("bookYear").value = '';
    document.getElementById("bookQuantity").value = '';

}

function displayBooks() {
    let tableContent = "";
    books.forEach((book, index) => {
        tableContent += `<tr>
                    <td>${book.id}</td>
                    <td>${book.name}</td>
                    <td>${book.year}</td>
                    <td>${book.quantity}</td>
                    <td>${book.status ? "Còn sách" : "Hết sách"}</td>
                    <td><button onclick="books[${index}].borrow()">Mượn</button></td>
                    <td><button onclick="books[${index}].add(1)">Thêm 1 quyển</button></td>
                </tr>`;
    });
    document.getElementById("bookList").innerHTML = tableContent;
}

function addNewBook() {
    let id = document.getElementById("bookId").value;
    let name = document.getElementById("bookName").value;
    let year = parseInt(document.getElementById("bookYear").value);
    let quantity = parseInt(document.getElementById("bookQuantity").value);

    if (id.length !== 5 || isNaN(year) || isNaN(quantity) || quantity < 0) {
        alert("Thông tin không hợp lệ!");
        return;
    }
    let idExists = books.some(book => book.id === id);
    if (idExists) {
        alert("Mã sách đã tồn tại! Vui lòng chọn mã khác.");
        return;
    }
    books.push(new Book(id, name, year, quantity));
    displayBooks();
    clear();
}


function showMostBorrowed() {
    let mostBorrowed = books.reduce((max, book) => book.borrowed > max.borrowed ? book : max, books[0]);
    alert(`Sách được mượn nhiều nhất: ${mostBorrowed.name}, Số lần mượn: ${mostBorrowed.borrowed}`);
}

window.onload = displayBooks;