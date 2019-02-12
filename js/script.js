const currentPage = 1;
const numberPerPage = 10;
const amountOfPages= totalNumberOfPages;
const studentList = Array.prototype.slice.call(document.querySelectorAll(".student-item cf"));

//function that determines how many pages to create
function totalNumberOfPages () => {return Math.ceil(studentList.length/numberPerPage);}

// ensure current page isn't out of range
const page = if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalNumberOfPages) {
        currentPage = totalNumberOfPages;
    }
//**something is wrong with the commented out code, as it's not hiding or showing anything**

//function hideStudents = studentList.forEach(function(i, student) {
//  if (i >= numberPerPage * currentPage) {
//    (student).hide()
//  }
// });
//
// //--Loop over items in the list parameter, and show only the students for each particular page
//funcion showPage (studentList, currentPage) => {
//  studentList.forEach(function(i, student) {
//    if (i >= limitPerPage * currentPage || i < limitPerPage * (currentPage - 1)) {
//      (student).hide();
//    } else {
//      (student).show();
//    }
//  });
//};


//function that creates the pagination links and adds them to the page
function pagination () => {
 
    //Create a div, give it the “pagination” class, and append it to the div with class of page
    const paginationDiv = document.createElement("div");
    paginationDiv.setAttribute("class", "pagination");
    const pageDiv = document.querySelector("div.page");
    document.body.insertBefore(paginationDiv, pageDiv);
  
  
    //Add a ul to the “pagination” div to store the pagination links
    const ul = document.createElement("ul");
    paginationDiv.appendChild(ul);
  
    //Add li and a tags for each page. Then add event listener to each a tag so it'll call the showPage function, & apply active class to only the the link clicked.
    for (i = 0; i < totalNumberOfPages; i++) {
      const li = document.createElement("li");
      function aTag () => {
        const a = document.createElement("a");
        const pageNumber = document.createTextNode([i + 1]);
        a.appendChild(pageNumber);     
        a.addEventListener('click', showPage);  
        a.classList.toggle("active", false);
        event.target.classList.toggle("active", true);
        }
      li.appendChild(aTag);
      ul.appendChild(li);
     }
  
}


/*
1. Determine how many pages are needed for the list by dividing the
total number of list items by the max number of items per page

2. Create a div, give it the “pagination” class, and append it to the .page div

3. Add a ul to the “pagination” div to store the pagination links

4. for every page, add li and a tags with the page number text

5. Add an event listener to each a tag. When they are clicked call the showPage function to display the appropriate page

6. Loop over pagination links to remove active class from all links

7. Add the active class to the link that was just clicked. You can identify that
clicked link using event.target
*/
}
