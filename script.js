const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('navbar');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
}

btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);