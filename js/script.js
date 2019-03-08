/***********************************************************************************************************************************
                                          TEAM TREEHOUSE JS TECHDEGREE UNIT 2 PROJECT
                                                lIST PAGINATION AND FILTERING
***********************************************************************************************************************************/

const studentList = document.getElementsByClassName("student-item cf");

const showPage = (list, page) => {
  for (i = 0; i < list.length; i++) {
    const maxIndex = (page * 10) - 1;
    const index = (page * 10) - 10;
    let students = studentList[i];
    if (i >= index && i <= maxIndex) {
      students.style.display = "block";
    } else {
        students.style.display = "none";
    }
  }
}


//function that creates the pagination links and adds them to the page
const appendPageLinks = (list) => {
    const totalNumberOfPages = Math.ceil(studentList.length/10);
       
    //Create a div, give it the “pagination” class, and append it to the div with class of page
    const paginationDiv = document.createElement("div");  
    paginationDiv.setAttribute("class", "pagination");
    const pageDiv = document.querySelector("div.page");
    pageDiv.appendChild(paginationDiv);
  
  
    //Add a ul to the “pagination” div to store the pagination links
    const ul = document.createElement("ul");
    paginationDiv.appendChild(ul);

  //Add li and a tags for each page. Then add event listener to each a tag so it'll call the showPage function, & apply active class to only the the link clicked.
    for (i = 1; i <= totalNumberOfPages; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      let pageNumber = i + ' ';
      a.textContent = pageNumber;
      li.appendChild(a);
      ul.appendChild(li);
    }
  //activating showPage function when page links are clicked on
    const aTags = document.querySelectorAll('a');
       aTags.forEach((button) =>{
         button.addEventListener('click', (e) => {
           button.classList.remove('active');
           showPage(studentList, button.textContent);
           e.target.classList.toggle('active', true);
           button.classList.remove('active');
         });
       })
      }

appendPageLinks(studentList);
showPage(studentList, 1);