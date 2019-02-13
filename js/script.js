const studentList = document.querySelector("student-list");

const showPage = (list, page = 1) => {
  for (i = 0; i < list.length; i++) {
    const maxIndex = (page * 10) - 1;
    const index = (page x 10) - 10;
    if (i >= index && i <= maxIndex) {
      list[i].style.display = "block";
    } else {
        list[i].style.display = "none";
    }
  }
}

showPage (studentList);


//function that creates the pagination links and adds them to the page
const appendPageLinks = (list) => {
    const totalNumberOfPages = Math.ceil(studentList.length/10);
    const currentPage = 1;
    //Create a div, give it the “pagination” class, and append it to the div with class of page
    const paginationDiv = document.createElement("div");
    paginationDiv.setAttribute("class", "pagination");
    const pageDiv = document.querySelector("div.page");
    document.body.insertBefore(paginationDiv, pageDiv);
  
  
    //Add a ul to the “pagination” div to store the pagination links
    const ul = document.createElement("ul");
    paginationDiv.appendChild(ul);
  
    //Add li and a tags for each page. Then add event listener to each a tag so it'll call the showPage function, & apply active class to only the the link clicked.
    for (i = 0; i < totalNumberOfPages.length; i++) {
      const li = document.createElement("li");
      const aTag = () => {
        const a = document.createElement("a");
        const pageNumber = document.createTextNode(currentPage);
        a.appendChild(pageNumber);     
        a.addEventListener('click', showPage);  
        a.classList.toggle("active", false);
        event.target.classList.toggle("active", true);
        currentPage++
        }
      li.appendChild(aTag);
      ul.appendChild(li);
     }
  
}

appendPageLinks (studentList);