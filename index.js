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