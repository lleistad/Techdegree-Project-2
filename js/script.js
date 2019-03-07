/***********************************************************************************************************************************
                                          TEAM TREEHOUSE JS TECHDEGREE UNIT 2 PROJECT
                                                lIST PAGINATION AND FILTERING
***********************************************************************************************************************************/

const studentList = document.getElementsByClassName("student-item cf");

const showPage = (list, page) => {
  for (i = 0; i < list.length; i++) {
    const maxIndex = (page * 10) - 1;
    const index = (page * 10) - 10;
    if (i >= index && i <= maxIndex) {
      list[i].style.display = "block";
    } else {
        list[i].style.display = "none";
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
    for (i = 0; i < totalNumberOfPages; i=+1) {
      let currentPage = 1;
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.innerHTML = currentPage;
      li.appendChild(a);
      ul.appendChild(li);
      currentPage++;
        }
    a.addEventListener('click', (e) => {
          showPage(studentList, i);  
          a.classList.toggle("active", false);
          Event.target.classList.toggle("active", true);                   
          });
  }
  
showPage(studentList, 1);
appendPageLinks(studentList);