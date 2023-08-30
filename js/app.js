// Book class:represents a book
        class Book{
            constructor(title,author,isbn){
                this.title=title;
                this.author = author;
                this.isbn = isbn;
            }
        }
        

class UI {
    // static displayBooks(){
    //     const storeBooks = [
    //         {
    //             title : "raat ki raani",
    //             author : "Avhishek Bhardwaj",
    //             isbn : "12526"
    //         },
    //         {
    //             title : "wo undekhi raat",
    //             author : "Avhishek Bhardwaj",
    //             isbn : "12527"
    //         },
    //         {
    //             title : "First Kiss (mehak)",
    //             author : "Avhishek Bhardwaj",
    //             isbn : "12528"
    //         },
           
    //     ];

    //     const books = storeBooks;

    //     books.forEach((book)=> UI.addBookToList(book));
    // }

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
    list.appendChild(row);
  }

  //delete book
  static deleteBook(el){
    if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove();
    }
  }
  //clear fields
  static clearFields(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';

  }

  }


// Store Class : Handles Storage

// Event :Display Books 

document.addEventListener('DOMContentLoaded',UI.displayBooks);
 
//Event : Add a book

document.getElementById('book-form').addEventListener('submit',(e)=>{
        //get the value
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;

        //validation
        if(title === '' || author === '' || isbn === ''){
            alert("Please fill all the fields");
        } else{
              //instiate book
        const book = new Book(title,author,isbn);
        //add book to UI
      UI.addBookToList(book);

      //clear fields
      UI.clearFields();
      

        }

    

})


// Event : Remove a book

document.getElementById('book-list').addEventListener('click',(e)=>{
    UI.deleteBook(e.target)
})

//Event : Edit the book




document.querySelector('#title').value = '';
