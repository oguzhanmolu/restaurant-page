(()=>{"use strict";function t(t){const e=document.createElement("p");return e.textContent=t,e}const e=function(){const e=document.getElementById("main");return e.textContent="",e.appendChild(function(){const e=document.createElement("div"),n=document.createElement("img");return n.src="/dist/img/home-logo.png",n.alt="Welcome home image",n.classList.add("home-logo"),e.appendChild(n),e.appendChild(t("ようこそ、 京都の春風へ!")),e.appendChild(t("Welcome to Kyoto's Harukaze!")),e.appendChild(t("We are honored to serve you since 1908.")),e}()),e};function n(t,e){const n=document.createElement("div"),a=document.createElement("img"),d=document.createElement("p");return a.src=`/dist/img/${t}.png`,a.alt=`${t} photo as menu item`,d.textContent=e,a.classList.add("menu-img"),n.classList.add("menu-group"),n.appendChild(a),n.appendChild(d),n}function a(){const t=document.createElement("header");t.classList.add("header");const a=document.createElement("img"),o=document.createElement("h1"),i=document.createElement("div");return a.src="img/logo.png",a.alt="Restaurant logo",o.textContent="Kyoto's Harukaze",a.classList.add("logo"),o.classList.add("logo-text"),i.classList.add("logo-group"),i.appendChild(a),i.appendChild(o),t.appendChild(i),t.appendChild(function(){const t=document.createElement("div"),a=document.createElement("button"),o=document.createElement("button"),i=document.createElement("button");return a.textContent="Home",o.textContent="Menu",i.textContent="Contact Us",a.classList.add("nav-button"),o.classList.add("nav-button"),i.classList.add("nav-button"),t.appendChild(a),t.appendChild(o),t.appendChild(i),a.addEventListener("click",(t=>{e(),t.target.classList.contains("active-button")||d(a)})),o.addEventListener("click",(t=>{t.target.classList.contains("active-button")||(function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu-main"),t.appendChild(n("sushi1","Fat Roll Set")),t.appendChild(n("sushi2","Mix Sushi Set")),t.appendChild(n("ramen1","Naruto Hokage Special")),t.appendChild(n("udon","Chef's special Udon")),t.appendChild(n("bbqset","BBQ Lunch Set")),t.appendChild(n("omurice","Omurice")),t.appendChild(n("onigiri","Tuna Mayo Onigiri")),t.appendChild(n("gyoza","Gyoza")),t.appendChild(n("yakitori","Yakitori")),t}())}(),d(o))})),i.addEventListener("click",(t=>{t.target.classList.contains("active-button")||d(i)})),t}()),t}function d(t){document.querySelectorAll(".nav-button").forEach((t=>{t!==this&&t.classList.remove("active-button")})),t.classList.add("active-button")}!function(){const t=document.getElementById("content");t.appendChild(a()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer"),e=document.createElement("i"),n=document.createElement("a"),a=document.createElement("p");return n.href="https://github.com/oguzhanmolu",a.textContent="oguzhanmolu",t.classList.add("footer"),e.classList.add("fa-brands"),e.classList.add("fa-github"),n.appendChild(e),t.appendChild(n),t.appendChild(a),t}()),d(document.querySelector(".nav-button")),e()}()})();