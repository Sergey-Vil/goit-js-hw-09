const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");t.addEventListener("click",(function(){l=setInterval((()=>{e.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0,d.disabled=!1,console.log(l)})),d.addEventListener("click",(function(){clearTimeout(l),l=null,t.disabled=!1,d.disabled=!0}));let l=null;d.disabled=!0;
//# sourceMappingURL=01-color-switcher.542c8856.js.map