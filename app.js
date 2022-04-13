const addBookBtn = document.getElementById("addBookBtn");
const addBtn = document.getElementById('addBtn')
const bookForm = document.getElementById("newBookForm");
let library = [
  {
    title: "She would be King",
    author: "Wayetu Moore",
    totalPages: 312,
    read: false,
  },
  "Why i stopped talking to white people about race",
  "bear in the big blue house",
];

function Book() {
  // Constructor
//   constructor(title, author, pages, readYet){
// this.title = title
// this.author = this.author
// this.pages = this.pages,
// this.readYet = this.readYet
//   }
}

function addBookToLibrary() {
  for (let i = 0; i < library.length; i++) {
    console.log(library[i]);
  }
}

function displayForm (){
    bookForm.style.display = "flex";
}
function addBook() {

}

addBookBtn.addEventListener("click", displayForm);

addBtn.addEventListener('click', addBook)
