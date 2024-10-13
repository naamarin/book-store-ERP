function renderBooks(books) {
    document.getElementById('table-body').innerHTML = books;
}

function displayDetails(bookid) {
    const book = DUMP.find(book => book.id === bookid)
    console.log(book);
    document.getElementById('book-title').innerText = book.title;
    document.getElementById('book-img').src = book.img;
    document.getElementById('book-price').innerText = 'Price: ' + book.price;
    document.getElementById('rate').innerHTML = `<p>Rate: </p>
                                <button class="rate-button">-</button>
                                <div id="number"></div>
                                <button class="rate-button">+</button>`;
    document.getElementById('number').innerText = book.rate;
    console.log(book);
}