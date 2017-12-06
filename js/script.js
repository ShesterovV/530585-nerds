  var link = document.querySelector(".letter");

  var popup = document.querySelector(".write-us-form");
  var close = popup.querySelector(".write-us-exit");

  // var form = popup.querySelector(".write-us-form");
  var login = popup.querySelector("[name=login]");
  var email = popup.querySelector("[name=email]");

  var storage = localStorage.getItem("login");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-us-form-show");
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
    login.focus();
    }
});

  close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("write-us-form-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("write-us-form-show")) {
      popup.classList.remove("write-us-form-show");
    }
  }
});

  popup.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      console.log("Нужно заполнить все поля");
    } else {
    localStorage.setItem("login", login.value);
  }
});
