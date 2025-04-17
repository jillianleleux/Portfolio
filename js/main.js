// JS scripts placed here
let currentPage = 1;
const totalPages = 5; // Number of `.page` elements

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentPage <= totalPages) {
    const page = document.getElementById(`page${currentPage}`);
    page.style.transform = 'rotateY(-180deg)';
    currentPage++;
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    const page = document.getElementById(`page${currentPage}`);
    page.style.transform = 'rotateY(0deg)';
  }
});



