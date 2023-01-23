(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}const t=function(){const t=document.getElementById("main");return t.textContent="",t.appendChild(function(){const t=document.createElement("div"),n=document.createElement("img");return n.src="/dist/img/home-logo.png",n.alt="Welcome home image",n.classList.add("home-logo"),t.appendChild(n),t.appendChild(e("ようこそ、 京都の春風へ!")),t.appendChild(e("Welcome to Kyoto's Harukaze!")),t.appendChild(e("We are honored to serve you since 1908.")),t}()),t};function n(e,t){const n=document.createElement("div"),a=document.createElement("img"),d=document.createElement("p");return a.src=`/dist/img/${e}.png`,a.alt=`${e} photo as menu item`,d.textContent=t,a.classList.add("menu-img"),n.classList.add("menu-group"),n.appendChild(a),n.appendChild(d),n}function a(){const e=document.createElement("header");e.classList.add("header");const a=document.createElement("img"),o=document.createElement("h1"),i=document.createElement("div");return a.src="img/logo.png",a.alt="Restaurant logo",o.textContent="Kyoto's Harukaze",a.classList.add("logo"),o.classList.add("logo-text"),i.classList.add("logo-group"),i.appendChild(a),i.appendChild(o),e.appendChild(i),e.appendChild(function(){const e=document.createElement("div"),a=document.createElement("button"),o=document.createElement("button"),i=document.createElement("button");return a.textContent="Home",o.textContent="Menu",i.textContent="Contact Us",a.classList.add("nav-button"),o.classList.add("nav-button"),i.classList.add("nav-button"),e.appendChild(a),e.appendChild(o),e.appendChild(i),a.addEventListener("click",(e=>{t(),e.target.classList.contains("active-button")||d(a)})),o.addEventListener("click",(e=>{e.target.classList.contains("active-button")||(function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu-main"),e.appendChild(n("sushi1","Futomaki")),e.appendChild(n("sushi2","Mix Sushi Rolls")),e.appendChild(n("ramen1","Naruto Special Ramen")),e.appendChild(n("udon","Chef's Legendary Udon")),e.appendChild(n("bbqset","BBQ Lunch Set")),e.appendChild(n("omurice","Omurice")),e.appendChild(n("onigiri","Tuna Mayo Onigiri")),e.appendChild(n("gyoza","Gyoza")),e.appendChild(n("yakitori","Yakitori")),e}())}(),d(o))})),i.addEventListener("click",(e=>{e.target.classList.contains("active-button")||(function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("p"),n=document.createElement("p"),a=document.createElement("p"),d=document.createElement("iframe");return t.textContent="601-8417 Nishikujo Toriiguchicho, Minami Ward, Kyoto.",n.textContent="+70-9999-1234",a.textContent="kyotonoharukaze@gmail.com",d.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13074.270813904059!2d135.74082803980906!3d34.992491522035806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108a97fae4bf1%3A0x742487efb2e95a14!2sAEON%20MALL%20KYOTO!5e0!3m2!1sen!2str!4v1674494265760!5m2!1sen!2str",d.classList.add("map"),e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(d),e}())}(),d(i))})),e}()),e}function d(e){document.querySelectorAll(".nav-button").forEach((e=>{e!==this&&e.classList.remove("active-button")})),e.classList.add("active-button")}!function(){const e=document.getElementById("content");e.appendChild(a()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("i"),n=document.createElement("a"),a=document.createElement("p");return n.href="https://github.com/oguzhanmolu",a.textContent="oguzhanmolu",e.classList.add("footer"),t.classList.add("fa-brands"),t.classList.add("fa-github"),n.appendChild(t),e.appendChild(n),e.appendChild(a),e}()),d(document.querySelector(".nav-button")),t()}()})();