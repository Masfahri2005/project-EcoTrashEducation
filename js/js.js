// dropdown menu
const toggleBtn = document.querySelector(".toggle_btn");
const toggleIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = () => {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");
  toggleIcon.classList = isOpen
    ? "fa-sharp fa-solid fa-xmark"
    : "fa-sharp fa-solid fa-bars";
};
