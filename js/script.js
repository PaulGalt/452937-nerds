var openModal = document.querySelector(".modal-open-btn");
var showModal = document.querySelector(".modal-contact-us");
var closeModal = showModal.querySelector(".modal-close");
var userName = showModal.querySelector("[name=name]");
var userEmail = showModal.querySelector("[name=email]");
var contactForm = showModal.querySelector("form");
var userMessage = showModal.querySelector("[name=message]");
var storageName = localStorage.getItem("userName");
var storageEmail = localStorage.getItem("userEmail");
var storageMessage = localStorage.getItem("userMessage");

openModal.addEventListener("click", function (evt) {
	evt.preventDefault();
	showModal.classList.add("modal-open");

	if (storageName || storageEmail) {
		userName.value = storageName;
		userEmail.value = storageEmail;
		userMessage.focus();
	} else {
		if (storageName) {
			userName.value = storageName;
			userEmail.focus();
		} else {
			userName.focus;
		}
	}
});

closeModal.addEventListener("click", function (evt) {
	evt.preventDefault();
	showModal.classList.remove("modal-open");
	showModal.classList.remove("modal-error");
	userName.classList.remove("modal-invalid");
	userEmail.classList.remove("modal-invalid");
	userMessage.classList.remove("modal-invalid");
});

contactForm.addEventListener("submit", function (evt) {
	if (!userName.value || !userEmail.value || !userMessage.value) {
		evt.preventDefault();
		showModal.classList.add("modal-error");
	} else {
		localStorage.setItem("userName", userName.value);
		localStorage.setItem("userEmail", userEmail.value);
	}
	if (!userName.value) {
		userName.setAttribute("placeholder", "Заполните это поле");
		userName.classList.add("modal-invalid");
	}
	if (!userEmail.value) {
		userEmail.setAttribute("placeholder", "Заполните это поле");
		userEmail.classList.add("modal-invalid");
	}
	if (!userMessage.value) {
		userMessage.setAttribute("placeholder", "Заполните это поле");
		userMessage.classList.add("modal-invalid");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (showModal.classList.contains("modal-open")) {
			evt.preventDefault();
			showModal.classList.remove("modal-open");
			showModal.classList.remove("modal-error");
			userName.classList.remove("modal-invalid");
			userEmail.classList.remove("modal-invalid");
			userMessage.classList.remove("modal-invalid");
		}
	}
});
