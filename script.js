// small helpers: mobile menu and smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.querySelector('.nav-inner');
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
        // close menu on mobile
        if(nav.classList.contains('open')) nav.classList.remove('open');
      }
    });
  });
});
