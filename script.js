const handburger = document.querySelector(".handburger");
const navlist = document.querySelector(".navlist");

handburger.addEventListener("click", () => {
  navlist.classList.toggle("active");
});
