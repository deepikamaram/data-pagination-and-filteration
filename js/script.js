/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showpage(list, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  const ul = document.querySelector(".student-list");
  ul.innerHTML = "";

  for (let i = startIndex; i < endIndex; i++) {
    let html = `<li class="student-list-item"><div class="student-details">`;
    html += `<img class="student-img" src="${list[i].picture.thumbnail}" alt="image 1" />`;
    html += `<h3 class="student-name">${list[i].name.first} ${list[i].name.last}</h3>`;
    html += `<span class="student-email">${list[i].email}</span></div>`;
    html += `<div class="joined-details"><span class="joined-date">Joined ${list[i].registered.date}</span>`;
    html += `</div></li>`;
    ul.insertAdjacentHTML("beforeend", html);
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  const paginationNum = Math.ceil(list.length / 9);
  const ul = document.querySelector(".link-list");
  ul.innerHtml = "";
  for (let i = 1; i <= paginationNum; i++) {
    let html = `<li><button type="button">${i}</button></li>`;

    ul.insertAdjacentHTML("beforeend", html);
  }

  document.querySelector("button").className = "active";

  document.querySelector(".link-list").addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const curr = e.target;
      const buttons = document.querySelectorAll("button");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute("class");
      }
      curr.className = "active";
      showpage(data, curr.textContent);
    }
  });
}

// Call functions
showpage(data, 1);
addPagination(data);
