const P=[[1,'Glass Work Kit',100,'P_1.png',1,1,'Everything for working with glass, designed for delicate hands.'],
[2,'Watercolor Set',60,'P_2.png',0,0,'Paints, palette and brushes for quick, relaxed sessions.'],
[3,'Sculpting Tool Set',55,'P_3.png',1,0,'Wooden carving and shaping tools for detailed sculpture.'],
[4,'Pottery Kit',90,'P_4.png',1,0,'Tools and clay accessories to take a pot from lump to glaze.'],
[6,'Wood Craft Small Kit',70,'P_6.jpeg',1,0,'Knives and a spoon blank to start your first carving.'],
[7,'Clay Tool Kit',25,'P_7.jpeg',0,0,'Ribs, sponge and loop tool: the essentials for clay work.'],
[8,'Color Pencil Kit',80,'P_8.png',0,1,'A boxed set of colour pencils and sketchbooks.'],
[9,'Acrylic Painting Kit',85,'P_9.png',0,0,'Acrylics, brushes and an easel-ready canvas.']].map(a=>({id:a[0],n:a[1],p:a[2],i:'Images/'+a[3],slow:a[4],del:a[5],d:a[6]}));
const $=s=>document.querySelector(s),get=(k,d)=>JSON.parse(localStorage.getItem(k)||'null')??d,set=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const find=id=>P.find(p=>p.id==id),qs=new URLSearchParams(location.search),page=location.pathname.split('/').pop()||'Home.html';
function toast(m){let t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
function add(id,n=1){const c=get('cart',{});c[id]=(c[id]||0)+n;if(c[id]<1)delete c[id];set('cart',c);head();return c}
function wish(id){let w=get('wish',[]);w=w.includes(id)?w.filter(x=>x!=id):[...w,id];set('wish',w);return w.includes(id)}
const count=()=>Object.values(get('cart',{})).reduce((a,b)=>a+b,0);
function head(){const L=[['Home.html','Home'],['Shop.html','Products'],['Questionnaire.html','Find a Kit'],['About.html','About'],['Contact.html','Contact']];
$('header').innerHTML=`<a class="brand" href="Home.html"><img src="Images/logo.png" alt="">KraftKit</a><nav>${L.map(l=>`<a href="${l[0]}" class="${l[0]==page?'on':''}">${l[1]}</a>`).join('')}</nav>
<div class="icons"><a href="Shop.html" title="Search"><i class="fa-solid fa-magnifying-glass"></i></a><a href="Shop.html?view=wishlist" title="Wishlist"><i class="fa-regular fa-heart"></i></a>
<a href="Bill.html" title="Cart"><i class="fa-solid fa-cart-shopping"></i>${count()?`<span class="badge">${count()}</span>`:''}</a><a href="Login.html" title="Account"><i class="fa-solid fa-circle-user"></i></a></div>`}
function card(p){const w=get('wish',[]).includes(p.id);return `<div class="card"><button class="heart ${w?'on':''}" data-w="${p.id}" aria-label="Wishlist"><i class="fa-${w?'solid':'regular'} fa-heart"></i></button>
<a href="Details.html?id=${p.id}"><img src="${p.i}" alt="${p.n}"><h3>${p.n}</h3></a><p class="price">$${p.p}</p><button data-a="${p.id}">Add to Cart</button></div>`}
document.addEventListener('click',e=>{const a=e.target.closest('[data-a]'),w=e.target.closest('[data-w]');
if(a){add(+a.dataset.a);toast('Added to cart')}
if(w){const on=wish(+w.dataset.w);w.classList.toggle('on',on);w.innerHTML=`<i class="fa-${on?'solid':'regular'} fa-heart"></i>`;toast(on?'Saved to wishlist':'Removed from wishlist')}});
document.addEventListener('DOMContentLoaded',()=>{
document.head.insertAdjacentHTML('beforeend','<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Red+Hat+Display:wght@500;700&display=swap">');
document.body.insertAdjacentHTML('afterbegin','<header></header>');
document.body.insertAdjacentHTML('beforeend',`<footer><div><section><h3>Contact Us</h3><p>i253010@isb.nu.edu.pk</p><p>+4 561 85 43261</p></section><section><h3>Follow Us On</h3><a href="#"><i class="fa-brands fa-discord"></i></a><a href="#"><i class="fa-brands fa-x-twitter"></i></a><a href="#"><i class="fa-brands fa-instagram"></i></a></section></div></footer><div id="toast"></div>`);
head();(window.init||(()=>{}))()});
