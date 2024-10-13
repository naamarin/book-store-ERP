document.addEventListener('DOMContentLoaded', function () { manageMemorey(), renderBooks(getBooksToShow(books)) });

function next() {
    if ((PAGE_NUM + 1) * 5 < books.length) {
        PAGE_NUM++;
        renderBooks(getBooksToShow(books));
    }
}

function back() {
    if (PAGE_NUM > 0) {
        PAGE_NUM--;
        renderBooks(getBooksToShow(books));
    }
}

function numEvent(num) {
    PAGE_NUM = num-1;
    renderBooks(getBooksToShow(books));
}