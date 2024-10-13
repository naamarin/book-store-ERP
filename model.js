let ID = 1;
const DUMP = [
    {
        id: ID++,
        title: 'Eragon',
        price: '9.45$',
        img: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Eragon_book_cover.png',
        rate: 10
    },
    {
        id: ID++,
        title: 'Eldest',
        price: '8.99$',
        img: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Eldest_book_cover.png',
        rate: 10
    },
    {
        id: ID++,
        title: 'Brisingr',
        price: '7.86$',
        img: 'https://upload.wikimedia.org/wikipedia/en/7/70/Brisingr_book_cover.png',
        rate: 10
    },
    {
        id: ID++,
        title: 'Inheritance',
        price: '9.39$',
        img: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Inheritance2011.JPG',
        rate: 10
    },
    {
        id: ID++,
        title: 'Artemis Fowl',
        price: '7.49$',
        img: 'https://upload.wikimedia.org/wikipedia/en/0/07/Artemis_Fowl_first_edition_cover.jpg',
        rate: 10
    },
    {
        id: ID++,
        title: 'Artemis Fowl and the Arctic Incident',
        price: '8.43$',
        img: 'https://upload.wikimedia.org/wikipedia/en/2/25/Artemisfowl2.JPG',
        rate: 10
    },
    {
        id: ID++,
        title: 'Artemis Fowl and the Eternity Code',
        price: '7.50$',
        img: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Artemisfowl3.JPG',
        rate: 10
    },
    {
        id: ID++,
        title: 'Artemis Fowl and the Last Guardian',
        price: '9.98$',
        img: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Artemis_Fowl_and_the_The_Last_Guardian_UK_cover.jpg',
        rate: 10
    },
    {
        id: ID++,
        title: 'Artemis Fowl and the Lost Colony',
        price: '7.87$',
        img: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Covers_af5.jpg',
        rate: 10
    },
    {
        id: ID++,
        title: 'Artemis Fowl and the Time Paradox',
        price: '8.03$',
        img: 'https://upload.wikimedia.org/wikipedia/en/3/3a/ArtemisFowlTimeParadoxCover.gif',
        rate: 10
    },
    {
        id: ID++,
        title: 'Artemis Fowl and the Atlantis Complex',
        price: '6.09$',
        img: 'https://upload.wikimedia.org/wikipedia/en/0/03/Artemis_Fowl_-_The_Atlantis_Complex.jpg',
        rate: 10
    },
    {
        id: ID++,
        title: 'Percy Jackson & the Olympians: The Lightning Thief',
        price: '12.90$',
        img: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Percy_Jackson_%26_the_Olympians_The_Lightning_Thief_poster.jpg',
        rate: 10
    },
    {
        id: ID++,
        title: 'Percy Jackson: Sea of Monsters',
        price: '9.74$',
        img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Percy-Jackson-Sea-poster.jpg',
        rate: 10
    },
    {
        id: ID++,
        title: "Harry Potter and the Philosopher's Stone",
        price: '15.88$',
        img: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
        rate: 10
    },
    {
        id: ID++,
        title: 'Harry Potter and the Chamber of Secrets',
        price: '16.98$',
        img: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
        rate: 10
    },
    {
        id: ID++,
        title: 'Harry Potter and the Prisoner of Azkaban',
        price: '12.33$',
        img: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
        rate: 10
    },
    {
        id: ID++,
        title: 'Harry Potter and the Goblet of Fire',
        price: '11.32$',
        img: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png',
        rate: 10
    },
    {
        id: ID++,
        title: 'Harry Potter and the Order of the Phoenix',
        price: '23.93$',
        img: 'https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg',
        rate: 10
    },
    {
        id: ID++,
        title: 'Harry Potter and the Half-Blood Prince',
        price: '31.82$',
        img: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png',
        rate: 10
    },
    {
        id: ID++,
        title: 'Harry Potter and the Deathly Hallows',
        price: '27.46$',
        img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg',
        rate: 10
    },
    {
        id: ID++,
        title: 'The Mortal Instruments: City of Bones',
        price: '24.99$',
        img: 'https://upload.wikimedia.org/wikipedia/en/f/fe/The_Mortal_Instruments_-_City_of_Bones_Poster.jpg',
        rate: 10
    },
    {
        id: ID++,
        title: 'City of Glass (Clare novel)',
        price: '23.89$',
        img: 'https://upload.wikimedia.org/wikipedia/en/9/99/City_of_glass.jpg',
        rate: 10
    },
];

let books = [];

function manageMemorey() {

    if (localStorage.getItem('dump')) {
        books = JSON.parse(localStorage.getItem('dump'));
        // Update ID to the next available
        ID = books.length ? Math.max(...books.map(book => book.id)) + 1 : 1;
    } else {
        books = DUMP;
        localStorage.setItem('dump', JSON.stringify(books));
    }
}

function getBook(book) {
    return `
        <tr class="book">
            <td>${book.id}</td>
            <td><button class="inner-button" onclick="displayDetails(${book.id})">${book.title}</button></td>
            <td>${book.price}</td>
            <td>
                <div class="actions">
                    <button class="inner-button" onclick="displayDetails(${book.id})">Read</button>
                    <button class="inner-button" onclick="updateDetails(${book.id})">Update</button>
                    <button class="inner-button" onclick="deleteDetails(${book.id})">Delete</button>
                </div>
            </td>
        </tr>
    `
}

function getBooks(books) {
    return books.map(book => getBook(book)).join("");
}

document.getElementById('updateForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const modal = document.getElementById("updateModal");


    const newTitle = document.getElementById('title').value;
    const newPrice = document.getElementById('price').value;
    const newImageUrl = document.getElementById('imageUrl').value;
    const newRrate = document.getElementById('rateField').value;
    const bookId = document.getElementById('id').value;

    if (books.some(book => book.id == bookId)) {
        let bookIndex = books.findIndex(book => book.id == bookId);

        books[bookIndex].title = newTitle || books[bookIndex].title;
        books[bookIndex].price = newPrice || books[bookIndex].price;
        books[bookIndex].img = newImageUrl || books[bookIndex].img;
        books[bookIndex].rate = newRrate || books[bookIndex].rate;
    } else {
        books.push({
            id: ID++,
            title: newTitle,
            price: newPrice,
            img: newImageUrl,
            rate: newRrate
        });
    }
    
    localStorage.setItem('dump', JSON.stringify(books));

    modal.style.display = "none";
    renderBooks(getBooks(books));
    this.reset();
});

function deleteDetails(bookId) {
    books = books.filter(book => book.id !== bookId);
    localStorage.setItem('dump', JSON.stringify(books));

    renderBooks(getBooks(books));
}