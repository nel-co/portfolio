"use strict";!function(){if(document.getElementById("particles-js")){fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nnaiiil&api_key=4cc9b31d9dfb24d9ae40c9963e7aee9f&format=json").then(function(e){return e.json()}).then(function(e){var t=document.createElement("a");t.id="spotify",t.setAttribute("href",e.recenttracks.track[0].url),t.setAttribute("target","_blank");var c=e.recenttracks.track[0].name+" by "+e.recenttracks.track[0].artist["#text"],n=document.createTextNode("Currently listening to ");t.appendChild(document.createTextNode(c)),document.querySelector(".music").appendChild(n),document.querySelector(".music").appendChild(t)}),particlesJS.load("particles-js","../particlesjs-config.json",function(){console.log("callback - particles.js config loaded")})}var e=document.querySelector(".nav-menu-btn"),t=document.querySelector(".menu");e.addEventListener("click",function(){e.classList.toggle("change"),t.classList.toggle("open")})}();