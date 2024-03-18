function toggleLike(button) {
  const currentButton = button;
  const likeButtons = currentButton.parentNode.querySelectorAll('.like-button');

  likeButtons.forEach(btn => {
      if (btn === currentButton) {
          btn.classList.toggle('active');
          if (btn.classList.contains('active')) {
              btn.querySelector('i').classList.remove('far');
              btn.querySelector('i').classList.add('fas');
          } else {
              btn.querySelector('i').classList.remove('fas');
              btn.querySelector('i').classList.add('far');
          }
      } else {
          btn.classList.remove('active');
          btn.querySelector('i').classList.remove('fas');
          btn.querySelector('i').classList.add('far');
      }
  });
}

function toggleMenu() {
  var menu = document.getElementById("menu");
  var loginBtn = document.getElementById("login-btn");
  var hamburger = document.getElementById("hamburger");
  var close = document.getElementById("close");

  if (menu.className === "menu") {
      menu.className += " showing";
      hamburger.classList.remove("show");
      hamburger.classList.add("hide");
      close.classList.remove("hide");
      close.classList.add("show");
  } else {
      menu.className = "menu";
      hamburger.classList.remove("hide");
      hamburger.classList.add("show");
      close.classList.remove("show");
      close.classList.add("hide");
  }
}
