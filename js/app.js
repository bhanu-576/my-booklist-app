// Book class:represents a book

class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class :Handle UI tasks


class UI {
    static displayBooks(){
        const storeBooks = [
            {
                title : "raat ki raani",
                author : "Avhishek Bhardwaj",
                isbn : "12526"
            },
            {
                title : "wo undekhi raat",
                author : "Avhishek Bhardwaj",
                isbn : "12527"
            },
            {
                title : "First Kiss (mehak)",
                author : "Avhishek Bhardwaj",
                isbn : "12528"
            },
           
        ];

        const books = storeBooks;

        books.forEach((book)=> UI.addBookToList(book));
    }

  static addBookToList(book)
  {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
   
    
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class = "btn btn-danger btn-sm delete">X</a></td>
    <td><a href="#" class = "btn btn-danger btn-sm edit"><i class = "fas fa-edit"></i></a></td>    
    `;
    console.log("huhu");
    // list.appendChild(row);
    list.appendChild(row);
  }

  }


// Store Class : Handles Storage

// Event :Display Books 

document.addEventListener('DOMContentLoaded',UI.displayBooks);
 
//Event : Add a book


// Event : Remove a book

//Event : Edit the book




