// textarea counter
const msg=document.getElementById('message');
const count=document.getElementById('count');
if(msg){
  msg.addEventListener('input',()=>{
    count.textContent=msg.value.length;
  });
}

// scroll to top
document.getElementById('toTop').onclick=()=>{
  window.scrollTo({top:0,behavior:'smooth'});
};

// form submit
const form=document.getElementById('orderForm');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    document.getElementById('formResult').textContent =
      'Заявка принята! Мы уже создаём ваше видео 🚀';
    setTimeout(()=>form.reset(),1500);
  });
}

// HERO buttons actions
const btnOrder = document.getElementById('btnOrder');
const btnDemo = document.getElementById('btnDemo');

if (btnOrder) {
  btnOrder.addEventListener('click', () => {
    const target = document.getElementById('order');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

if (btnDemo) {
  btnDemo.addEventListener('click', () => {
    const target = document.getElementById('examples');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// nav active on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
