document.getElementById('menu').addEventListener('click',toggleMobMenu);
const main=document.getElementById('body');
const mobMenu=getDiv();

function getDiv() {
  let div=document.createElement('div');
  let d=document.createElement('div');
  let a=document.createElement('a');
  div.className='overlay-container';
  div.id='mobMenu';
  d.textContent="\u2715";
  d.id='close';
  d.addEventListener('click',toggleMobMenu);
  div.appendChild(d);
  a.textContent="Portfolio";
  a.className='overlay';
  a.href='#works';
  a.addEventListener('click',toggleMobMenu);
  div.appendChild(a);
  a=document.createElement('a');
  a.textContent="About";
  a.className='overlay';
  a.href='#about';
  a.addEventListener('click',toggleMobMenu);
  div.appendChild(a);
  a=document.createElement('a');
  a.textContent="Contact";
  a.className='overlay';
  a.href='#contacts';
  a.addEventListener('click',toggleMobMenu);
  div.appendChild(a);
  return div;
}

function showMobMenu(){
  main.appendChild(mobMenu);
  document.body.classList.toggle('no-scroll');
}

function hideMobMenu(){
  main.removeChild(mobMenu)
  document.body.classList.toggle('no-scroll');
}

  function toggleMobMenu(e) {
  (this.id==='menu') ? showMobMenu():hideMobMenu();
  console.log(this.id);  
  }