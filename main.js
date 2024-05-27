window.addEventListener("load", function(){
    var loader = document.getElementById("loader");
    loader.innerText = "Complete";
    loader.classList.toggle("loader2");
    loader.style.fontSize = "48px";
    loader.style.color = "red";
});

document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    loader.innerText = "Loading";
    loader.style.fontSize = "48px";
    loader.style.color = "yellow";
});

const texts = ['Holis Chulis', 'Otra Mini Web', 'Espero Te Guste Corazon', 'Te Lo Hice Con Mucha Alegria Y Entuciasmo'];
let count = 0; 
let index = 0;

function type() {
  const currentText = texts[count];
  const letter = currentText.slice(0, ++index);

  document.getElementById('text').textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(erase, 2000);
  } else {
    setTimeout(type, 200);
  }
}

function erase() {
  const currentText = texts[count];
  const letter = currentText.slice(0, --index);

  document.getElementById('text').textContent = letter;

  if (letter.length === 0) {
    count++;
    if (count === texts.length) {
      count = 0;
    }
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 100);
  }
}
type();
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu__toggle');
  const menuLinks = document.querySelectorAll('.menu__item');

  menuLinks.forEach(link => {
      link.addEventListener('click', () => {
          menuToggle.checked = false;
      });
  });
});


document.getElementById('Funct').addEventListener('click', function () {
  window.location.href = 'https://saturngs1107.github.io/index.html';
});