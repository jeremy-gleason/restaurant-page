(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"171d150217a8c51931b0.jpg";function n(){const e=document.getElementById("content"),n=document.createElement("h1");n.innerText="The Great Restaurant",e.appendChild(n);const i=new Image;i.src=t,e.appendChild(i);const s=document.createElement("p");s.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas. Aenean vel elit scelerisque mauris pellentesque pulvinar. Dolor magna eget est lorem ipsum dolor. Nulla aliquet enim tortor at auctor urna. Quisque id diam vel quam elementum pulvinar etiam. Diam maecenas sed enim ut sem. Sed velit dignissim sodales ut eu. A diam maecenas sed enim ut sem viverra aliquet. Porta non pulvinar neque laoreet suspendisse interdum.",e.appendChild(s);const a=document.createElement("cite");a.innerText="Photo by Ella Olsson on Unsplash",e.appendChild(a)}const i=e.p+"16b18ed89c59cafecb42.jpg",s=e.p+"31c1b3ddf2e73617a76d.jpg",a=document.getElementById("home-tab"),c=document.getElementById("menu-tab"),r=document.getElementById("contact-tab");function u(){const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)}n(),a.addEventListener("click",(function(e){a.classList.contains("selected")||(u(),n(),document.querySelector(".selected").classList.remove("selected"),a.classList.add("selected"))})),c.addEventListener("click",(function(e){c.classList.contains("selected")||(u(),function(){const e=document.getElementById("content"),t=document.createElement("h1");t.innerText="Menu",e.appendChild(t);const n=new Image;n.src=i,e.appendChild(n);const s=document.createElement("p");s.innerText="Proin fermentum leo vel orci porta non pulvinar neque. Eget duis at tellus at. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Fermentum dui faucibus in ornare. Turpis nunc eget lorem dolor sed viverra. Id semper risus in hendrerit. Sed turpis tincidunt id aliquet risus feugiat in. Faucibus interdum posuere lorem ipsum dolor sit amet. Dictumst quisque sagittis purus sit amet volutpat. Interdum velit laoreet id donec. Vitae sapien pellentesque habitant morbi. Dignissim enim sit amet venenatis. Sed velit dignissim sodales ut eu. A diam maecenas sed enim ut sem viverra aliquet. Porta non pulvinar neque laoreet suspendisse interdum.",e.appendChild(s);const a=document.createElement("cite");a.innerText="Photo by Brooke Lark on Unsplash",e.appendChild(a)}(),document.querySelector(".selected").classList.remove("selected"),c.classList.add("selected"))})),r.addEventListener("click",(function(e){r.classList.contains("selected")||(u(),function(){const e=document.getElementById("content"),t=document.createElement("h1");t.innerText="Contact Us",e.appendChild(t);const n=new Image;n.src=s,e.appendChild(n);const i=document.createElement("p");i.innerText="At urna condimentum mattis pellentesque id nibh. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Vestibulum morbi blandit cursus risus at. Porttitor lacus luctus accumsan tortor. Rutrum quisque non tellus orci. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Quisque sagittis purus sit amet volutpat consequat mauris. Massa sapien faucibus et molestie. Tristique senectus et netus et malesuada fames ac turpis egestas. Feugiat pretium nibh ipsum consequat nisl vel.",e.appendChild(i);const a=document.createElement("cite");a.innerText="Photo by Firmbee.com on Unsplash",e.appendChild(a)}(),document.querySelector(".selected").classList.remove("selected"),r.classList.add("selected"))}))})();