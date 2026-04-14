const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-list");
const menuMobile = document.querySelector(".menu-mobile");

btn.addEventListener("click", () => {
	menu.classList.toggle("ativo");
	menuMobile.classList.toggle("bg-ativo");
	btn.textContent = btn.textContent === "☰" ? "✕" : "☰";
});

const openBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-modal");

openBtn.addEventListener("click", () => {
	modal.classList.add("ativo");
});

closeBtn.addEventListener("click", () => {
	modal.classList.remove("ativo");
});

modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.classList.remove("ativo");
	}
});
