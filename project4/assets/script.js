// Basic interactivity: navigation toggle, active link on scroll, simple contact form handler
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', ()=> navLinks.classList.toggle('show'));

  // Active link on scroll
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  function activateOnScroll(){
    const pos = window.scrollY + window.innerHeight/3;
    sections.forEach(sec=>{
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const id = sec.id;
      if(pos >= top && pos < bottom){
        navAnchors.forEach(a=> a.classList.toggle('active', a.getAttribute('href') === '#'+id));
      }
    });
  }
  window.addEventListener('scroll', activateOnScroll);
  activateOnScroll();

  // Insert year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Simple contact handler (fake)
  window.handleContact = function(ev){
    ev.preventDefault();
    const name = document.getElementById('name').value;
    alert('Thanks, ' + name + '! Message sent (demo).');
    ev.target.reset();
  };
});
