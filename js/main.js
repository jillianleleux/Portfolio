// // JS scripts placed here
// let currentPage = 1;
// const totalPages = 5; // Number of `.page` elements

// document.getElementById('nextBtn').addEventListener('click', () => {
//   if (currentPage <= totalPages) {
//     const page = document.getElementById(`page${currentPage}`);
//     page.style.transform = 'rotateY(-180deg)';
//     currentPage++;
//   }
// });

// document.getElementById('prevBtn').addEventListener('click', () => {
//   if (currentPage > 1) {
//     currentPage--;
//     const page = document.getElementById(`page${currentPage}`);
//     page.style.transform = 'rotateY(0deg)';
//   }
// });




let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if(e.className.includes(toggleClassName)) {
    e.className = e.className.replace(' ' + toggleClassName, '');
  } else {
    e.className += ' ' + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage+=2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
    
  }
  else if (page = currentPage - 1) {
    currentPage-=2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
  
}

