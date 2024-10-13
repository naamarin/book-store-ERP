function renderBooks(booksHtml) {
    document.getElementById('table-body').innerHTML = booksHtml;
    let count = 1;
    let buttons_str = ``;
    for (let i = 0; i < books.length; i=i+5) {
        buttons_str += `<button class="number-button" onclick="numEvent(${count})">${count++}</button>`;
    }
    document.getElementById('numbers-buttons').innerHTML = buttons_str;

}

function displayDetails(bookid) {
    const book = books.find(book => book.id === bookid)

    document.getElementById('book-title').innerText = book.title;
    document.getElementById('book-img').src = book.img;
    document.getElementById('book-price').innerText = 'Price: ' + book.price;
    document.getElementById('rate').innerHTML = `<p class="rate-title">Rate: </p>
                                <button class="rate-button" onclick="minus(${book.id})">-</button>
                                <div id="number"></div>
                                <button class="rate-button" onclick="plus(${book.id})">+</button>`;
    document.getElementById('number').innerText = book.rate;
    console.log(book);
}

const modal = document.getElementById("updateModal");

function updateDetails(bookid) {
    document.getElementById('form-title').innerText = 'Update book';
    document.getElementById('form-button').innerText = 'Update';
    const modal = document.getElementById("updateModal");
    modal.style.display = "block";
    let idInput = document.getElementById('id').value = bookid;
    document.getElementById('title').removeAttribute('required');
    document.getElementById('price').removeAttribute('required');
    document.getElementById('imageUrl').removeAttribute('required');
    document.getElementById('rateField').removeAttribute('required');
    document.getElementById('id').removeAttribute('required');
}

const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function addBook() {
    document.getElementById('form-title').innerText = 'Add book';
    document.getElementById('form-button').innerText = 'Add';
    modal.style.display = "block";
    document.getElementById('title').setAttribute('required', 'required');
    document.getElementById('price').setAttribute('required', 'required');
    document.getElementById('imageUrl').setAttribute('required', 'required');
    document.getElementById('rateField').setAttribute('required', 'required');
    document.getElementById('id').setAttribute('required', 'required');
    idInput = document.getElementById('id').value = ID;

}

function plus(bookid) {
    const book = books.find(book => book.id === bookid)
    book.rate = ++book.rate;
    document.getElementById('number').innerText = book.rate;
}

function minus(bookid) {
    const book = books.find(book => book.id === bookid)
    book.rate = --book.rate;
    document.getElementById('number').innerText = book.rate;
}