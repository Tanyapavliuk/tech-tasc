(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const l=document.querySelector("#emailInput");l.addEventListener("input",f);function f(e){const i=e.target.value,r=/^[a-zA-Z0-9\.\_\-\@]+$/,t=l.parentElement.nextElementSibling;r.test(i)?(l.classList.remove("error"),t.classList.remove("error")):(l.classList.add("error"),t.classList.add("error"))}const a=document.querySelector("#telInput");a.addEventListener("input",h);function h(e){const i=e.target.value;var r=/^\+380\d{9}$/;const t=a.parentElement.nextElementSibling;r.test(i)?(a.classList.remove("error"),t.classList.remove("error")):(a.classList.add("error"),t.classList.add("error"))}let d=new c;function c(){this.toasts=[],this.timeouts=new Map}c.prototype.push=function(e,i){requestAnimationFrame(()=>{let r=e.attach(0);this.toasts.forEach(o=>{o.seek(r)}),this.toasts.push(e),this.timeouts.set(e,setTimeout(()=>this.remove(e),i))})};c.prototype.remove=function(e){if(this.timeouts.has(e))clearTimeout(this.timeouts.get(e)),this.timeouts.delete(e);else return;const i=this.toasts.indexOf(e),r=this.toasts.splice(i,1)[0],o=e.element.offsetHeight;r.detach(),this.toasts.slice(0,i).forEach(t=>t.seek(-o))};c.prototype.removeAll=function(){for(;this.toasts.length>0;)this.remove(this.toasts[0])};s.TYPE_INFO="info";s.TYPE_MESSAGE="message";s.TYPE_WARNING="warning";s.TYPE_ERROR="error";s.TYPE_DONE="done";s.TIME_SHORT=2e3;s.TIME_NORMAL=4e3;s.TIME_LONG=8e3;let p={deleteDelay:300,topOrigin:0};function s(e="No text!",i=s.TYPE_INFO,r=s.TIME_LONG){let o=document.createElement("div"),t=document.createElement("div");o.className="toast",t.className=`body ${i}`,o.appendChild(t),e instanceof Element?t.appendChild(e):t.textContent=`${e}`,this.element=o,this.position=0,d.push(this,r)}s.prototype.attach=function(e){return this.position=e,this.updateVisualPosition(),document.body.appendChild(this.element),requestAnimationFrame(()=>{this.element.classList.add("displayed")}),this.element.offsetHeight};s.prototype.seek=function(e){this.position+=e,this.updateVisualPosition()};s.prototype.updateVisualPosition=function(){requestAnimationFrame(()=>{this.element.style.bottom=-p.topOrigin+this.position+"px"})};s.prototype.detach=function(){let e=this;this.element.parentNode&&(requestAnimationFrame(()=>{this.element.classList.remove("displayed"),this.element.classList.add("deleted")}),setTimeout(()=>{requestAnimationFrame(()=>{!e.element||!e.element.parentNode||e.element.parentNode.removeChild(e.element)})},p.deleteDelay))};s.prototype.delete=function(){d.remove(this)};const E=document.querySelector("#submit");E.addEventListener("click",v);const m=document.querySelectorAll(".form-input"),y=document.querySelector("#checkbox");function v(e){e.preventDefault();const i=y.checked;if(i||new s("Are you agree to the Terms of Use and Privacy Policy?",s.TYPE_ERROR,s.TIME_NORMAL),i){const r=Array.from(m).some(o=>o.value==="");if(r&&(Array.from(m).forEach(o=>{o.value!==""&&o.classList.remove("error"),o.value===""&&o.classList.add("error")}),new s("Please fill in all input fields!",s.TYPE_ERROR,s.TIME_NORMAL)),!r){Array.from(m).forEach(t=>t.classList.remove("error"));const o=document.querySelector("#form");new s("Thank you for your registration!",s.TYPE_DONE,s.TIME_NORMAL),o.reset()}}}
