/*

1. Dom Selection
2. Event listener
3. Basic validation
4. Creatng element
5. append 
 */

const book = document.querySelector('.book');
const author = document.querySelector('.author');
const year = document.querySelector('.year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('.Book-List');

btn.addEventListener('click', function (e){
    if(book.value === ''){
        alert('Please , Write Something')
    }else if(author.value === ''){
        alert('Please , Write Something')
    }else if(year.value === ''){
        alert('Please , Write Something')
    }
    
    
    else {
        e.preventDefault();
        const newRow = document.createElement('tr');

        //creating new title
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        console.log(newAuthor);
        
        //creating new book
        const newBook = document.createElement('th');
        newBook.innerHTML = book.value;
        newRow.appendChild(newBook);

        //creating new year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);


    }
})