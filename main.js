function openMenu() {
  document.getElementById("mobileMenu").classList.add("is-open");
}
function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("is-open");
}
document.getElementById("mobileMenu").addEventListener("click", function (e) {
  if (e.target === this) closeMenu();
});
